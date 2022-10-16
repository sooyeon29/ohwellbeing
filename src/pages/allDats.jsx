import React from "react";
import Dats from "../components/dats";
import Header from "../components/header";
import Layout from "../components/layout";

export default function AllDats() {
  return (
    <>
      <Layout>
        <Header />
        <Dats />
      </Layout>
    </>
  );
}
