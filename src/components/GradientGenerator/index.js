import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  TotalContainer,
  CustomHeading,
  CustomP,
  ListContainer,
  ColorInput,
  InputsContainer,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeBtnValue: 'top',
    activeBtnValueInput: 'top',
    color1Input: '#8ae323',
    color2Input: '#014f7b',
  }

  onChangeDirection = value => {
    this.setState({activeBtnValueInput: value})
  }

  onChangeColor1 = event => {
    this.setState({color1Input: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2Input: event.target.value})
  }

  onClickGenerate = () => {
    const {activeBtnValueInput, color1Input, color2Input} = this.state
    this.setState({
      activeBtnValue: activeBtnValueInput,
      color1: color1Input,
      color2: color2Input,
    })
  }

  render() {
    const {
      color1,
      color2,
      activeBtnValue,
      activeBtnValueInput,
      color1Input,
      color2Input,
    } = this.state
    return (
      <TotalContainer
        direction={activeBtnValue}
        color1={color1}
        color2={color2}
      >
        <CustomHeading>Generate a CSS Color Gradient</CustomHeading>
        <CustomP>Choose Direction</CustomP>
        <ListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              buttonDetails={eachItem}
              activeBtnValueInput={activeBtnValueInput}
              key={eachItem.directionId}
              onChangeDirection={this.onChangeDirection}
            />
          ))}
        </ListContainer>
        <CustomP>Pick the Colors</CustomP>
        <InputsContainer>
          <div>
            <CustomP>{color1Input}</CustomP>
            <ColorInput type="color" onChange={this.onChangeColor1} />
          </div>
          <div>
            <CustomP>{color2Input}</CustomP>
            <ColorInput type="color" onChange={this.onChangeColor2} />
          </div>
        </InputsContainer>
        <CustomButton
          type="button"
          onClick={this.onClickGenerate}
          data-testid="gradientGenerator"
        >
          Generate
        </CustomButton>
      </TotalContainer>
    )
  }
}

export default GradientGenerator
