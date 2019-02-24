import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import firmware from "../images/firmware.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`artificial`, `intelligence`, `user`, `centric`, `design`]}
      />

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
            Together let's build experiences that are meaningful, effortless, and delightful.
          </p>

          <p className="font-bold mt-4 text-right text-xs uppercase">
            – Vernon Pearson
        </p>
        </div>

        <div className="w-2/3 md:w-1/3">
          <img src={firmware} alt="Building a robot" />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage;
