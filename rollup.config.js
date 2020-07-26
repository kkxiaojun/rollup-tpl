import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import json from 'rollup-plugin-json';

const name = 'name'

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default {
  input: './src/index.ts',
  external: [],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ extensions, include: ['src/**/*'] }),
    json(),
    terser(),
  ],

  output: [{
    file: 'dist/micro.app.js',
    format: 'esm',
  }, {
    name: name,
    file: `dist/${name}.cjs.js`,
    format: 'cjs'
  },],
};
