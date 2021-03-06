import styled from "styled-components";

export const Stack = styled.div`
  --space: ${(props) => props.space || "1.5rem"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--space);
  }
`;

export const Box = styled.div`
  ${(props) =>
    props.invert
      ? `
    background-color: var(--color-light);
    filter: invert(100%);
  `
      : ""}
  padding: var(${(props) => props.space || "--s1"});
  border: ${(props) => props.borderThin || 0} solid;
  color: var(--color-dark);
  background-color: var(--color-light);
  & * {
    color: inherit;
  }
`;

export const Center = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: var(${(props) => props.measure || "--measure"});

  padding-left: ${(props) => props.gutter || ""};
  padding-right: ${(props) => props.gutter || ""};

  display: ${(props) => (props.intrinsic === true ? "flex" : "")};
  flex-direction: ${(props) => (props.intrinsic === true ? "column" : "")};
  align-items: ${(props) => (props.intrinsic === true ? "center" : "")};
`;

export const Switcher = styled.div`
  --measure: ${(props) => props.measure || "30rem"};
  --s1: ${(props) => props.space || "1.5em"};

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc((var(--s1) / 2) * -1);
  }

  & > * > * {
    flex-grow: 1;
    flex-basis: calc((var(--measure) - (100% - var(--s1))) * 999);
    margin: calc(var(--s1) / 2);
  }

  & > * > :nth-last-child(n + ${(props) => props.limit || 4}),
  & > * > :nth-last-child(n + ${(props) => props.limit || 4}) ~ * {
    flex-basis: 100%;
  }
`;

export const Cluster = styled.div`
  --space: ${(props) => props.space || "1.5em"};
  overflow: hidden;

  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    margin: calc(var(--space) / 2 * -1);
  }

  & > * > * {
    margin: calc(var(--space) / 2);
  }
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${(props) => props.minHeight || "100vh"};
  padding: ${(props) => props.padding || "1rem"};

  & > * {
    margin-top: ${(props) => props.space || "1rem"};
    margin-bottom: ${(props) => props.space || "1rem"};
  }

  & > :first-child:not(${(props) => props.centered || "h1"}) {
    margin-top: 0;
  }

  & > :last-child:not(${(props) => props.centered || "h1"}) {
    margin-bottom: 0;
  }

  & > ${(props) => props.centered || "h1"} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Frame = styled.div`
  display: block;
  --n: 9; /* width */
  --d: 16; /* height */
  padding-bottom: calc(var(--n) / var(--d) * 100%);
  position: relative;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & > img,
  & > video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
