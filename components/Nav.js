import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Cluster, Box } from "./EveryLayout";

const StyledNav = styled(Cluster)`
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0;
  }
`;

const links = [
  { href: "/about", label: "About" },
  { href: "/labourers", label: "Labourers" },
  { href: "/farmersView", label: "Farmers" },
  { href: "/contact", label: "Contact Us" },
  { href: "/login", label: "Sign Up / Login" }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <Cluster justify={"space-between"}>
    <div>
      <Box invert space={"--s1"} borderThin={"5px"}>
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </Box>
      <StyledNav justify={"flex-start"}>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <Box borderThin={"1px"}>
                  <a href={href}>{label}</a>
                </Box>
              </Link>
            </li>
          ))}
        </ul>
      </StyledNav>
    </div>
  </Cluster>
);

export default Nav;
