export interface JWTPayload {
  agentId: string;
  username: string;
  role: string;
  iat?: number; // added by jwt.sign
  exp?: number; // added by jwt.sign
}

export interface LoginBody {
  username: string;
  password: string;
}
