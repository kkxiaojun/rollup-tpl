/**
 * @author kkxiaojun
 * @create 2020.09.12
 * @description rollup 配置文件
 */
import { comment } from './utils/comment-helper-es'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
const name = 'demo'
export default {
  input: 'src/main.js',
  output: [
    // umd – 通用模块定义，以amd，cjs 和 iife 为一体
    {
      name: name,
      file: `dist/${name}.umd.js`,
      format: 'umd',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by kkxiaojun', 'copyright 2020', 'thanks')
    },
    // es – 将软件包保存为ES模块文件
    { 
      name: name,
      file: `dist/${name}.es.js`,
      format: 'es',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by kkxiaojun', 'copyright 2020', 'thanks')
    },
    // cjs – CommonJS，适用于 Node 和 Browserify/Webpack
    {
      name: name,
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by kkxiaojun', 'copyright 2020', 'thanks')
    },
    // 异步模块定义，用于像RequireJS这样的模块加载器
    {
      name: name,
      file: `dist/${name}.amd.js`,
      format: 'amd',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by kkxiaojun', 'copyright 2020', 'thanks')
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      // 不编译的目录
      exclude: 'node_modules/**'
    }),
  ]
} 