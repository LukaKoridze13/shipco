import { styled } from "styled-components";
import { Checkbox, Close, Form, FormTitle, Input, Label, PasswordInput, Submit } from "./Form";
import close from "../assets/close.svg";
interface Props {
  opened: boolean;
  closeLogin: () => void;
}
export default function Login({ opened, closeLogin }: Props) {
  return (
    <Wrapper $opened={opened}>
      <Form>
        <Close src={close} onClick={closeLogin} />
        <FormTitle>Login</FormTitle>
        <Label>Email</Label>
        <Input type="mail" placeholder="Email" />
        <Label>Password</Label>
        <PasswordInput placeholder="Password" />
        <Checkbox text="Remember me"/>
        <Submit>Login</Submit>
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
