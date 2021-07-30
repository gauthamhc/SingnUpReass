import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// atoms
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Card from '../atoms/Card';

const Form = ({ text }) => {
  return (
    <Card>
      <Text>{text}</Text>
    </Card>
  );
};
