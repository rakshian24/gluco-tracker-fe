import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  padding-top: 1rem;
  width: 100%;

  @media screen and (min-width: 501px){
    width: 40rem;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.primaryColor};

  @media screen and (min-width: 501px){
    font-size: 2.75rem;
  }
`;

export const FormFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  .form-button-right{
    margin-left: 2.5rem;
  }

  @media screen and (min-width: 501px){
    margin-top: 3.25rem;
    justify-content: flex-end;
  }
`;