// 1: Always write it inside the component or function

// 2: Component name must be PascalCase (first letter should be uppercase)

//3: we can directly import or we can directly write it using React. hookname.

// 4: Don't call Hooks inside loops, conditionals, or nested functions.

import React, {useState} from 'react';

const RuleofHooks = () => {
    const [name, setName] = useState('Abhishek');

    function changeName(){
        setName('Subham')
    }

  return <div>
      <div>{name}</div> 
      <button type="button" onClick={changeName}>change</button>
  </div>
};

export default RuleofHooks;
