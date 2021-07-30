import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Logo from './../../assets/Vanamo_Logo.png';
import { Link } from 'react-router-dom';
// components
// atoms
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Button from '../atoms/Button';

const HeaderWrapper = styled.section`
  background-color: #0d1137;
  height: 10vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
`;

const HeaderComp = ({ text }) => {
  return (
    <HeaderWrapper>
      <Header>
        <Link to="/">
          <LogoWrapper>
            <Image url={Logo} width={'50px'} height={'auto'} />
          </LogoWrapper>
        </Link>

        <ButtonWrapper>
          <Link to="sign-up">
            <Button bg={'#e52165'} color="#fff">
              Sign Up
            </Button>
          </Link>
          <Link to="sign-in">
            <Button bg={'#e52165'} color="#fff">
              Sign In
            </Button>
          </Link>
        </ButtonWrapper>
      </Header>
    </HeaderWrapper>
  );
};

HeaderComp.defaultProps = {
  text: '',
};

HeaderComp.propTypes = {
  text: PropTypes.string,
};

export default HeaderComp;
