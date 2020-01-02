import { configure } from "@storybook/html";
import "normalize.css";
import "../src/scss/index.scss";

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
