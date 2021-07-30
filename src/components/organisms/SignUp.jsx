import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// atoms
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Card from '../atoms/Card';

const SignUp = () => {
  return (
    <Card>
      <Text text="Sign Up" />
      <InputField type="text" placeholder="Full Name" autoComplete="false" />
      <InputField type="email" placeholder="E-mail" autoComplete="false" />
      <InputField type="password" placeholder="Password" autoComplete="false" />
      <InputField
        type="password"
        placeholder="Reenter Password"
        autoComplete="false"
      />
      <Button color="#ffffff" bg="#1877f2">
        Sign Up
      </Button>
    </Card>
  );
};

export default SignUp;
