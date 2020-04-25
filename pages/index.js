import React from "react";
import styled from "styled-components";
import { Center, Stack, Box } from "../components/EveryLayout";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => (
  <Center>
    <Stack>
      <Box>
        <Title>FeedFarms</Title>
      </Box>
    </Stack>
  </Center>
);

export default Home;
