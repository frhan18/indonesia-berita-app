import React, { Children } from "react";
import styles from "../../styles/layouts.module.css";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <HeaderNav />
      <main
        className={`${styles.mainContent} container-fluid d-lg-block w-100`}
      >
        {Children.map(children, (child) => (
          <React.Fragment>{child}</React.Fragment>
        ))}
      </main>
      <Footer />
    </>
  );
}
