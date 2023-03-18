import React from "react";
function Footer(){
    const footer={
        fontSize:"2rem",
        textAlign:"center",
    }
 return (<footer>
       <div style={footer} className="footerclass"> <p>Copyright @ Rakesh {new Date().getFullYear()}</p></div>
        </footer>)
}
export default Footer;