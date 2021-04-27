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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
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
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  return <App exhibitImages={exhibitImages} />;
};

export default IndexPage;
