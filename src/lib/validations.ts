import { number, object, string } from "superstruct";

/**
 * Login & Signup validations
 */

const loginSchema = object({
  mobile: number(),
  password: string(),
});

export { loginSchema };
