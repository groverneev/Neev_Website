import { FaGithub } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBroom } from "react-icons/fa6"; // Importing the broom icon

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 48,
        padding: 24,
        background: "#0e1321",
        textAlign: "center",
        color: "#828893",
        fontSize: 14,
      }}
    >
      &copy; {new Date().getFullYear()} Neev Grover. All rights reserved.
      <br />
      {/* Social Media Icons */}
      <div style={{ marginTop: 16 }}>
        {/* GitHub */}
        <a
          href="https://github.com/groverneev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#828893", margin: "0 12px" }}
        >
          <FaGithub size={23} />
        </a>

        {/* Substack */}
        <a
          href="https://techunpacked.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#828893", margin: "0 12px" }}
        >
          <SiSubstack size={23} />
        </a>

        {/* X */}
        <a
          href="https://x.com/lightningpro535"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#828893", margin: "0 12px" }}
        >
          <FaXTwitter size={23} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/neev-grover-3bb873332/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#828893", margin: "0 12px" }}
        >
          <FaLinkedin size={23} />
        </a>

        <a
          href="https://www.dunebroom.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#828893" }}
        >
          <FaBroom size={23} />
        </a>
      </div>
    </footer>
  );
}
