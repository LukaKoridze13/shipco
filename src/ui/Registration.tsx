import { styled } from "styled-components";
import { Checkbox, Close, Form, FormTitle, Input, Label, PasswordInput, Submit } from "./Form";
import close from "../assets/close.svg";
import FlexWrapper from "../components/FlexWrapper";
import Displays from "../Displays";
interface Props {
  opened: boolean;
  closeRegistration: () => void;
}
export default function Registration({ opened, closeRegistration }: Props) {
  return (
    <Wrapper $opened={opened}>
      <Form style={{ maxWidth: "768px" }}>
        <Close src={close} onClick={closeRegistration} />
        <FormTitle>Registration</FormTitle>
        <Half>
          <Label>First name</Label>
          <Input type="text" placeholder="First name" />
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
          <Label>City</Label>
          <Input type="text" placeholder="City" />
        </Half>
        <Half>
          <Label>Last name</Label>
          <Input type="text" placeholder="Last name" />
          <Label>Number</Label>
          <Input type="text" placeholder="Number" />
          <Label>Address</Label>
          <Input type="text" placeholder="Address" />
        </Half>
        <Label>Gender</Label>
        <FlexWrapper>
          <Checkbox text="Male" />
          <Checkbox text="Female" />
        </FlexWrapper>
        <Label>Password</Label>
        <PasswordInput placeholder="Password" />
        <Label>Confirm Password</Label>
        <PasswordInput placeholder="Confirm Password" />
        <Checkbox text="I agree to the terms and contitions" />
        <Submit>Register</Submit>
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
  padding: 36px;
  @media (max-width: ${Displays.tablet}) {
    padding: 4px;
  }
  background: rgba(0, 0, 0, 0.45);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.$opened ? "1" : "0")};
  pointer-events: ${(props) => (props.$opened ? "all" : "none")};
`;

const Half = styled.div`
  width: 48%;
  display: inline-block;
  margin-right: 4%;
  &:nth-child(4) {
    margin-right: 0;
  }
`;
