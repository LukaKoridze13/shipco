import { styled } from "styled-components";
import eye from "../assets/eye.svg";
import eyehidden from "../assets/eyehidden.svg";
import checkImg from "../assets/check.svg";
import checkedImg from "../assets/checked.svg";
import { ChangeEventHandler, useState } from "react";
import BlackButton from "../components/BlackButton";
import Displays from "../Displays";

export const Form = styled.form`
  width: 96%;
  max-width: 510px;

  border-radius: 32px;
  background: #f9f9f9;

  padding: 32px 40px;
  padding-top: 64px;

  position: relative;

  @media (max-width: ${Displays.mobile}) {
    padding: 16px 24px;
    padding-top: 36px;
  }
`;

export const Close = styled.img`
  position: absolute;
  top: 32px;
  right: 40px;

  @media (max-width: ${Displays.mobile}) {
    top: 16px;
    right: 16px;
  }

  cursor: pointer;
`;

export const FormTitle = styled.p`
  color: #000;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  @media (max-width: ${Displays.mobile}) {
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  color: #070707;
  font-size: 18px;
  font-weight: 400;
  margin-top: 24px;
  display: block;
  &:first-child {
    margin-top: 0px;
  }
`;

export const Input = styled.input<{ $width?: string }>`
  width: ${(props) => props.$width || "100%"};
  padding: 16px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
  background: #e7e7e7;
  margin-top: 4px;
  color: #3f3f3f;

  &::placeholder {
    color: #b7bcbc;
  }
`;

interface PasswordInputProps {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const PasswordInput = ({ placeholder, onChange }: PasswordInputProps) => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    hidden ? setHidden(false) : setHidden(true);
  };
  return (
    <PasswordWrapper>
      <Input onChange={onChange} placeholder={placeholder} type={hidden ? "password" : "text"} />
      <Eye src={hidden ? eye : eyehidden} alt="eye" onClick={handleClick} />
    </PasswordWrapper>
  );
};

const PasswordWrapper = styled.div`
  position: relative;
`;

const Eye = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;
`;

export const Checkbox = ({ text }: { text: string }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <Check onClick={handleClick}>
      <CheckImage src={checked ? checkedImg : checkImg} />
      <CheckText>{text}</CheckText>
    </Check>
  );
};

export const CheckboxOne = ({ text, current, value, onClick }: { text: string; current: string; value: string; onClick: (param: string) => void }) => {
  return (
    <Check
      onClick={() => {
        onClick(value);
      }}
    >
      <CheckImage src={value === current ? checkedImg : checkImg} />
      <CheckText>{text}</CheckText>
    </Check>
  );
};
const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 16px;
`;

const CheckText = styled.p`
  color: #5f6767;
  font-size: 16px;
  font-weight: 400;
`;

const CheckImage = styled.img`
  width: 20px;
`;

export const Submit = styled(BlackButton)`
  margin-top: 36px;
  width: 100%;
`;
