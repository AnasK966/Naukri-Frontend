import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState(false);
  const [user, setEmployee] = useState({ email: "", hash_password: "" });
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
      console.log("empty fields");
      return;
    }
    e.preventDefault();
    console.log("success");
    navigate("/");
  };

  const submitEmployeeLogin = async (e) => {
    e.preventDefault();
    const { email, hash_password } = user;

    const res = await fetch("http://localhost:3000/emp/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        hash_password,
      }),
    });
    const data = await res.json();
    console.log(data);
    alert("Signed In");
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', data.user.emp_id)
    localStorage.setItem('role', data.user.role)
    navigate("/");
  };

  const submitEmployerLogin = async (e) => {
    e.preventDefault();
    const { email, hash_password } = user;

    const res = await fetch("http://localhost:3000/cmp/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        hash_password,
      }),
    });
    const data = await res.json();

    if (data.message) {
      console.log(data);
      alert(data.message);
    } else {
      alert("Signed In");
      console.log(data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.user.cmp_id)
      localStorage.setItem('role', data.user.role)
      navigate("/");
    }
  };

  const employee = () => {
    return (
      <MainSubDiv>
              <EmployeeLoginDiv>
        <div>
          <h1>Enter Details</h1>
        </div>
        <div>
          <Label>
            <b>Email</b>
          </Label>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>
            <b>Password</b>
          </Label>
          <Input
            type="password"
            name="hash_password"
            value={user.hash_password}
            onChange={handleChange}
          />
        </div>
        <div id="login-div">
          <p>
            Dont have an account?{" "}
            <SignUp onClick={() => navigate("/signUp")}>Sign Up</SignUp>
          </p>
          <SubmitButton onClick={submitEmployeeLogin}>Submit</SubmitButton>
        </div>
      </EmployeeLoginDiv>
      </MainSubDiv>
    );
  };

  const employer = () => {
    return (
      <MainSubDiv>
              <EmployerLoginDiv>
        <div>
          <h1>Enter Details</h1>
        </div>
        <div>
          <Label>
            <b>Email</b>
          </Label>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>
            <b>Password</b>
          </Label>
          <Input
            type="password"
            name="hash_password"
            value={user.hash_password}
            onChange={handleChange}
          />
        </div>
        <div id="login-div">
          <p>
            Dont have an account?{" "}
            <SignUp onClick={() => navigate("/signUp")}>Sign Up</SignUp>
          </p>
          <SubmitButton onClick={submitEmployerLogin}>Submit</SubmitButton>
        </div>
      </EmployerLoginDiv>
      </MainSubDiv>
    );
  };
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
      {/* <SubDiv>
      <SwitchDiv>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      </SwitchDiv>
      </SubDiv> */}
      {userStatus ? employee() : employer()}
    </Main>
  );
};

export default Login;

// STYLED CSS



// const SwitchDiv = styled.div`
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   `
const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

`;

// const SubDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `

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

const MainSubDiv = styled.div`
  display: flex;
  justify-content: center;
`

const EmployeeLoginDiv = styled.form`
  display: grid;
  grid-template-rows: 60px 70px 70px 40px;
  padding: 60px;
  width: 30%;
  margin-top: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

const EmployerLoginDiv = styled.form`
  display: grid;
  grid-template-rows: 60px 70px 70px 40px;
  padding: 60px;
  width: 30%;
  margin-top: 60px;
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
  border-bottom: 1px solid ${(props) => (props.invalid ? "red" : "grey")};
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
  background-color: ${(props) => (props.disabled ? "grey" : "blue")};
  border-radius: 10px;
  border: none;
  width: 180px;
  height: 50px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  margin-top: 20px;
  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? ""
        : "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"};
    transition: 300ms;
  }
`;
