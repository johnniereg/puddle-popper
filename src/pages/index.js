import * as React from "react";
import "../styles/styles.scss";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data

import App from "../components/app";

const IndexPage = () => {
  const melSpiralImages = useStaticQuery(graphql`
    query {
      melSpiral: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/mel-spiral" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return <App melSpiralImages={melSpiralImages} />;
};

export default IndexPage;
