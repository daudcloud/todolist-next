import styled from "styled-components";

const Main = styled.main`
  background-color: ${(props) =>
    props.darkTheme ? "var(--background-dark)" : "var(--background-light)"};
  background-image: ${(props) =>
    props.darkTheme
      ? "url('/images/bg-desktop-dark.jpg')"
      : "url('/images/bg-desktop-light.jpg')"};
  background-repeat: no-repeat;
  background-size: 100vw 50vh;
  min-height: 100vh;

  .container {
    width: 100%;
    height: 100vh;
    max-width: 540px;
    margin: auto;
    padding: 5em 1.2em;
  }

  .title {
    color: white;
    letter-spacing: 0.4em;
    margin-bottom: 2.5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    background-image: ${(props) =>
      props.darkTheme
        ? "url('/images/bg-mobile-dark.jpg')"
        : "url('/images/bg-mobile-light.jpg')"};
    background-size: 100vw 35vh;
    .title {
      font-size: 1.5em;
      margin-bottom: 1.8rem;
    }
    .container {
      max-width: 540px;
      margin: auto;
      padding-top: 2.8em;
    }
  }
`;

export default Main;
