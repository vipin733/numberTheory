import Head from 'next/head'
import React from 'react'
import Layout from '../layout/default'
import Home from '../components/Home'
import {onDashboardRequest} from '../store/actions/index'
import { connect } from 'react-redux'


class Index extends React.Component {

  constructor(props){
    super(props)
    props.onDashboardRequest()
  }

  render() {
    let {isLoading} = this.props
    return (
      <>
        <Head>
          <title>Real Time Dashboard</title>
        </Head>
        <Layout>
          {isLoading ? <h3>Loading...</h3>  : <Home />}
        </Layout>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  }
}


function mapDispatchToProps(dispatch) {
  return({
    onDashboardRequest: () => dispatch(onDashboardRequest())
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
