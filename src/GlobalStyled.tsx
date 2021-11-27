import styledComponents from "styled-components";
import { styled } from '@mui/material/styles';
import {BoxInterface} from "./interfaces/globalStyled";
import ButtonMui from '@mui/material/Button';

const Box = styledComponents.div<BoxInterface>`
  display: flex;
  width: ${props => props.width};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
`
const Button = styled(ButtonMui)({
  margin: '6px',
  padding: '6px'
})
export { Box, Button }