import React from "react";
import "./styles.css";
import { FOOTER } from "../../international";
import { LINKS } from "./links";

const Footer = () => {
  return(
    <footer className="footer">
      <p>{FOOTER.text}</p>
      {LINKS.map(item => (
        <p key={item.id}><a href={item.href} target="_blank" rel="noreferrer" alt={item.alt}>{item.text}</a></p>
      ))}

    </footer>
  )
}

export default Footer;