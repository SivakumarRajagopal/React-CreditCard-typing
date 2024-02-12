// Write your code here
import {useState} from 'react'

import {
  CreditImgContainer,
  CardNoDesc,
  CreditHeading,
  TopContainer,
  AppContainer,
  CardPlaceHolder,
  OwnerName,
  BottomContentContainer,
  PaymentHeading,
  BottomContainer,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, setCardNo] = useState('')
  const [name, setName] = useState('')
  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeCardNo = event => {
    setCardNo(event.target.value)
  }
  return (
    <AppContainer>
      <TopContainer>
        <CreditHeading>Credit Card</CreditHeading>
        <CreditImgContainer data-testid="creditCard">
          <CardNoDesc>{cardNo}</CardNoDesc>
          <CardPlaceHolder>CARDHOLDER NAME</CardPlaceHolder>
          <OwnerName>{name}</OwnerName>
        </CreditImgContainer>
      </TopContainer>
      <BottomContainer>
        <BottomContentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputElement
            type="text"
            placeholder="Card Number"
            value={cardNo}
            onChange={onChangeCardNo}
          />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </BottomContentContainer>
      </BottomContainer>
    </AppContainer>
  )
}
export default CreditCard
