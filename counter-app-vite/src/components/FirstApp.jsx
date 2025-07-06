import React from "react";
import PropTypes from "prop-types";

const myName = "Carlos";

const Greeting = (name) => {
  return `Hey ${name}!`;
};

function FirstApp({ title, subTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: `There's not title`,
  subTitle: `There's not subtitle`,
};

export default FirstApp;
