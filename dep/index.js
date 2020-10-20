const React = require("react");
const ico = require("./favicon.ico");

module.exports = {
  Img: () => React.createElement("img", { src: ico.default }),
};
