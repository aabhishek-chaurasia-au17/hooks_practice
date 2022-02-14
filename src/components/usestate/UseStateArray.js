import React,{useState} from 'react';

const UseStateArray = () => {
    
    const studentsBio = [
        {id:0, name: 'Abhishek', email: 'abhishek@gmail.com', role: 'MERN'},
        {id:1, name: 'Sankalp', email: 'Sankalp@gmail.com', role: 'FullStack'},
        {id:2, name: 'Rupam', email: 'Rupam@gmail.com', role: 'FrontEnd'},
    ]
    
    const [student, setStudent] = useState(studentsBio);

    function clearData() {
        setStudent([])
    }

  return <>
  {
      student.map((student) => {
        const {id, name, email, role} = student || {}
        return <h3 key={id}>Student name is {name} and email id {email} and role is {role}</h3>
      })
  }
    <button onClick={clearData} type="button">clearData</button>
  </>;
};

export default UseStateArray;
