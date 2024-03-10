import * as React from "react"
import {Link} from "gatsby"
// import hstyles from "../components/header-module.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return <div>
    <Header title="home page tile"></Header>
    <div className="container">
      this is where our content will go
    </div>
    <Footer></Footer>
    
  </div>
}
