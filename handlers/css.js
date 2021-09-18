export const style = css`
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  background-color: ivory;
  margin: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5em;
  width: 70vw;
}
.brand {
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.8);
}
main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 8em;
}
article {
  padding: 0 20vh;
  width: 100vh;
}
form {
  display: flex;
  justify-content: center;
  margin-block-end: 0;
}
form input {
  font-size: 1.5rem;
  border: 0.2em black solid;
  border-radius: 0.4em;
  padding: 0.5rem;
  width: 20em;
  background-color: transparent;
}
form input:focus {
  outline: none;
}
form button[type="submit"] {
  font-size: 1.5em;
  border: 0.2em black solid;
  border-radius: 0.4em;
  margin-left: 0.4em;
  background-color: transparent;
}
.link {
  display: flex;
  border: 0.2em solid black;
  padding: 0.2em 0.1em 0.2em 0.4em;
  font-size: 1.5em;
  margin-top: 1.5em;
  align-items: center;
  border-radius: 0.4em;
  background-color: transparent;
}
#clipboard {
  padding: 0;
  margin-left: 1em;
  background-color: transparent;
  border-style: none;
}
@media all and (max-width: 40em) {
  .brand {
    font-size: 1.4em;
  }
  header {
    width: 94vw;
  }
  form {
    flex-direction: column;
  }
  form input {
    width: 12.5em;
  }
  form button[type="submit"] {
    margin: 0.4em 0 0 0;
  }
  .link {
    font-size: 1.2em;
  }
  footer {
    font-size: small;
  }
}
`;

/** Wrapper function to get syntax highlight for CSS in editors. */
function css(style) {
  return style.join("");
}
