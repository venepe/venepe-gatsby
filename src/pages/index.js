import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import artificialIntelligence from "../images/artificial_intelligence.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`artificial`, `intelligence`, `user`, `centric`, `design`]}
      />

      <div className="text-center">
        <img
          src={artificialIntelligence}
          className="block mx-auto w-1/2"
          alt="Robot welcome"
        />

        <h2 className="bg-yellow inline-block my-8 p-3">
          User Centric A.I. Design
      </h2>

        <p className="leading-loose">
      </p>
      </div>
    </Layout>
  )
}

export default IndexPage;
