// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeBtnValueInput, buttonDetails, onChangeDirection} = props
  const {value, displayText, directionId} = buttonDetails
  const backgroundColor =
    activeBtnValueInput === value ? '#ededed' : '#ffffff79'

  const opacityValue = activeBtnValueInput === value ? 1 : 0.5
  const onClickButton = () => {
    onChangeDirection(value)
  }
  return (
    <li key={directionId}>
      <CustomButton
        backgroundColor={backgroundColor}
        onClick={onClickButton}
        opacityValue={opacityValue}
      >
        {displayText}
      </CustomButton>
    </li>
  )
}
export default GradientDirectionItem
