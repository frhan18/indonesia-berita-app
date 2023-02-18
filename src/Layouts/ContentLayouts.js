import React, { Children } from "react";

export default function ContentLayouts({ children }) {
  return (
    <main className="main-content p-0 py-5" id="content">
      {Children.map(children, (child) => (
        <React.Fragment>{child}</React.Fragment>
      ))}
    </main>
  );
}
