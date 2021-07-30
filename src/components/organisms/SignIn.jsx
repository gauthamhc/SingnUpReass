import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// atoms
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Card from '../atoms/Card';

const SignIn = () => {
  return (
    <Card>
      <Text text="Sign In" />
      <InputField type="email" placeholder="E-mail" autoComplete="false" />
      <InputField type="password" placeholder="Password" autoComplete="false" />
      <Text>Forgot Password</Text>
      <Button color="#ffffff" bg="#1877f2">
        Sign In
      </Button>
    </Card>
  );
};

export default SignIn;
