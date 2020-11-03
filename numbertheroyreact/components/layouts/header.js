import React, {Component} from 'react'
import Head from 'next/head'


class Index extends Component{
  render(){
    return(
      <>
        <Head>          
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <title>
                Number Theory AI
            </title>
            <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />

            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"/>

            <link href="./css/bootstrap.min.css" rel="stylesheet" />
            <link href="./css/paper-dashboard.css?v=2.0.1" rel="stylesheet" />
            <link href="./demo/demo.css" rel="stylesheet" /> 
        </Head>
      </>
    )
  }
}

export default Index