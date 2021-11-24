import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="Footer">
            <div className="wrapper">
                <p>
                    Made for the love of science by
                    {/* eslint-disable-next-line */}
                    <a href="#" target="_blank" rel="noreferrer">
                        Yosra
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Footer;
