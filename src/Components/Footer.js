import React from "react";

function Footer() {
    const footerStyles = {
        textAlign: "center",
        position: "fixed",
        left: 0,
        bottom: 5,
        width: "100%"
    };

    return (
        <footer style={footerStyles}>
            Some Footer Content
        </footer>
    );
}

export default Footer;