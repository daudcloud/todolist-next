import styled from "styled-components";

export const StyledList = styled.div`
  margin-top: 2rem;
  border-radius: 0.3rem;
  & > * + * {
    border-top: 1px solid
      ${(props) =>
        props.darkTheme
          ? "var(--circle-border-dark)"
          : "var(--circle-border-light)"};
  }

  & > *:first-child {
    border-radius: 0.3em 0.3em 0 0;
  }

  & > *:last-child {
    border-radius: 0 0 0.3em 0.3em;
  }

  box-shadow: 0 0.1em 2em -2px ${(props) => (props.darkTheme ? "hsla(0, 0%, 5%, .7)" : "hsla(0, 0%, 50%, .4)")};

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;
