import App from 'next/app'
import React from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import {initSocket} from '../store/actions/index'
import Head from 'next/head'
import Script from '../components/layouts/script'
import axios from 'axios'
const API_URL = process.env.API_URL

class MyApp extends App {

  constructor(props){
    super(props)
    axios.defaults.baseURL = API_URL + '/api/'
    store.dispatch(initSocket())
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>
              Paper Dashboard 2 by Creative Tim
          </title>
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />

          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"/>

          <link href="/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/css/paper-dashboard.css?v=2.0.1" rel="stylesheet" />
          <link href="/demo/demo.css" rel="stylesheet" /> 
        </Head>
        <Component {...pageProps} />
        <Script/>
      </Provider>
    )
  }
}

export default MyApp
