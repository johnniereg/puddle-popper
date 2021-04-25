import * as React from "react";
import "../styles/styles.scss";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data

import App from "../components/app";

const IndexPage = () => {
  const exhibitImages = useStaticQuery(graphql`
    query {
      eyeball: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/eyeball" }
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

      butterfly: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/butterfly" }
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

      burst: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/burst" }
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

      ribbon: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/ribbon" }
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

      egg: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/egg" }
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

      spider: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)/" }
          relativeDirectory: { eq: "exhibits/spider" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
      }

      spiral: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/spiral" }
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

      heartFlower: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/heartFlower" }
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

      gourd: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/gourd" }
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

      shell: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/shell" }
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

      web: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/web" }
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

      face: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/face" }
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

      angelWing: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "exhibits/angelWing" }
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

  return <App exhibitImages={exhibitImages} />;
};

export default IndexPage;
