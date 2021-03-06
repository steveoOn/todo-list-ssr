import React, { Fragment } from "react";
import Link from "next/link";
import Head from "./head";

const links = [
  { href: "https://github.com/segmentio/create-next-app", label: "Github" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Layout = props => (
  <Fragment>
    <Head title={props.title} />
    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
    <div>{props.children}</div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </Fragment>
);

export default Layout;
