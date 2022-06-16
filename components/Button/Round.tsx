import { FC, ReactNode } from 'react'

import { Button, ButtonProps } from '@geist-ui/core'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  padding: 0 !important;
  width: 2.5rem !important;
  min-width: auto !important;
  border-radius: 50% !important;
  border-width: 2px !important;
`

interface ButtonRoundProps extends ButtonProps {
  icon: ReactNode
}

const ButtonRound: FC<ButtonRoundProps> = ({ icon, ...props }) => {
  return <StyledButton icon={icon} {...props} />
}

export default ButtonRound
