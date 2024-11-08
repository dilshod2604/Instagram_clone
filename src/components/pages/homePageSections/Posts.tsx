"use client";
import React, { useRef, useCallback, useState } from "react";
import Postheader from "@/components/ui/Postheader";
import { useGetAllPostsQuery } from "@/redux/api/posts";
import PostActions from "@/components/ui/PostActions";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

const Posts = () => {
  const { data: posts } = useGetAllPostsQuery();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeVideoRef = useRef<HTMLVideoElement | null>(null);
  const [volumeStates, setVolumeStates] = useState<boolean[]>([]);

  const handleVideoClick = useCallback((index: number) => {
    const clickedVideo = videoRefs.current[index];
    if (clickedVideo !== activeVideoRef.current) {
      if (activeVideoRef.current && !activeVideoRef.current.paused) {
        activeVideoRef.current.pause();
      }
      activeVideoRef.current = clickedVideo;
    }
    if (clickedVideo) {
      if (clickedVideo.paused) {
        clickedVideo.play().catch((err) => console.error("Play error:", err));
      } else {
        clickedVideo.pause();
      }
    }
  }, []);

  const toggleVolume = (index: number) => {
    const newVolumeStates = [...volumeStates];
    newVolumeStates[index] = !newVolumeStates[index];
    setVolumeStates(newVolumeStates);
  };

  if (!posts) return null;

  return (
    <section className="w-full overflow-auto">
      <div className="max-w-[630px] flex flex-col items-center px-[40px]">
        <div className="flex flex-col gap-y-4 ">
          {posts.map((post, index) => (
            <div key={post.id} className="flex flex-col gap-y-2 max-w-[500px]">
              <Postheader
                photo={post.user.photo}
                userName={post.user.username}
              />
              {post.mediaType === "PHOTO" ? (
                <div className="max-w-[468px] h-[400px] overflow-hidden rounded-md">
                  <img
                    src={post.mediaUrl}
                    alt="media"
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="max-w-[468px] h-[400px] overflow-hidden rounded-md bg-black relative">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    className="w-full h-full"
                    onClick={() => handleVideoClick(index)}
                    muted={!volumeStates[index]}
                  >
                    <source src={post.mediaUrl} type="video/mp4" />
                  </video>
                  {volumeStates[index] ? (
                    <MdVolumeUp
                      size={20}
                      className="text-white absolute bottom-2 right-2 z-50 cursor-pointer hover:opacity-75 transition"
                      onClick={() => toggleVolume(index)}
                    />
                  ) : (
                    <MdVolumeOff
                      size={20}
                      className="text-white absolute bottom-2 right-2 z-50 cursor-pointer hover:opacity-75 transition"
                      onClick={() => toggleVolume(index)}
                    />
                  )}
                </div>
              )}
              <PostActions />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
