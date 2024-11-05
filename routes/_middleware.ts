import type { FreshContext } from "$fresh/server.ts";
import { authMiddlware } from "../utils/auth.ts";
import { Failed } from "../utils/resp.ts";

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  try {
    ctx.state = { a: "haha" };
    await authMiddlware(req, ctx);
    return await ctx.next();
  } catch (error: any) {
    console.log(ctx, "ctx");
    return Failed(`${error.name}：${error.message}`, error.status);
  }
}
