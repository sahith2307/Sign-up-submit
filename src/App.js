import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Input from "react-phone-number-input/input";

import "react-phone-number-input/style.css";
import axios from "axios";

function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [classNo, setClassNo] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [hobbies, setHobbies] = useState("");
  const onClickSubmit = () => {
    const body = {
      firstName: firstName,
      lastName: secondName,
      class: classNo,
      gender: gender,
      mobile: phoneNumber,
      address: address,
      email: email,
      password: password,
      confirmPassword: reEnterPassword,
      hobbies: hobbies.split(","),
    };
    axios
      .post("https://winter-summer-sceptre.glitch.me/submit", body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <InputGroup sm="10">
        <InputGroup.Text>First Name</InputGroup.Text>
        <FormControl
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Second Name</InputGroup.Text>
        <FormControl
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Class</InputGroup.Text>
        <FormControl
          value={classNo}
          onChange={(e) => setClassNo(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Gender</InputGroup.Text>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option>Open this select menu</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>phone Number</InputGroup.Text>
        <Input
          className="form-control"
          country="IN"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Address</InputGroup.Text>
        <Form.Control
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          as="textarea"
          style={{ height: "100px" }}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>email</InputGroup.Text>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Password</InputGroup.Text>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Re-Enter Password</InputGroup.Text>
        <Form.Control
          type="password"
          value={reEnterPassword}
          onChange={(e) => setReEnterPassword(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Hobbies</InputGroup.Text>
        <FormControl
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        />
      </InputGroup>
      <Button variant="secondary" size="lg" onClick={onClickSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default App;
