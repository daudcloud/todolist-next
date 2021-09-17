import styled from "styled-components";

export const StyledForm = styled.form`
  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    background: ${(props) =>
      props.darkTheme ? "var(--list-bg-dark)" : "var(--list-bg-light)"};
    border-radius: 0.3em;
  }

  .circle {
    border: 1px solid ${props => props.darkTheme ? "var(--circle-border-dark)" : "var(--circle-border-light)"};
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    margin-left: 1.3em;
    border-radius: 50%;
  }

  input {
    background-color: transparent;
    width: 100%;
    outline: none;
    border: none;
    padding: 1.3em 1.4em;
    font-family: inherit;
    font-size: 1.1rem;
    color: ${(props) =>
      props.darkTheme ? "var(--list-dark)" : "var(--list-light)"};
  }
`;
