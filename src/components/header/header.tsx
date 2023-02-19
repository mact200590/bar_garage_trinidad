import React from 'react'
import styled from 'styled-components';
import LogoGarage from '@/components/svg/logo'
import Menu from '../svg/menu';


 const Header = () => {
  return (
    <Container>
      <ContainerLogoText style={{marginLeft:'23px'}}>
      <ContainerLogo>
        <LogoGarage />
      </ContainerLogo>
        <TextLogo>Bar Garage</TextLogo>
        </ContainerLogoText>
        <div><Menu/></div>
    </Container>
  )
}

const Container=styled.div`
display:flex ;
flex-direction:row;
justify-content:space-between;
margin-right:23px ;
align-items:center ;
`;
const ContainerLogoText=styled.div`
display:flex ;
flex-direction:row;
align-items:center ;
`;
const ContainerLogo=styled.div`
margin-right: 14px;
`;


const TextLogo=styled.label`
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
`;

export default Header