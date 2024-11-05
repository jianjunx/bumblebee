import type { FreshContext } from "$fresh/server.ts";
import { AuthError } from "./errors.ts";
import { decode } from "@gz/jwt";

interface User {
  username: string;
  exp: number;
}
export const authMiddlware = async (req: Request, ctx: FreshContext) => {
  if (!req.url.includes("/api/admin")) return;
  console.log(req, "===");
  const token = req.headers.get("authorization");
  if (!token) return Promise.reject(new AuthError("no token"));
  const user = await decode<User>(token.slice(7), "secret");
  if (user.exp < Date.now()) {
    return Promise.reject(new AuthError("token expired"));
  }
  Object.assign(ctx, user);
};
