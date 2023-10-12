import * as React from "react";
import App from "./App";
import Seo from "../components/SEO/SEO";

// markup
const IndexPage = () => {
  return (
    <>
      <Seo
        title={"Vijay Guttula - Engineer"}
        description={
          "Software Developer Engineer @Wintwealth.com | Tech Enthusiast"
        }
        canonical={"https://vijayguttula.com/"}
      />
      <App />
    </>
  );
};

export default IndexPage;
