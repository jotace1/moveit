import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #DCDDE0;
    --text: #666;
    --text-highlight: #b3b9FF;
    --title: #2E384D;
    --red: #e83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2aa9e0;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
