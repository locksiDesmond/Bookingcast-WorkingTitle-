import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const ButtonLight = props => {
  const initial = props.hover ? true : false;
  const [hover, setHover] = useState(initial);
  const hoverstyle = {
    elements: {
      borderColor: props.color,
      color: props.color,
      backgroundColor: "#fff",
      ...props.style
    },
    over: {
      backgroundColor: props.color,
      color: "#fff",
      borderColor: props.color,
      ...props.style
    }
  };
  const handlehover = () => {
    if (props.hover) {
      setHover(!hover);
    }
  };
  const handleleave = () => {
    if (props.hover) {
      setHover(!hover);
    }
  };

  return (
    <Button
      onMouseOver={handlehover}
      onMouseLeave={handleleave}
      {...props.onClick}
      style={hover ? hoverstyle.elements : hoverstyle.over}
      className="button--light"
      {...props.style}
    >
      {props.title}
    </Button>
  );
};
export default ButtonLight;
