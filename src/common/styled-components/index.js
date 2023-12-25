import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BUTTON_TYPE } from '../../constants';

const { PRIMARY, SECONDARY ,TERTIARY } = BUTTON_TYPE;

export const FormHeading = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 1024px){
    font-size: 3rem;
    margin-bottom: 4rem;
    text-align: center;
  }
`;

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryColor};
  
  .form-input-container{
    @media screen and (min-width: 501px) and (max-width: 1023px){
      min-width: 48.5%;
    }
  }

  input{
    padding: 1.5rem;
    border: ${({ theme }) => `1px solid ${theme.textBoxBorderColor}`};
    border-radius: 1rem;
    font-size: 1.65rem;

    @media screen and (min-width: 501px){
      font-size: 1.8rem;
    }
    
    &::placeholder {
      color: ${({ theme }) => theme.placeholderColor};
      opacity: 0.5;
      font-size: 1.65rem;
      @media screen and (min-width: 501px){
        font-size: 1.8rem;
      }
    } 
    &:focus {
      outline: none !important;
      border: ${({ theme }) => `1.5px solid ${theme.textBoxBorderColor}`};
      box-shadow: ${({ theme }) => `${theme.textBoxBorderColor} 0px 0px 0px 0.5px`};
    }

    &[type="checkbox"]{
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      border: none;
      outline: none;
      filter: hue-rotate(310deg)
    }
  }
  
  label{
    color: ${({ theme }) => theme.secondaryColor};
    font-size: 1.65rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media screen and (min-width: 501px){
      font-size: 1.8rem;
    }
  }
`;

export const CheckboxLabel = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.65rem;
  }
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.errorTextColor};
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const FormFooterTextContainer = styled.div`
  font-size: 1.65rem;
  color: ${({ theme }) => theme.secondaryGrey};
  margin-bottom: 2rem;

  @media screen and (min-width: 501px){
    font-size: 1.8rem;
  }
`;

export const FormButton = styled.button`
  background: ${({ theme, priority }) => {
    switch (priority) {
      case PRIMARY:
        return theme.primaryBtnColor;
      case SECONDARY:
        return theme.secondaryBtnColor;
      default:
        return theme.primaryBtnColor;
    }
  }};
  border: none;
  letter-spacing: 0.1rem;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
  border-radius: 10rem;
  color: ${({ theme, priority }) => {
    switch (priority) {
      case PRIMARY:
        return theme.primaryBtnTextColor;
      case SECONDARY:
        return theme.secondaryBtnTextColor;
      default:
        return theme.primaryBtnTextColor;
    }
  }};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 1s ease;
  font-size: 1.5rem;

  @media screen and (min-width: 1024px){
    padding: 1.5rem 3rem;
    font-size: 1.8rem;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover{
    background: ${({ theme, priority }) => {
    switch (priority) {
      case PRIMARY:
        return theme.primaryBtnHoverColor;
      case SECONDARY:
        return theme.secondaryBtnHoverColor;
      default:
        return theme.primaryBtnHoverColor;
    }
  }};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 500;

  &:hover{
    text-decoration: underline;
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    margin-top: 7rem;
    font-size: 1.5rem;

    @media screen and (min-width: 501px){
      margin-top: 6rem;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: ${({ theme, buttontype }) => {
    switch (buttontype) {
      case PRIMARY:
        return theme.primaryBtnColor;
      case TERTIARY:
        return 'none';
      default:
        return theme.primaryBtnColor;
    }
  }};
  color: ${({ theme, buttontype }) => {
    switch (buttontype) {
      case PRIMARY:
        return theme.primaryBtnTextColor;
      case TERTIARY:
        return theme.primaryColor;
      default:
        return theme.primaryBtnTextColor
    }
  }};
  font-weight: 700;
  border-radius: 7px;
  box-shadow: 
  box-shadow: ${({buttontype }) => {
    switch (buttontype) {
      case PRIMARY:
        return 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;';
      case TERTIARY:
        return 'none';
      default:
        return 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'
    }
  }};
  padding: 3px 11px;
  font-size: 16px;

  &:hover{
    background: ${({ theme, buttontype }) => {
    switch (buttontype) {
      case PRIMARY:
        return theme.primaryBtnHoverColor;
      case TERTIARY:
        return theme.lightGrey;
      default:
        return theme.primaryBtnHoverColor;
    }
  }};
  }

  @media screen and (min-width: 501px) and (max-width: 1024px){
    font-size: 20px;
  }

  @media screen and (min-width: 1025px){
    padding: 1rem 2rem;
    font-size: 20px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primaryColor};
  
  @media screen and (min-width: 501px) and (max-width: 1023px){
    font-size: 3rem;
  }

  @media screen and (min-width: 1024px){
    font-size: 2.75rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 1.5rem;
  border-radius: 1rem;
  border: ${({ theme }) => `1px solid ${theme.textBoxBorderColor}`};
  font-size: 1.65rem;
  font-family: inherit;
  resize: none;

  &:focus {
    outline: none;
    border: ${({ theme }) => `1.5px solid ${theme.textBoxBorderColor}`};
    box-shadow: ${({ theme }) => `${theme.textBoxBorderColor} 0px 0px 0px 0.5px`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
    opacity: 0.5;
    font-size: 1.65rem;
  } 
`;

export const FormFirstRowContainer = styled.div`
  @media screen and (min-width: 501px) {
    display: flex;
    align-item: center;
    justify-content: space-between;
  }
`;