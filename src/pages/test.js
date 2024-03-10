import React from "react";
import { navigate } from "gatsby";
// import hstyles from "../components/header-module.css";
import Header from "../components/Header"

const test = () => (
    <div>
        <Header  title="test page header"></Header>
        <h1>This is a test page</h1>
        <button onClick={()=>navigate('/')}>test</button>
    </div>
    
)

// const test2 = () => {

//     return(<h1>This is a test page2</h1>) 

// }

export default test;
    
