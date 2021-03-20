import React from "react";

function Footer() {
  return (
    <footer style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      color: "white"
    }} className="bg-secondary page-footer font-small blue fixed">
      <div className="footer-copyright text-center py-3">
        <b>For educational purposes only.</b>
        <br />
        Made by BobDaBuilder
        <br />
        Visit us at{" "}
        <strong>
          <a href="https://www.google.com">Github</a>
        </strong>
      </div>
    </footer>
  );
}

export default Footer;
