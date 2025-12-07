import { FaGithub } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      &copy; {new Date().getFullYear()} Neev Grover. All rights reserved.{" "}
      <a
        href="/privacy-policy"
        style={{
          color: "#828893",
          textDecoration: "none",
          fontSize: "14px",
          marginTop: "8px",
          display: "inline-block",
        }}
      >
        Privacy Policy
      </a>
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
          href="https://x.com/groverneev01"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#828893", margin: "0 12px" }}
        >
          <FaXTwitter size={23} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/neevgrover/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#828893", margin: "0 12px" }}
        >
          <FaLinkedin size={23} />
        </a>
      </div>
    </footer>
  );
}
