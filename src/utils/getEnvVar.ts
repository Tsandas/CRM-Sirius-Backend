export function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value;
}

export function getEnvVarOrDefault(name: string, defaultValue: string): string {
  return process.env[name] || defaultValue;
}

export function getEnvVarNumber(name: string, defaultValue: number): number {
  const value = process.env[name];
  return value ? parseInt(value, 10) : defaultValue;
}
