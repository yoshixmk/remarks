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
  const { error } = await validateRequest(request, {
    GET: {},
  });
  // validateRequest populates the error if the request doesn't meet
  // the schema we defined.
  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  // Return all the quotes.
  return json({ quotes });
}
