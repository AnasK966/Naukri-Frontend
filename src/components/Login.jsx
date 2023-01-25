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

  console.log(userStatus);

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
    if (data.message) {
      alert(data.message);
    } else {
      alert("Signed In");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user.emp_id);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("userStatus", "true");
      navigate("/");
    }
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
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user.cmp_id);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("userStatus", "true");
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
            <InputDiv>
              <img src="/assets/mail.png" height={20} width={20}></img>
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </InputDiv>
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <InputDiv>
              <img src="/assets/password.png" height={20} width={20}></img>
              <Input
                type="password"
                name="hash_password"
                value={user.hash_password}
                onChange={handleChange}
              />
            </InputDiv>
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
            <InputDiv>
              <img src="/assets/mail.png" height={20} width={20}></img>
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </InputDiv>
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <InputDiv>
              <img src="/assets/password.png" height={20} width={20}></img>
              <Input
                type="password"
                name="hash_password"
                value={user.hash_password}
                onChange={handleChange}
              />
            </InputDiv>
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
          <Employee>
            <input
              type="radio"
              name="employee"
              onChange={() => setUserStatus(true)}
            />
            <label id="profile-div">As an Employee</label>
          </Employee>
          <Employer>
            <input
              type="radio"
              name="employee"
              onChange={() => setUserStatus(false)}
            />
            <label id="profile-div">As an Employer</label>
          </Employer>
        </OptionSubDiv>
      </OptionDiv>
      {userStatus ? employee() : employer()}
    </Main>
  );
};

export default Login;

// STYLED CSS
const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const OptionDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionSubDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 80px;
`;


const Employee = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
  margin-top: 10%;
`;

const Employer = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
  margin-top: 10%;
`;


const MainSubDiv = styled.div`
  display: flex;
  justify-content: center;
`;

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
  margin-left: 10px;
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

const InputDiv = styled.div`
  display: flex;
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
