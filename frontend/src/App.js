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
      <div>
          {
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
          }
      </div>
    )
  }
}

export default App