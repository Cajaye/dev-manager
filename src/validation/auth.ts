import IsEmail from "isemail";
import { object, refine, string, number, omit } from "superstruct";
const email = () => refine(string(), "email", (v) => IsEmail.validate(v));

export const ValidateUser = object({
  name: string(),
  email: email(),
  password: string(),
});

export const ValidateLogin = omit(ValidateUser, ["name"]);
