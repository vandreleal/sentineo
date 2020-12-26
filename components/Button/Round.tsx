import { Button } from "@geist-ui/react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  padding: 0 !important;
  height: 2rem !important;
  width: 2rem !important;
  min-width: auto !important;
  border-radius: 50% !important;
  border-width: 2px !important;
`;

interface Props {
  icon: JSX.Element;
}

const defaultProps = {
  icon: null,
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type ButtonRoundProps = Props & typeof defaultProps & NativeAttrs;

const ButtonRound: React.FC<React.PropsWithChildren<ButtonRoundProps>> = ({
  icon,
  ...props
}) => {
  return <StyledButton icon={icon} {...props}></StyledButton>;
};

export default ButtonRound;
