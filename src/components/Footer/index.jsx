import React from "react";
import { Container } from "../Global.elements";
import { FooterText } from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <FooterText>
            Copyright © 2020 Keep Memo. All rights reserved.
          </FooterText>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
