import { FreshContext, type Handlers } from "$fresh/server.ts";
import { encode } from "@gz/jwt";
import { Failed, Success } from "../../utils/resp.ts";

export const handler: Handlers = {
  async POST(req: Request, ctx: FreshContext) {
    try {
      const { username, passwd } = await req.json() ?? {};
      console.log(username, passwd);
      if (username !== "admin" || passwd != "123456") {
        return Failed("用户名或密码错误");
      }
      const d = new Date();
      d.setSeconds(d.getSeconds() + (3600 * 10));
      const token = await encode({ username, exp: d.getTime() }, "secret");
      return Success(token);
    } catch (error: any) {
      console.log(error);
      return Failed(error.message);
    }
  },
};
