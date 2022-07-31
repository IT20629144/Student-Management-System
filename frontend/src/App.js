// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       students:[]
    };
  }

  componentDidMount(){

      this.retriveStudents();
  }

  retriveStudents(){
      
      axios
       .get("http://localhost:8000/student/studentall")
       .then(res => {
          if(res.data.success){
             
             this.setState({
                 students:res.data.existingPosts
             });

             console.log(this.state.students)
          }
       });
  }


  render() {
    return (
      <div className='container'>
        <p>All Students</p>

        <table class="table">
           <thead>
              <tr>
                <th scope="col">A</th>
                <th scope="col">StudentName</th>
                <th scope="col">UserName</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">MobileNumber</th>
                <th scope="col">Nic</th>
                <th scope="col">JoinDate</th>
                <th scope="col">Gender</th>
                <th scope="col">Course</th>
              </tr>
           </thead>

           <tbody>
             {this.state.students.map((students,index) => (
               <tr>
                   <th scope="row">{index+1}</th>
                    <td>{students.studentname}</td>
                    <td>{students.username}</td>
                    <td>{students.password}</td>
                    <td>{students.email}</td>
                    <td>{students.mobilenumber}</td>
                    <td>{students.nic}</td>
                    <td>{students.joindate}</td>
                    <td>{students.gender}</td>
                    <td>{students.course}</td>
                    <td>
                       <a class="btn btn-warning" href="@">
                         <i className='fas fa-edit'></i>&nbsp;Edit
                       </a>
                      &nbsp;
                       <a  class="btn btn-danger" href="@">
                         <i class='far fa-trash-alt'></i>&nbsp;Delete
                       </a>
                    </td>
               </tr>
             ))}
           </tbody>
        </table>


          {/* {
            this.state.students.map(students => (
                <div>
                   <p>{students.studentname}</p>
                   <p>{students.username}</p>
                   <p>{students.password}</p>
                   <p>{students.email}</p>
                   <p>{students.mobilenumber}</p>
                   <p>{students.nic}</p>
                   <p>{students.joindate}</p>
                   <p>{students.gender}</p>
                   <p>{students.course}</p>
                   
                </div>
            ))
          } */}
      </div>
    )
  }
}

export default App