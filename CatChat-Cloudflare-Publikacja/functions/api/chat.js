export async function onRequestPost({ request, env }) {
  if (!env.AI) return Response.json({ error: "Brak bindingu AI w ustawieniach Cloudflare Pages." }, { status: 503 });
  try {
    const body = await request.json();
    const incoming = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
    const messages = [
      { role: "system", content: "Jesteś CatChat, pomocnym asystentem AI. Odpowiadaj po polsku, jasno i bezpiecznie. Nie proś o hasła ani dane prywatne." },
      ...incoming
        .filter(m => m && ["user", "assistant"].includes(m.role) && typeof m.content === "string")
        .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }))
    ];
    if (messages.length < 2) return Response.json({ error: "Wpisz wiadomość." }, { status: 400 });
    const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", { messages, max_tokens: 700 });
    const reply = result?.response || result?.output_text || "";
    return Response.json({ reply: reply || "Nie udało mi się wygenerować odpowiedzi." });
  } catch (error) {
    return Response.json({ error: "Błąd podczas generowania odpowiedzi. Spróbuj ponownie." }, { status: 500 });
  }
}
