import React from "react";
import { Cover, Center, Stack, Box } from "../components/EveryLayout";

import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <Cover centered={"div"} minHeight={"50vh"}>
      <div>
        <Center>
          <h1>About FeedFarms</h1>
          <p>A project for EUvsCorona</p>
        </Center>
      </div>
    </Cover>
  </Layout>
);

export default About;
