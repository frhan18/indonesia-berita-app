import React, { Children } from "react";

export default function ContentLayouts({ children }) {
  return (
    <div className="main-content">
      {Children.map(children, (child) => (
        <React.Fragment>{child}</React.Fragment>
      ))}
    </div>
  );
}
