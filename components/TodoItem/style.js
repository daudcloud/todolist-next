import styled from "styled-components";

export const StyledItem = styled.div`
  background-color: ${(props) =>
    props.darkTheme ? "var(--list-bg-dark)" : "var(--list-bg-light)"};
  color: ${(props) =>
    props.darkTheme ? "var(--list-dark)" : "var(--list-light)"};
  display: flex;
  align-items: center;

  &:hover .delete {
    display: block;
  }

  &.completed {
    .circle {
      background-image: linear-gradient(
        to right bottom,
        var(--left-gradient),
        var(--right-gradient)
      );
    }

    .todo-title {
      text-decoration: line-through;
      color: ${(props) =>
        props.darkTheme ? "var(--left-dark)" : "var(--left-light)"};
    }
  }

  .todo-title {
    padding: 1.2em 1.4em;
    word-wrap: break-word;
    text-decoration: ${(props) => props.completed && "line-through"};
  }

  .delete {
    position: relative;
    padding: 0.6em;
    margin-left: auto;
    margin-right: 1.3em;
    display: none;
    flex-shrink: 0;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: none;
    border: 1px solid
      ${(props) =>
        props.darkTheme
          ? "var(--circle-border-dark)"
          : "var(--circle-border-light)"};
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    margin-left: 1.3em;
    border-radius: 50%;
    cursor: pointer;
  }
`;
