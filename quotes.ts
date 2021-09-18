import {
  json,
  serve,
  validateRequest,
} from "https://deno.land/x/sift@0.3.5/mod.ts";

serve({
  "/quotes": handleQuotes,
});

// To get started, let's just use a global array of quotes.
const quotes = [
  {
    quote: "Those who can imagine anything, can create the impossible.",
    author: "Alan Turing",
  },
  {
    quote: "Any sufficiently advanced technology is equivalent to magic.",
    author: "Arthur C. Clarke",
  },
];

async function handleQuotes(request: Request) {
  // Make sure the request is a GET request.
  const { error, body } = await validateRequest(request, {
    GET: {},
    POST: {
      body: ["quote", "author"],
    },
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  if (request.method === "POST") {
    const { quote, author } = body as { quote: string; author: string };
    quotes.push({ quote, author });
    return json({ quote, author }, { status: 201 });
  }

  // Return all the quotes.
  return json({ quotes });
}
