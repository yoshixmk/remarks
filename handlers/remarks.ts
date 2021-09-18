import { json, validateRequest } from "https://deno.land/x/sift@0.3.5/mod.ts";
import { queryFauna } from "../queries/queryFauna.ts";

export async function handleRemarks(request: Request) {
  // Make sure the request is a GET request.
  const { error, body } = await validateRequest(request, {
    GET: {},
    POST: {
      body: ["text"],
    },
  });

  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  if (request.method === "POST") {
    const { text, error } = await createRemark(
      body as { text: string },
    );
    if (error) {
      return json({ error: "couldn't create the text" }, { status: 500 });
    }
    return json({ text }, { status: 201 });
  }

  // It's assumed that the request method is "GET".
  {
    const { remarks, countRemarks, error } = await getAllRemarks();
    if (error) {
      return json({ error: "couldn't fetch the remarks" }, { status: 500 });
    }

    // Return all the remarks.
    return json({ remarks, countRemarks });
  }
}
async function createRemark({
  text,
}: {
  text: string;
}): Promise<{ text?: string; error?: string }> {
  const query = `
      mutation($text: String!) {
        createRemark(data: { text: $text }) {
          text
        }
      }
    `;

  const { data, error } = await queryFauna(query, { text });
  if (error) {
    return { error };
  }

  return data;
}

type RemarkResponse = {
  _ts: number;
  text: string;
};

export async function getAllRemarks() {
  const query = `
    query {
      allRemarks {
        data {
          _ts
          text
        }
      },
      countRemarks
    }
  `;

  const {
    data: {
      allRemarks: { data: remarksResponse },
      countRemarks,
    },
    error,
  } = await queryFauna(query, {}) as {
    data: { allRemarks: { data: RemarkResponse[] }; countRemarks: number };
    error: Error;
  };
  if (error) {
    return { error };
  }
  const remarks = remarksResponse.map((remark) =>
    Object.assign(remark, { timestamp: new Date(remark._ts / 1000) })
  );

  return { remarks, countRemarks };
}
