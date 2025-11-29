export interface AgentRow {
  agent_id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  role: string;
  active: boolean;
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface Agent {
  agentId: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  role: string;
  active: boolean;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
