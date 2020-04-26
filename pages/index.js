import React from "react";
import { Cover, Center, Stack, Box, Switcher } from "../components/EveryLayout";
import SideBar from "../components/SideBar";

import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <Box>
      <h1>Information about the platform</h1>
      <img src="https://picsum.photos/600/400"></img>
    </Box>
    <Switcher>
      <div>
        <Box>User content</Box>
        <Box>User content</Box>
        <Box>User content</Box>
      </div>
    </Switcher>
  </Layout>
);

export default Home;
