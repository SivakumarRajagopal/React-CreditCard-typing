// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
`

export const TopContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const CreditHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  border-bottom: 2px solid #ffd773;
  margin-bottom: 30px;
`

export const CreditImgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 10px;
  height: 280px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  line-height: 2.5;
  padding-left: 50px;
`

export const CardNoDesc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0px;
  align-self: flex-start;
`

export const CardPlaceHolder = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
  align-self: flex-start;
  margin: 0px;
`

export const OwnerName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0px;
  align-self: flex-start;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const BottomContentContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const PaymentHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #344e7a;
`

export const InputElement = styled.input`
  background-color: #ffffff;
  border: 1px solid #c3cad9;
  color: #475569;
  padding: 5px 10px;
  width: 300px;
  height: 40px;
  margin: 10px;
`
