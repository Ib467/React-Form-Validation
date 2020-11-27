import React from 'react';


const Results = (props) => {

    return(
        <div>
            <p>Name: {props.firstName} { props.lastName} </p>
            <p>Email: {props.email } </p>
            <p>Password: {props.password} </p>
        </div>
    )
}
export default Results;