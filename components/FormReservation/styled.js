import styled from 'styled-components'

export const FormStyled = styled.form`
  min-width: 300px;
  max-width: 500px;
  width: min-content;
  height: 100%;
  font-family: 'Helvetica Neue';

  @media screen and (min-width: 425px) {
    width: 400px;
  }
`

export const FormContainerStyled = styled.div`
  height: 100%;
  padding: 15px;
  width: 100%;
  & > label {
    font-size: 0.9rem;
  }
`

export const InputTextStyled = styled.input`
  background-color: #1a5187;
  color: white;
  border: none;
  border-radius: 3px;
  min-width: 280px;
  height: 40px;
  width: 100%;
  padding: 5px 10px;
  width: 100%;
  margin: 10px 0;
  font-size: 0.9rem;
  font-family: 'Helvetica Neue';
  font-weight: 500;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #c9c9c9;
    opacity: 1; /* Firefox */
    font-family: 'Helvetica Neue';
    font-weight: 500;
  }
  &:focus {
    border: none;
    box-shadow: 1px 1px 5px ${({ theme }) => theme.shadows.primary};
    outline: none;
  }
  &:-internal-autofill-selected {
    background-color: #1a5187;
    color: white;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px #1a5187 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const FieldRadioStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  height: min-content;
  & label {
    font-family: 'Helvetica Neue';
    font-weight: normal;
  }
`

export const InputRadioStyled = styled.input`
  margin-right: 10px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  &:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
  &:checked:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #ffc107;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
  &:focus {
    outline: none;
  }
  &:focus:after,
  &:hover:after {
    box-shadow: 1px 1px 5px ${({ theme }) => theme.shadows.primary};
  }
`
export const ErrorMsgStyled = styled.small`
  color: red;
  margin: 5px 0;
`

export const CustomSelect = styled.div`
  height: 100%;
  max-width: 300px;
  & select {
    width: 100%;
  }
`

export const ChipErrorStyled = {
  Container: styled.div`
    width: 125px;
    height: min-content;
    margin: 10px 0;
    padding: 5px;
    background-color: transparent;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f44336;
    font-family: 'Helvetica Neue';
    font-weight: normal;
  `,

  Title: styled.span`
    color: #f44336;
    font-size: 0.8rem
  `
}