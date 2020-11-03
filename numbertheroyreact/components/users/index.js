import React from 'react'
import { connect } from 'react-redux'
import { onUserRequest } from '../../store/actions'
import store from '../../store'

class Index extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            search: '',
            users: []
        }
    }

    _getData(){
        if (this.state.search.length > 0) {
            return
        }
        store.dispatch(onUserRequest(this.props.isLoadingMore, this.props.userData))
    }
    
    componentDidMount(){
        let that = this 
        window.onscroll = function() {
            let d = document.documentElement
            let offset = d.scrollTop + window.innerHeight
            let height = d.offsetHeight
            if (offset >= height) {
              that._getData()
            }
        }
    }

    _searchUsers(search, colunm, users){
        if (search) {
            let filterUsers = users.filter(user => {
                let userData = user[colunm].toLowerCase()
                let searchData = search.toLowerCase()
                return userData.indexOf(searchData) > -1
            })
            this.setState({
                users: filterUsers
            })
        }

        this.setState({
            search
        })
    }
  
    render() {
        let {userData, isLoading} = this.props
        let { search, users } = this.state
        let userList = userData.users
        if(search.length > 0){
            userList = users
        }

        return (
            <div className="content" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table fixed_headerh">
                                        <thead className="text-primary">
                                            {
                                                userData.headers.map((header, index) => {
                                                    return (
                                                        <th key={index}>
                                                            {header} <br/>
                                                            <input type="text" onChange={e => this._searchUsers(e.target.value, header, userData.users)}/>
                                                        </th>
                                                    )
                                                })
                                            }
                                        </thead>
                                        <tbody>
                                            {
                                                userList.map((user, index) => {
                                                    return (
                                                        <tr key={index} >
                                                            {
                                                                userData.headers.map((head, headIndex) => {
                                                                    return (
                                                                        <td key={headIndex+index}>{user[head]}</td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            } 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
  return {
    userData: state.userData,
    isLoadingMore: state.isLoadingMore,
  }
}

const  mapDispatchToProps = (dispatch) => {
    return({
        // getUsers: (isLoading, userData) => dispatch(onUserRequest(isLoading, userData))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)