import React, { Children } from "react";
import styles from "../styles/layouts.module.css";

export default function ContentLayouts({ children }) {
  return (
    <main className={`${styles.mainContent} container-fluid d-lg-block w-100`}>
      {Children.map(children, (child) => (
        <React.Fragment>{child}</React.Fragment>
      ))}
    </main>
  );
}
