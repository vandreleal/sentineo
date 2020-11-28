import { Button } from "@geist-ui/react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-left: 8px;
  padding: 0 !important;
  width: 2.5rem !important;
  min-width: auto !important;
  border-radius: 50% !important;
  border-width: 2px !important;
`;

function ButtonRound(props: any) {
  return <StyledButton {...props}></StyledButton>;
}

export default ButtonRound;
