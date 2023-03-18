import React from "react";

function Header(){
    const header={
        fontSize:"2rem",
        display:"flex",
        justifyContent:"flex-start"

    }
    return (<header>
          <div style={header} className="headerclass"><h1>Welcome</h1></div> 
           </header>)
}
export default Header;