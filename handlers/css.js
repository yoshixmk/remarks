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
main div {
  overflow: scroll;
  max-height: 48vh;
}
article {
  padding: 4px 0;
  text-align: right;
}
article h2 {
  display: inline;
  font-size: 1em;
}
article p {
  display: inline;
  vertical-align: text-bottom;
  margin-left: 8px;
}
article p small {
  margin-left: 8px;
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
@media all and (max-width: 40em) {
  .brand {
    font-size: 1.4em;
  }
  header {
    width: 94vw;
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
