import React from "react";
import Link from "next/link";
import { Cover, Center, Stack, Box, Switcher } from "../components/EveryLayout";
import Layout from "../components/Layout";

import dynamic from "next/dynamic";

import styled from "styled-components";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false
});

const List = styled.ul`
  list-style-type: none;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 0.5fr 1fr 0.5fr;
`;

const DashBoardButtons = styled.button`
  display: block;
  color: var(--color-light) !important;
  text-transform: uppercase;
  text-decoration: none;
  background: var(--color-dark);
  padding: var(--s0);
  border: 4px solid var(--color-light) !important;
  transition: all 0.4s ease 0s;

  &:hover {
    color: var(--color-dark) !important;
    background: var(--color-light);
    border-color: var(--color-light) !important;
    transition: all 0.4s ease 0s;
  }
`;

const FarmerView = () => (
  <Layout>
    <Grid>
      <Box>
        <DashBoardButtons>Search</DashBoardButtons>
        <DashBoardButtons>Calendar</DashBoardButtons>
        <DashBoardButtons>History</DashBoardButtons>
        <DashBoardButtons type="button">
          <Link href="./farmers">
            <a>Profile</a>
          </Link>
        </DashBoardButtons>
        <DashBoardButtons>Requests</DashBoardButtons>
      </Box>
      <Cover>
        <Center>
          <Box borderThin="1px">
            <DynamicComponentWithNoSSR />
          </Box>
        </Center>
      </Cover>
      <Box>
        <DashBoardButtons>Simon</DashBoardButtons>
        <DashBoardButtons>Peter</DashBoardButtons>
        <DashBoardButtons>Paul's Team</DashBoardButtons>
        <DashBoardButtons>Potato Team</DashBoardButtons>
      </Box>
    </Grid>
  </Layout>
);

export default FarmerView;
