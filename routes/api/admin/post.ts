import { FreshContext, type Handlers } from "$fresh/server.ts";
import { Success } from "../../../utils/resp.ts";

const getList = () => Promise.resolve([1, 2, 3]);

export const handler: Handlers = {
  async POST(req: Request, ctx: FreshContext) {
    const list = await getList();
    return Success(list);
  },
};
