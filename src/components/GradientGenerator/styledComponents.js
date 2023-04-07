// Style your elements here
import styled from 'styled-components'

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`
export const CustomHeading = styled.h1`
  color: #ffffff;
`

export const CustomP = styled.p`
  color: #ededed;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
`

export const InputsContainer = styled.div`
  display: flex;
`

export const ColorInput = styled.input`
  opacity: 1;
  cursor: pointer;
`
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
  background-color: #00c9b7;
`
