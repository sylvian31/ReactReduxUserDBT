import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class UserList extends Component {
 
    render () {
        return (
        <div>
            <ul className="col-md-4"> 
                {
                    this.props.users.map((user) => {
                        return (
                            <li className="list-group-item"
                             key={user.name}>
                            {user.name}
                         </li>
                         );
                    })
                }
           </ul>
        </div>
        )
    }

    
}

function  mapStateToProps(state) {    
    return {
        myUsers: state.users
    }
}

function mapDispatchToProps(dispatch){
    bindActionCreators({selectUser:selectUser},dispatch)
}

export default connect(mapStateToProps)(UserList)