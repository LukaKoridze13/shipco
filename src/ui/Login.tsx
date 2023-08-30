import { styled } from "styled-components";
import { Checkbox, Close, Form, FormTitle, Input, Label, PasswordInput, Submit } from "./Form";
import close from "../assets/close.svg";
import { FormEvent, useState } from "react";
import { API_login, LoginParams, LoginResponse } from "../api/API_Login";
import { Error } from "./Registration";
import { useAppDispatch } from "../redux/hooks";
import { set } from "../redux/TokenReducer";

interface Props {
  opened: boolean;
  closeLogin: () => void;
}
export default function Login({ opened, closeLogin }: Props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<null | string>(null);
  const [text, setText] = useState("Login");
  const dispatch = useAppDispatch();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    setText("Loading...");
    event.preventDefault();
    const params: LoginParams = { login, password };
    const response = await API_login(params);
    if (response.success) {
      closeLogin();
      const res = response.data as LoginResponse;
      dispatch(set(res.token));
    } else {
      setErrors(response.data.message);
    }
    setText("Login");
  };
  return (
    <Wrapper $opened={opened}>
      <Form onSubmit={handleLogin}>
        <Close src={close} onClick={closeLogin} />
        <FormTitle>Login</FormTitle>
        <Label>Email / Phone</Label>
        <Input
          onChange={(event) => {
            setLogin(event.target.value);
          }}
          type="text"
          placeholder="Email / Phone"
        />
        <Label>Password</Label>
        <PasswordInput
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
        />
        <Checkbox text="Remember me" />
        <Error>{errors}</Error>
        <Submit>{text}</Submit>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $opened: boolean }>`
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100dvh;
  background: rgba(0, 0, 0, 0.45);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.$opened ? "1" : "0")};
  pointer-events: ${(props) => (props.$opened ? "all" : "none")};
`;
