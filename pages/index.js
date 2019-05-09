import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import styled from "styled-components";

const Test = styled.p`
  color: red;
`;

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Test>siwen</Test>
  </div>
);

export default Home;
