const postData = async (data) => {
  const url = "https://remarks.deno.dev/remarks";
  const response = await fetch(url, {
    method: "POST", // GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data),
  });
  return response.json();
};

const buttons = Array.from(document.getElementsByTagName("button"));
buttons.forEach((e) =>
  e.onclick = async () => {
    try {
      await postData({ text: e.value });
      document.getElementById("success").classList.remove("is-hidden");
    } catch (error) {
      document.getElementById("error").classList.remove("is-hidden");
      console.log(error);
    } finally {
      setTimeout(() => {
        document.getElementById("success").classList.add("is-hidden");
        document.getElementById("error").classList.add("is-hidden");
      }, 3000);
    }
  }
);
