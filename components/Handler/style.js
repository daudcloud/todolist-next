import styled from "styled-components";

export const StyledHandler = styled.div`
  background-color: ${(props) =>
    props.darkTheme ? "var(--list-bg-dark)" : "var(--list-bg-light)"};
  padding: 1.2em 1.6em;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  position: relative;
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

  @media (max-width: 500px) {
    .handler {
      position: absolute;
      bottom: calc(-100% - 18px);
      z-index: 20;
      background: ${(props) =>
        props.darkTheme ? "var(--list-bg-dark)" : "var(--list-bg-light)"};
      padding: 1.1em 1.4em;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      border-radius: 0.3rem;
    }
  }
`;
