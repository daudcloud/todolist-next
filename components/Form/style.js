import styled from "styled-components";

export const StyledForm = styled.form`
  .input-container {
    width: 100%;
    background: ${(props) =>
      props.darkTheme ? "var(--list-bg-dark)" : "var(--list-bg-light)"};
    border-radius: 0.3em;
  }

  input {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 1.3em 1.4em;
    font-family: inherit;
    font-size: 1.1rem;
    color: ${(props) =>
      props.darkTheme ? "var(--list-dark)" : "var(--list-light)"};
  }
`;
