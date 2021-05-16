import React from "react";
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
            }
          }
        }
      }

      spider: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)|(mp4)/" }
          relativeDirectory: { eq: "exhibits/spider" }
        }
      ) {
        edges {
          node {
            base
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
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
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
            }
          }
        }
      }

      easterEggs: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(mp4)/" }
          relativeDirectory: { eq: "exhibits/easterEggs" }
        }
      ) {
        edges {
          node {
            base
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
            }
          }
        }
      }
    }
  `);

  return <App exhibitImages={exhibitImages} />;
};

export default IndexPage;
