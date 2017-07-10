import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

render(
  <Root />,
  document.getElementById('root')
)
