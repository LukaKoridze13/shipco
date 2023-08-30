import { styled } from "styled-components";
import { Checkbox, CheckboxOne, Close, Form, FormTitle, Input, Label, PasswordInput, Submit } from "./Form";
import close from "../assets/close.svg";
import FlexWrapper from "../components/FlexWrapper";
import Displays from "../Displays";
import { useNavigate } from "react-router";
import { FormEvent, useEffect, useState } from "react";
import { API_register, RegisterParams, RegistrationError, RegistrationResponse } from "../api/API_Register";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { set } from "../redux/TokenReducer";
import { RootState } from "../redux/store";

export default function Registration() {
  const navigate = useNavigate();
  const tokenExists = useAppSelector((state: RootState) => state.token.value);
  useEffect(() => {
    if (tokenExists) {
      navigate("/");
    }
  }, []);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [personal_id, setPersonalID] = useState("");
  const [gender, setGender] = useState("male");
  const [birth_date, setBirthDate] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed_password, setConfirmedPassword] = useState("");
  const [errors, setErrors] = useState<null | RegistrationError>(null);
  const [text, setText] = useState("Register");
  const dispatch = useAppDispatch();
  const handleRegistration = async (event: FormEvent<HTMLFormElement>) => {
    setText("Loading...");
    event.preventDefault();
    const params: RegisterParams = { first_name, last_name, email, personal_id, gender, birth_date, phone_number, address, password, confirmed_password };
    const response = await API_register(params);
    if (response.success) {
      const res = response.data as RegistrationResponse;
      dispatch(set(res.token));
      navigate("/");
    } else {
      const errors = response.data as RegistrationError;
      setErrors(errors);
    }
    setText("Register");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleRegistration} style={{ maxWidth: "768px" }}>
        <Close
          src={close}
          onClick={() => {
            navigate("/");
          }}
        />
        <FormTitle>Registration</FormTitle>
        <Half>
          <Label>First name</Label>
          <Input
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            type="text"
            placeholder="First name"
          />
          <Error>{errors?.first_name}</Error>
          <Label>Email</Label>
          <Input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <Error>{errors?.email}</Error>

          <Label>Birthday</Label>
          <Input
            onChange={(event) => {
              setBirthDate(event.target.value);
            }}
            type="date"
          />
          <Error>{errors?.birth_date}</Error>
        </Half>
        <Half>
          <Label>Last name</Label>
          <Input
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            type="text"
            placeholder="Last name"
          />
          <Error>{errors?.last_name}</Error>

          <Label>Phone number</Label>
          <Input
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            type="text"
            placeholder="Number"
          />
          <Error>{errors?.phone_number}</Error>

          <Label>Address</Label>
          <Input
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            type="text"
            placeholder="Address"
          />
          <Error>{errors?.address}</Error>
        </Half>
        <Label>Personal ID</Label>
        <Input
          onChange={(event) => {
            setPersonalID(event.target.value);
          }}
          type="text"
          placeholder="ID"
        />
        <Error>{errors?.personal_id}</Error>

        <Label>Gender</Label>
        <Error>{errors?.gender}</Error>
        <FlexWrapper>
          <CheckboxOne text="Male" current={gender} value="male" onClick={setGender} />
          <CheckboxOne text="Female" current={gender} value="female" onClick={setGender} />
        </FlexWrapper>
        <Label>Password</Label>
        <PasswordInput
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
        />
        <Error>{errors?.password}</Error>

        <Label>Confirm Password</Label>
        <PasswordInput
          onChange={(event) => {
            setConfirmedPassword(event.target.value);
          }}
          placeholder="Confirm Password"
        />
        <Error>{errors?.confirmed_password}</Error>
        <Checkbox text="I agree to the terms and contitions" />
        <Submit>{text}</Submit>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 15;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100dvh;
  padding: 36px;
  @media (max-width: ${Displays.tablet}) {
    padding: 4px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
  background: rgba(0, 0, 0, 0.45);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Half = styled.div`
  width: 48%;
  display: inline-block;
  margin-right: 4%;
  &:nth-child(4) {
    margin-right: 0;
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 6px;
  color: #a22424;
`;
