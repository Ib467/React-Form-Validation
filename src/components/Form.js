import React, {useState} from 'react';


const Form = (props) => {
    // const [stateGet, stateSet] = useState("hi");
    //step 1 - create const for errors
    const [errors, setErrors] = useState({});
    const [ name, setName] = useState("");


    //step 2 - create a function to handleName
    const handleName = e => {
        let value = e.target.value;
        setName(value);
        //validations
        //name should be required
        //name should have a minimum length
        // let message  =""
        // if(!value){ //if value doesnt exit
        //     message = "Name is required!";
        // }else if(value.length <3){
        //     message = "Name must be at lease 3 characters long"
        // }
        // setErrors({...errors, name: message});
    }
    //step 3 - 
    const nameError = e => {
        let value = e.target.value;
        setName(value);
        //validations
        //name should be required
        //name should have a minimum length
        let message  =""
        if(!value){ //if value doesnt exit
            message = "Name is required!";
        }if(/[^a-zA-Z -]/.test(value)){
            message = "Invalid Characters"
        }
        
        else if(value.length <3){
            message = "Name must be at lease 3 characters long"
        }
        setErrors({...errors, name: message});
    }

    return (
      <>
        <article className="message is-success column is-two-fifths align-center">
          <div className="message-header">
            <p>Form Validation</p>
          </div>
          <div className="message-body">
          <div className="field">
          <p className="control left">
            <input className="input" type="text" placeholder="Name" 
             value={name}
             onChange={handleName}
             onBlur={nameError}/>
             <span className="help is-danger">{errors.name} </span>
          </p>
          </div>
          
          <div className="field">
          <p className="control left">
            <input className="input" type="email" placeholder="Email" 
            />
            {/* <span class="help is-danger">{error} </span> */}
          </p>
          </div>
        <div className="field">
          <p className="control left">
            <input className="input" type="password" placeholder="Password" />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </div>
          </div>
        </article>


       

        
      </>
    );
}

export default Form;