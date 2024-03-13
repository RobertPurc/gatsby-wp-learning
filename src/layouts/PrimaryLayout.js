import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function PrimaryLayout({ children }) {
    return (
        <div>
            <Header title="home page tile"></Header>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto p-5">
                        {children}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}



