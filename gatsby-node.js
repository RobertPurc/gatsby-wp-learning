const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "posts" });
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = ({ graphql }) => {
    return graphql(`

{
    allMarkdownRemark {
      nodes {
        fields{
          slug
        }
      }
    }
  }
`).then(result => console.log(JSON.stringify(result)))
}