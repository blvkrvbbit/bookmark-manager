import crypto from "crypto";
import bcrypt from "bcrypt";

export const generateResetToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

export const hashToken = async (token: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(token, saltRounds);
};

export const compareToken = async (token: string, hashedToken: string) => {
  return await bcrypt.compare(token, hashedToken);
};
