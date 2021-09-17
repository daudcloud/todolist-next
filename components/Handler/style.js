import styled from "styled-components";

export const StyledHandler = styled.div`
  background-color: ${(props) =>
    props.darkTheme ? "var(--list-bg-dark)" : "var(--list-bg-light)"};
  padding: 1.2em 1.6em;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${(props) =>
    props.darkTheme ? "var(--left-dark)" : "var(--left-light)"};

  .handler {
    font-size: 1.1em;
    .active {
      color: var(--active-state);
    }

    & > * {
      cursor: pointer;
      &:hover {
        color: ${(props) => (props.darkTheme ? "white" : "var(--list-light)")};
      }
    }

    & > * + * {
      margin-left: 1rem;
    }
  }

  .clear {
    cursor: pointer;
    &:hover {
      color: ${(props) => (props.darkTheme ? "white" : "var(--list-light)")};
    }
  }
`;
