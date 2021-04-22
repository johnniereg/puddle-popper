import * as React from "react";
import "../styles/styles.scss";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data

import App from "../components/app";

const IndexPage = () => {
  const melSpiralImages = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/mel-spiral" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
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
