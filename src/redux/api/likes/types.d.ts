namespace LIKE {
  type ToLikeResponse = PostLike;
  type ToLikeRequest = number;

  type IsLikedResponse = PostLikeInfo;
  type IsLikedRequest = number;

  type UnLikeResponse = PostUnLike;
  type UnLikeRequest = number;
}
