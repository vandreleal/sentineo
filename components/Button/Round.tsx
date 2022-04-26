import { FC, HTMLAttributes, ReactNode } from 'react'

import { Button } from '@geist-ui/react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  padding: 0 !important;
  width: 2.5rem !important;
  min-width: auto !important;
  border-radius: 50% !important;
  border-width: 2px !important;
`

interface Props {
  icon: ReactNode
}

type NativeAttrs = Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>
type ButtonRoundProps = Props & NativeAttrs

const ButtonRound = ({ icon, ...props }: ButtonRoundProps) => {
  return <StyledButton icon={icon} {...props} />
}

export default ButtonRound
