import React, { Component } from 'react';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
<<<<<<< HEAD
import {useSelector, useDispatch} from 'react-redux'
=======
import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import Navbar from '../components/navbar';
>>>>>>> 756d1094b9a4694cce6c20da42f19800174fd934

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      lectures: [],
    };
  }

  componentDidMount() {
    this.props.firestore
      .collection('users')
      .get()
      .then((snapshot) => {
        const users = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState({ users });
      });
      this.props.firestore
      .collection('lectures')
      .get()
      .then((snapshot) => {
        const lectures = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState({ lectures });
      });
  }


  render() {
<<<<<<< HEAD
    let { users, lectures } = this.state
    
=======
    const profile = this.props.profile;

>>>>>>> 756d1094b9a4694cce6c20da42f19800174fd934
    return (
      <div>
        <div className="container-fluid">
          <header>
            <ul>
              <li>lärare: jens</li>
              <li>email: jens@gmail.com</li>
            </ul>
          </header>
          <main>
            <div className="student mt-5">
              <div className="w-100">
                <h5 className="text-center">användare tabell</h5>
              </div>
              <table className="table table-sm">
                <thead className="bg-Secondary">
                  <tr>
                    <th scope="col">roll</th>
                    <th scope="col">Namn</th>
                    <th scope="col">e-post</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">
                      <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#adduser">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.role}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          <i className="fa fa-eraser" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
<<<<<<< HEAD
            <table className="table table-sm">
              <thead className="bg-Secondary">
                <tr>
                  <th scope="col">roll</th>
                  <th scope="col">Namn</th>
                  <th scope="col">e-post</th>
                  <th scope="col">
                    <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#adduser">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.role}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
=======

            <div className="lecture mt-5">
              <div className="w-100">
                <h5 className="text-center">Föreläsning</h5>
              </div>
              <table className="table table-sm">
                <thead className="bg-Secondary">
                  <tr>
                    <th scope="col">kategori</th>
                    <th scope="col">video</th>
                    <th scope="col">info</th>
                    <th scope="col">
                      <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#lecture">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>hälsa</td>
                    <td>https://getbootstra.....</td>
                    <td>Lorem ipsum dolor, sit amet....</td>
>>>>>>> 756d1094b9a4694cce6c20da42f19800174fd934
                    <td>
                      <button className="btn btn-danger mr-1 btn-sm">
                        <i className="fa fa-eraser" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
<<<<<<< HEAD
                ))}
              </tbody>
            </table>
          </div>
          {
            lectures.map((lecture) => (
              <div className="lecture mt-5" id={lecture.name}  key={lecture.id}>
              <div className="w-100" style={{backgroundColor: lecture.color}}>
                <h5 className="text-center">{lecture.name}</h5>
              </div>
              <table className="table table-sm">
                <thead className="bg-Secondary">
                  <tr>
                    <th scope="col">kategori</th>
                    <th scope="col">video</th>
                    <th scope="col">info</th>
                    <th scope="col">
                      <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#lecture">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                  }
                  <tr>
                    <td>hälsa</td>
                    <td>https://getbootstra.....</td>
                    <td>Lorem ipsum dolor, sit amet....</td>
                    <td>
                      <button className="btn btn-danger mr-1 btn-sm">
                        <i className="fa fa-eraser" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            ))
          }
       
        </main>
=======
                </tbody>
              </table>
            </div>
          </main>
        </div>
>>>>>>> 756d1094b9a4694cce6c20da42f19800174fd934
        <RegisterForm />
        <Navbar role={profile.role} />>
      </div>
    );
  }
}

const enhance = compose(
  firebaseConnect(),
  firestoreConnect(),
  connect((state) => ({
    profile: state.firebase.profile,
  }))
);

export default enhance(Admin);
