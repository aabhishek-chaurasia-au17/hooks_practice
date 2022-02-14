import React, { useState } from 'react';

const HandleObjectsUsingUseState = () => {
  
  const aboutme = {
      Name: 'Abhishek',
      Age: 27,
      Degree: 'MCA'
  }

  const [aboutMy, setAboutmy] = useState(aboutme);

  function changeValue(){
    setAboutmy({...aboutMy, Age: 28});
  }

  return <div>
    <h2>Name:{aboutMy.Name}, Age:{aboutMy.Age}, Degree:{aboutMy.Degree}</h2>
    <button onClick={changeValue} type="button">Change Details</button>
  </div>
};

export default HandleObjectsUsingUseState;
