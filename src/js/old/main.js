/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
//import { JsonGetter } from './JsonGetter.js';

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

//import React from 'react'
//import { render } from 'react-dom'
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import calcApp from './reducers'

// store は1つだけ使う
//const store = createStore(app)

//render(
//  <Provider store={store}>
//    <App />
//  </Provider>,
//  document.getElementById('root')
//)
