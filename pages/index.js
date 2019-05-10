import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Layout, Todo } from "../components";

const Test = styled.p`
  color: red;
`;

const Home = () => (
  <Layout title="Home">
    <Todo />
  </Layout>
);

export default Home;
