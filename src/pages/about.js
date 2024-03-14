import * as React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"

// export default function About() {
//   return (
//     <PrimaryLayout>
//       <Post title="post title" excerpt="loremdfsd fds fsdkf sdfkmdsf"></Post>
//       <Post title="post title" excerpt="loremdfsd fds fsdkf sdfkmdsf"></Post>
//       <Post title="post title" excerpt="loremdfsd fds fsdkf sdfkmdsf"></Post>
//     </PrimaryLayout>
//   );
// }

export default () => {
  return <PrimaryLayout column="col-6">
    <h1>About us</h1>
    <p>
      loremsd sdkds d df sdfkmdsf fsdf dsvdv   fdhdfgf
    </p>
  </PrimaryLayout>
}



