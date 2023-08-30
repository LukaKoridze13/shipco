import { styled } from "styled-components";
import { Close, Form, FormTitle, Input, Label, Submit } from "./Form";
import close from "../assets/close.svg";
import FlexWrapper from "../components/FlexWrapper";
interface Props {
  opened: boolean;
  closeCalculator: () => void;
}
export default function Calculator({ opened, closeCalculator }: Props) {
  return (
    <Wrapper $opened={opened}>
      <Form>
        <Close src={close} onClick={closeCalculator} />
        <FormTitle>Calculator</FormTitle>
        <FlexWrapper>
          <div>
            <Label>Width</Label>
            <Input placeholder="0 cm" />
          </div>
          <div>
            <Label>Length</Label>
            <Input placeholder="0 cm" />
          </div>
        </FlexWrapper>
        <FlexWrapper style={{ marginTop: "16px" }}>
          <div>
            <Label>Height</Label>
            <Input placeholder="0 cm" />
          </div>
          <div>
            <Label>Weight</Label>
            <Input placeholder="0 kg" />
          </div>
        </FlexWrapper>
        <Submit>Calculate</Submit>
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
