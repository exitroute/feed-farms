import React from "react";
import { Cover, Center, Stack, Box } from "../components/EveryLayout";

import Layout from "../components/Layout";

const Labourers = () => (
  <Layout>
    <Cover centered={"div"} minHeight={"50vh"}>
      <div>
        <Center>
          <h1>FeedFarms</h1>
          <p>A project for EUvsCorona</p>
        </Center>
      </div>
    </Cover>
  </Layout>
);

export default Labourers;
