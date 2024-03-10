import React from "react";
import * as footerStyles from "./Footer.module.css"

const Footer = ()=> (
    <footer className={footerStyles.footer}>
        <div className="container">
            <span className="text-muted">this is our footer</span>
        </div>
    </footer>
)
export default Footer;