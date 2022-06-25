import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link) => {
    return <li key={link.id}>
    </li>
  })

  return <nav>
    <a href="#home" key={linkElements.id}>home</a>
    <a href="#about" key={linkElements.id}>about</a>
    <a href="#projects" key={linkElements.id}>projects</a>
  </nav>;
}

export default NavBar;
