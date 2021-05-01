module.exports = {
  siteMetadata: {
    title: `Puddle Popper Lounge`,
    siteUrl: `https://lounge.puddlepopper.com`,
    description: `Welcome to the Puddle Popper Lounge`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
