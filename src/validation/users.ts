import IsEmail from "isemail";
import { object, refine, string, number } from "superstruct";
const email = () => refine(string(), "email", (v) => IsEmail.validate(v));

export const ValidateUser = object({
  name: string(),
  email: email(),
  age: number(),
  password: string(),
});
