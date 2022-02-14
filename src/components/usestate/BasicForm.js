import React, {useState} from 'react';

const BasicForm = () => {
    const [userDetails, setUserDetails] = useState({email: '', password: ''});
    const [recorde, setRecorde] = useState([]);

    function setDetails(e){
        let key = e.target.name;
        let value = e.target.value;
        setUserDetails({...userDetails, [key]:value})
    }

    function onSubmit(e) {
        e.preventDefault()
        const {email, password} = userDetails || {}

        if (email && password) {
            
        const newEntry = { id: new Date().getTime().toString(), ...userDetails};
        setRecorde([...recorde, newEntry])
        setUserDetails({email: '', password: ''})

        } else {
            alert('Please enter your data')
        }
    }
    

  return <div>
      <section className="vh-100 gradient-custom">
      
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-3">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                        <input type="email" name='email' value={userDetails.email} onChange={setDetails} id="typeEmailX" className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                        <input type="password" name="password" value={userDetails.password} onChange={setDetails} id="typePasswordX" className="form-control form-control-lg" />
                    </div>

                    <button className="btn btn-outline-light btn-lg" onClick={onSubmit} type="submit">Login</button>
                    </div>

                    </div>
                </div>
            </div>
            </div>
            
        </div>
     </section>
    <div>
        {recorde.map((element, index) =>{
            const {id, email, password} = element || {}
            return <div key={id}>
            <div className="card text-center">
            <div className="card-body">
                <h4 className="card-text" ><span className="card-title">Email:  {email}</span> <span className="card-title">Password:{password}</span></h4>
            </div>
            </div>
            </div>
        })}
      </div>
  </div>;
};

export default BasicForm;
