import React from "react";

function Container({
  header, //represents a header or title for the container, if a header is provided, it renders an h2 element with the specified header text(example header)
  children, //represents the content that will be placed inside the container, the {children} placeholder will be placed with the actual content passed to the component
  textPosition = "", // possible values: left, right, center. controls the horizontal alignment of text, adds a css class to the container based on the specified text position
  direction = "horizontal", // possible values: vertical, horizontal. defines the layout direction of the container and its children, adds a css class to the inner based on a specified direction
  contentPosition = "center", // possible values: left, right, center. controls the horizontal alignment of the content within the inner container,adds a css class to the inner container based on the specified content position
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
