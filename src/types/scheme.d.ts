interface ISignUp {
  email: string;
  name?: string;
  password: string;
  username: string;
  photo: string;
}

interface ILogin {
  email: string;
  password: string;
}
interface Authdata {
  accessToken: string;
  accessTokenExpiration: number;
  refreshToken: string;
}

interface IProfile {
  profile: {
    id: number;
    username: string;
    role: string;
    email: string;
    isActive: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface User {
  id: number;
  username: string;
  role: "USER" | "ADMIN";
  email: string;
  isActive: boolean;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

interface MediaPost {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: "PHOTO" | "VIDEO";
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface PostLike {
  userId: number;
  postId: number;
  createdAt: string;
  updatedAt: string; 
}
interface FileMetadata {
  name: string;
  lastModified: number;
  lastModifiedDate: Date;
  size: number;
  type: string;
  webkitRelativePath: string;
}
interface UploadFileData {
  format: string;
  name: string;
  url: string;
}

