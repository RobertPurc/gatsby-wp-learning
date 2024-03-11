import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default () => {
    return <div>
        <Header title="home page tile"></Header>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto p-5">
                    <h1>
                        about us
                    </h1>
                </div>
            </div>
        </div>
        <Footer></Footer>

    </div>
}
