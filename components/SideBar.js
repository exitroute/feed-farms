import styled from "styled-components";

const WithSideBar = styled.div`
  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(${(props) => props.space || "--s1"}) / 2 * -1);
  }

  & > * > * {
    margin: calc(var(${(props) => props.space || "--s1"}) / 2);
  }

  & > * :last-child {
    ${(props) =>
      props.elastic ? "" : `flex-basis: ${props.sidebarWidth || "20rem"};`}
    flex-grow: 1;
  }

  & > * :nth-child(n + 2) {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(
      ${(props) => props.contentMinWidth || "50%"} -
        (${(props) => props.space || "1rem"} / 2)
    );
  }
`;

const Sidebar = (props) => (
  <WithSideBar {...props}>
    <div>{props.children}</div>
  </WithSideBar>
);

export default Sidebar;
