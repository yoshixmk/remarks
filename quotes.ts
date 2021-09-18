import {
  json,
  serve,
  validateRequest,
} from "https://deno.land/x/sift@0.3.5/mod.ts";
import { queryFauna } from "./queryFauna.ts";

serve({
  "/quotes": handleQuotes,
});

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
    const { quote, author, error } = await createQuote(
      body as { quote: string; author: string },
    );
    if (error) {
      return json({ error: "couldn't create the quote" }, { status: 500 });
    }
    return json({ quote, author }, { status: 201 });
  }

  // It's assumed that the request method is "GET".
  {
    const { quotes, error } = await getAllQuotes();
    if (error) {
      return json({ error: "couldn't fetch the quotes" }, { status: 500 });
    }

    // Return all the quotes.
    return json({ quotes });
  }
}
async function createQuote({
  quote,
  author,
}: {
  quote: string;
  author: string;
}): Promise<{ quote?: string; author?: string; error?: string }> {
  const query = `
      mutation($quote: String!, $author: String!) {
        createQuote(data: { quote: $quote, author: $author }) {
          quote
          author
        }
      }
    `;

  const { data, error } = await queryFauna(query, { quote, author });
  if (error) {
    return { error };
  }

  return data;
}

async function getAllQuotes() {
  const query = `
    query {
      allQuotes {
        data {
          quote
          author
        }
      }
    }
  `;

  const {
    data: {
      allQuotes: { data: quotes },
    },
    error,
  } = await queryFauna(query, {});
  if (error) {
    return { error };
  }

  return { quotes };
}
