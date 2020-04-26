import React from "react";
import { Cover, Center, Stack, Box } from "../components/EveryLayout";
import Layout from "../components/Layout";

import dynamic from "next/dynamic";

import styled from "styled-components";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false
});

const List = styled.ul`
  list-style-type: none;
`;

const Labourers = () => (
  <Layout>
    <Cover centered={"div"} minHeight={"50vh"}>
      <div>
        <Center>
          <h1>Labourer Profile</h1>
          <List>
            <li>Name</li>
            <li>Location</li>
            <li>Availability</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Right to Work</li>
            <li>Team or Individual</li>
          </List>
        </Center>
      </div>
      <DynamicComponentWithNoSSR />
    </Cover>
  </Layout>
);

export default Labourers;
