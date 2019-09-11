import node from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      compact: true,
      file: "index.js",
      format: "umd",
      name: "index.js"
    }
  ],
  plugins: [node(), commonjs()]
};
