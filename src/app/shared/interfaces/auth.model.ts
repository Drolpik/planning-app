export interface AuthDataLogin {
  email: string;
  password: string;
}

export interface AuthDataSignUp {
  userAccount: {
    email: string;
    password: string;
  };
  userPersonal: {
    dateOfBirth: string;
    gender: string;
    height: number;
    weight: number;
  };
  activityAndGoal: {
    activityLevel: string;
    dietGoal: string;
  };
}
