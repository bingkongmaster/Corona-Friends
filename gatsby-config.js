/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  //sitemetadata
  siteMetadata: {
    title: "코로나친구",
    titleTemplate: "",//"%s · 코로나맵",
    description:
      "주변 코로나 친구들을 찾아요!",
    url: "https://www.coronamap.cc", // No trailing slash allowed!
    image: "src/images/corona6.png",//(useless) // Path to your image you placed in the 'static' folder
    twitterUsername: "@coronacc",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/corona6.png`,
        //favicon source:
        //https://icons8.com/icons/set/corona
      },
    },
  ],
}
