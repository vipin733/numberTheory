import React, {Component} from 'react'
import Navbar from '../components/layouts/navbar'
import SideBar from '../components/layouts/sidebar'
import Footer from '../components/layouts/footer'

class Index extends Component{
  render(){
    return(
      <div className="wrapper ">
        <SideBar />
        <div className="main-panel">
          <Navbar/>
          <div className="content">
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Index