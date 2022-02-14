import React,{useState} from 'react';

const BasicTODOList = () => {
    const task = [
        { id:0, name: 'Abhishek', age: 26, email: 'abhishek@gmail.com'},
        { id:1, name: 'Sankalp', age: 28, email: 'sankalp@gmail.com'},
        { id:2, name: 'Roopam', age: 22, email: 'roopam@gmail.com'},
    ]

    const [todoTask, setTodoTask] = useState(task);

    function deleteOneTask(taskIndex) {
        const newtask = todoTask.filter((_, index) => {
           return index !== taskIndex})
        setTodoTask(newtask)
    }

    function deleteAllTask() {
        setTodoTask([])
    }

  return <div>
      { todoTask.map((task, index) => {
        const {id, name, age, email } = task || {}
        return <div key={id}>Name: {name}, Age: {age}, Email: {email}  <button type="button" onClick={() => deleteOneTask(index)}>Delete</button></div>
      })}

      <button type="button" onClick={deleteAllTask}>Clear</button>
  </div>;
};

export default BasicTODOList;
