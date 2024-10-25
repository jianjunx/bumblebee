import type { FreshContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<State>,
) {
  if (req.method === "POST") {
    // return new Response("post", { status: 201 });
    console.log("post ===");
  }

  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
