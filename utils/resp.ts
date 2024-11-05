export const Success = <T = any>(data?: T, msg = "ok") =>
  new Response(JSON.stringify({ err: 0, data, msg }), {
    status: 200,
    statusText: "OK",
    headers: { "Content-Type": "application/json" },
  });

export const Failed = (msg?: string, status = 500) =>
  new Response(JSON.stringify({ err: 1, msg }), {
    status,
    statusText: "Internal Server Error",
    headers: { "Content-Type": "application/json" },
  });
