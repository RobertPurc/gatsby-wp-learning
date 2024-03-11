import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import Post from "../components/Post"

export default function Home() {
  return <div>
    <Header title="home page tile"></Header>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto p-5">
          <Post title="post title" excerpt="loremdfsd fds fsdkf sdfkmdsf"></Post>
        </div>
      </div>
    </div>
    <Footer></Footer>

  </div>
}
