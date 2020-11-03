import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layout/default'
import Users from '../components/users'
import { onUserRequest } from '../store/actions/index'

class Index extends React.Component {

  constructor(props){
    super(props)
    props.getUsers(props.isLoadingMore, props.userData)
  }

  render() {
    let {isLoading} = this.props
    return (
      <>
        <Head>
          <title>Real Time Dashboard</title>
        </Head>
        <Layout>
          {isLoading ? <h3>Loading...</h3>  : <Users />}
        </Layout>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    userData: state.userData,
  }
}


function mapDispatchToProps(dispatch) {
  return({
    getUsers: (isLoading, userData) => dispatch(onUserRequest(isLoading, userData))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
