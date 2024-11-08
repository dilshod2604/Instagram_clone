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
    createdAt: string;
    email: string;
    id: number;
    isActive: boolean;
    photo: string;
    role: string;
    updatedAt: string;
    username: string;
  };
}
