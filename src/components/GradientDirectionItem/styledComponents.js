// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
  color: #1e293b;
  background-color: ${props => props.backgroundColor};
  opacity: ${props => props.opacityValue};
`
