import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUserAction } from '../actions/index';
import { bindActionCreators } from 'redux';

class UserList extends Component {
    render() {
        return (
            <div className="row">
                <ul className="col-md-4">
                    {
                        this.props.myUserList.map((user) => {
                            return (
                                <li className="list-group-item"
                                    key={user.id}
                                    onClick={() => this.props.selectUser(user)}>
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myUserList: state.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser: selectUserAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
