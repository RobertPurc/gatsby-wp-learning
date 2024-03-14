import * as React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
import { graphql } from "gatsby";


export default function Home({ data }) {

  console.log(data);
  return (
    <PrimaryLayout column="col-6">
      {data.allMarkdownRemark.nodes.map((node) => (
        <Post img={node.frontmatter.img} title={node.frontmatter.title} excerpt={node.excerpt}></Post>
      ))}

    </PrimaryLayout>
  );
}

export const query = graphql`
{
  allMarkdownRemark {
    nodes {
      frontmatter{
        title
        date
        keywords
        img
      }
      excerpt
      html
    }
  }
}

`


