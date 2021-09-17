import styled from "styled-components";

export const StyledList = styled.div`
  margin-top: 2rem;
  border-radius: 0.3rem;
  overflow: hidden;
  & > * + * {
    border-top: 1px solid
      ${(props) =>
        props.darkTheme
          ? "var(--circle-border-dark)"
          : "var(--circle-border-light)"};
  }
  box-shadow: 0 0.1em 2em -2px ${(props) => (props.darkTheme ? "hsla(0, 0%, 5%, .7)" : "hsla(0, 0%, 50%, .4)")};
`;
