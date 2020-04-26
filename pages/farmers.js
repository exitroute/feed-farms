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

const Farmers = () => (
  <Layout>
    <Cover centered={"div"} minHeight={"50vh"}>
      <div>
        <Center>
          <h1>Profile</h1>
          <List>
            <li>Name</li>
            <li>Location</li>
            <li>Availability</li>
            <li>Skills</li>
            <li>Activities and requirements</li>
            <li>Duration</li>
            <li>Pay</li>
            <li>References</li>
            <li>Right to work</li>
            <li>Other opportunities</li>
          </List>
        </Center>
      </div>
      <DynamicComponentWithNoSSR />
    </Cover>
  </Layout>
);

export default Farmers;
