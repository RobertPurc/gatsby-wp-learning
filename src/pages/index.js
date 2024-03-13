import * as React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"


export default function Home() {
  return (
    <PrimaryLayout>
      <Post title="post title" excerpt="loremdfsd fds fsdkf sdfkmdsf"></Post>
      <Post title="post title" excerpt="loremdfsd fds fsdkf sdfkmdsf"></Post>
      <Post title="post title" excerpt="loremdfsd fds fsdkf sdfkmdsf"></Post>
    </PrimaryLayout>
  );
}


