import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = () => {
  const [userStatus, setUserStatus] = useState(true);
  const [userEmployee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    hash_password: '',
    ph_no: '',
    country: '',
    city: '',
  });
  const [userEmployer, setEmployer] = useState({
    name: '',
    email: '',
    hash_password: '',
    ph_no: '',
    country: '',
    city: '',
  });
  const navigate = useNavigate();

  let emname, emvalue;
  const handleEmployeeChange = (e) => {
    emname = e.target.name;
    emvalue = e.target.value;

    setEmployee({ ...userEmployee, [emname]: emvalue });
  };

  let ername, ervalue;
  const handleEmployerChange = (e) => {
    ername = e.target.name;
    ervalue = e.target.value;

    setEmployer({ ...userEmployer, [ername]: ervalue });
  };

  // To check form submission
  const employeeErrors = {
    fname: userEmployee.firstName.length === 0,
    lname: userEmployee.lastName.length === 0,
    email: userEmployee.email.length === 0,
    password: userEmployee.hash_password.length === 0,
    phone: userEmployee.ph_no.length === 0,
    country: userEmployee.country.length === 0,
    city: userEmployee.city.length === 0,
  };
  const employeeDisabled = Object.keys(employeeErrors).some(
    (x) => employeeErrors[x]
  );

  const handleEmployeeSubmit = (e) => {
    if (employeeDisabled) {
      e.preventDefault();
      console.log('empty fields');
      return;
    }
    e.preventDefault();
    console.log('success');
    navigate('/');
  };

  const employerErrors = {
    cmpname: userEmployer.name.length === 0,
    email: userEmployer.email.length === 0,
    password: userEmployer.hash_password.length === 0,
    phone: userEmployer.ph_no.length === 0,
    country: userEmployer.country.length === 0,
    city: userEmployer.city.length === 0,
  };
  const employerDisabled = Object.keys(employerErrors).some(
    (x) => employerErrors[x]
  );

  const handleEmployerSubmit = (e) => {
    if (employerDisabled) {
      e.preventDefault();
      console.log('empty fields');
      return;
    }
    e.preventDefault();
    console.log('success');
    navigate('/');
  };


  const submitEmployeeForm =  async(e) => {
    e.preventDefault()
    const { firstName, lastName, email, ph_no, hash_password, country, city } = userEmployee
    
    const res = await fetch('http://localhost:3000/emp/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName, lastName, email, ph_no, hash_password, address: { city, country }
      })
    })
    console.log(res)
    const data = await res.json()

    if (!data) {
      alert('Fuck you')
    } else {
      alert('Signed Up')
      navigate('/jobAttributes')
    }
  }

  const submitEmployerForm =  async(e) => {
    e.preventDefault()
    const { name, email, ph_no, hash_password, country, city } = userEmployer
    
    const res = await fetch('http://localhost:3000/cmp/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, hash_password,ph_no, address: { city, country }
      })
    })
    console.log(res)
    const data = await res.json()

    if (!data) {
      console.log('Invalid Details')
    } else {
      alert('Signed Up')
      navigate('/')
    }
  }

  function employee() {
    return (
      <DetailsDiv>
        <EmployeeDetails onSubmit={handleEmployeeSubmit}>
          <div>
            <h1>Provide Details...</h1>
          </div>
          <div>
            <Label>
              <b>First Name</b>
            </Label>
            <Input
              type='text'
              name='firstName'
              value={userEmployee.firstName}
              onChange={handleEmployeeChange}
              invalid={employeeErrors['fname']}
            />
          </div>
          <div>
            <Label>
              <b>Last Name</b>
            </Label>
            <Input
              type='text'
              name='lastName'
              value={userEmployee.lastName}
              onChange={handleEmployeeChange}
              invalid={employeeErrors['lname']}
            />
          </div>
          <div>
            <Label>
              <b>Email</b>
            </Label>
            <Input
              type='email'
              name='email'
              value={userEmployee.email}
              onChange={handleEmployeeChange}
              invalid={employeeErrors['email']}
            />
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <Input
              type='password'
              name='hash_password'
              value={userEmployee.hash_password}
              onChange={handleEmployeeChange}
              invalid={employeeErrors['password']}
            />
          </div>
          <div>
            <Label>
              <b>Phone Number</b>
            </Label>
            <Input
              type='number'
              name='ph_no'
              value={userEmployee.ph_no}
              onChange={handleEmployeeChange}
              invalid={employeeErrors['phone']}
            />
          </div>
          <div>
            <Label>
              <b>Country</b>
            </Label>
            <Input
              type='text'
              name='country'
              value={userEmployee.country}
              onChange={handleEmployeeChange}
              invalid={employeeErrors['country']}
            />
          </div>
          <div>
            <Label>
              <b>City</b>
            </Label>
            <Input
              type='text'
              name='city'
              value={userEmployee.city}
              onChange={handleEmployeeChange}
              invalid={employeeErrors['city']}
            />
          </div>
          <SubmitButton onClick={submitEmployeeForm} disabled={employeeDisabled}>Submit</SubmitButton>
        </EmployeeDetails>
      </DetailsDiv>
    );
  }

  function employer() {
    return (
      <DetailsDiv>
        <EmployerDetails onSubmit={handleEmployerSubmit}>
          <div>
            <h1>Provide Details...</h1>
          </div>
          <div>
            <Label>
              <b>Company Name</b>
            </Label>
            <Input
              type='text'
              name='name'
              value={userEmployer.name}
              onChange={handleEmployerChange}
              invalid={employerErrors['cmpname']}
            />
          </div>
          <div>
            <Label>
              <b>Email</b>
            </Label>
            <Input
              type='email'
              name='email'
              value={userEmployer.email}
              onChange={handleEmployerChange}
              invalid={employerErrors['email']}
            />
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <Input
              type='password'
              name='hash_password'
              value={userEmployer.hash_password}
              onChange={handleEmployerChange}
              invalid={employerErrors['password']}
            />
          </div>
          <div>
            <Label>
              <b>Phone Number</b>
            </Label>
            <Input
              type='number'
              name='ph_no'
              value={userEmployer.ph_no}
              onChange={handleEmployerChange}
              invalid={employerErrors['phone']}
            />
          </div>
          <div>
            <Label>
              <b>Country</b>
            </Label>
            <Input
              type='text'
              name='country'
              value={userEmployer.country}
              onChange={handleEmployerChange}
              invalid={employerErrors['country']}
            />
          </div>
          <div>
            <Label>
              <b>City</b>
            </Label>
            <Input
              type='text'
              name='city'
              value={userEmployer.city}
              onChange={handleEmployerChange}
              invalid={employerErrors['city']}
            />
          </div>
          <SubmitButton onClick={submitEmployerForm} disabled={employerDisabled}>Submit</SubmitButton>
        </EmployerDetails>
      </DetailsDiv>
    );
  }

  return (
    <Main>
      <OptionDiv>
        <OptionSubDiv>
          <Employee onClick={() => setUserStatus(true)}>
            As an employee
          </Employee>
          <Employer onClick={() => setUserStatus(false)}>
            As an employer
          </Employer>
        </OptionSubDiv>
      </OptionDiv>
      {userStatus ? employee() : employer()}
    </Main>
  );
};

export default SignUp;

// STYLED CSS
const Main = styled.div``;

const OptionDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionSubDiv = styled.div`
  display: grid;
  grid-template-columns: 320px 320px;
  column-gap: 100px;
`;

const Employee = styled.div`
  margin-top: 30px;
  padding: 30px 80px 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e0dddd;
    transition: 400ms;
  }
`;
const Employer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px 80px 30px;
  margin-top: 30px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e0dddd;
    transition: 400ms;
  }
`;

const DetailsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const EmployeeDetails = styled.form`
  display: grid;
  grid-template-rows: repeat(7, 70px) 70px;
  width: 45%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

const EmployerDetails = styled.form`
  display: grid;
  grid-template-rows: repeat(8, 70px) 50px;
  width: 45%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px;
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

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  border-radius: 10px;
  border: none;
  width: 180px;
  height: 50px;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? ''
        : 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'};
    transition: 300ms;
  }
`;
