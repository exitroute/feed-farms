import React from "react";
import styled from "styled-components";
import {
  Cover,
  Center,
  Stack,
  Box,
  Frame,
  Switcher
} from "../components/EveryLayout";

import Layout from "../components/Layout";

const UserComments = styled(Box)`
  text-align: center;
`;

const Home = () => (
  <Layout>
    <Box>
      <h1>Information about the platform</h1>
      <Frame>
        <img src="https://picsum.photos/600/400"></img>
      </Frame>
    </Box>
    <Switcher>
      <div>
        <UserComments borderThin="1px">This site is amazing</UserComments>
        <UserComments borderThin="1px">Wow!</UserComments>
        <UserComments borderThin="1px">This is changing my life</UserComments>
      </div>
    </Switcher>
  </Layout>
);

export default Home;
