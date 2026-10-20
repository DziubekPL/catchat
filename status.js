export async function onRequestGet({ env }) {
  return Response.json({ status: "ok", aiConfigured: Boolean(env.AI), provider: "cloudflare-ai" });
}
