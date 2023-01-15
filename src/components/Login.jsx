import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const [userStatus, setU] = useState(true)
  const [user, setEmployee] = useState({ email: '', hash_password: '' });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setEmployee({ ...user, [name]: value });
  };

  const errors = {
    name: user.email.length === 0,
    password: user.hash_password.length === 0,
  };

  const disabled = Object.keys(errors).some((x) => errors[x]);

  const handleSubmit = (e) => {
    if (disabled) {
      e.preventDefault();
      console.log('empty fields');
      return;
    }
    e.preventDefault();
    console.log('success');
    navigate('/');
  };

  const submitEmployeeLogin =  async(e) => {
    e.preventDefault()
    const { email, hash_password} = user
    
    const res = await fetch('http://localhost:3000/emp/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, hash_password
      })
    })
    const data = await res.json()
    alert(data.message)
    // navigate('/')
  }

  const submitEmployerLogin =  async(e) => {
    e.preventDefault()
    const { email, hash_password} = user
    
    const res = await fetch('http://localhost:3000/cmp/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, hash_password
      })
    })
    const data = await res.json()
    if (data.res === true) {

    }
  }

  return (
    <Main>
      {userStatus ? employee() : employer()}
    </Main>
  );
};

export default Login;

// STYLED CSS
const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const EmployeeLoginDiv = styled.form`
  display: grid;
  grid-template-rows: 60px 70px 70px 40px;
  padding: 60px;
  width: 30%;
  margin-top: 150px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;


const EmployerLoginDiv = styled.form`
  display: grid;
  grid-template-rows: 60px 70px 70px 40px;
  padding: 60px;
  width: 30%;
  margin-top: 150px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 100%;
  height: 24px;
  font-size: 15px;
  padding: 3px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => (props.invalid ? 'red' : 'grey')};
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(71, 71, 242);
    transition: 800ms;
  }
`;

const SignUp = styled.span`
  color: blue;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid blue;
  }
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  border-radius: 10px;
  border: none;
  width: 180px;
  height: 50px;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  margin-top: 20px;
  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? ''
        : 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'};
    transition: 300ms;
  }
`;
