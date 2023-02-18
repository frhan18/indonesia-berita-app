import React from "react";

export default function NewsDescriptionText({ description }) {
  return (
    <div className="idc-item-desc">
      <div className="text-start">{description}</div>
    </div>
  );
}
