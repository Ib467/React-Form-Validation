import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form';
import Results from './components/Results';


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    
  return (
    <div className="App">
      <Header />
      <Form setFirstName={setFirstName} 
      setLastName={setLastName}
      setEmail={setEmail}
      setPassword={setPassword}
      /> 
      <Results  
      firstName = {firstName}
      lastName={lastName}
      email={email}
      password={password}
      /> 
      <Footer />
    </div>
  );
}

export default App;
