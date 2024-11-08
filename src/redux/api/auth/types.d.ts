namespace AUTH {
  type SignUpResponse = void;
  type SignUpRequest = ISignUp;

  type SignInResponse = Authdata;
  type SignInRequest = ILogin;

  type GetMeResponse = IProfile;
  type GetMeRequest = void;
}
