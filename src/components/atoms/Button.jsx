import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const ButtonWrapper = styled.button`
  display: block;
  /* width: ${(props) => props.width}; */
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.75rem 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  opacity: 0.95;
  margin: 0 0.2rem;

  &:hover {
    opacity: 1;
  }
`;

/* eslint no-unused-vars : "off" */
const Button = ({ bg, color, children, classes, onClick, width }) => (
  <ButtonWrapper
    color={color}
    width={width}
    bg={bg}
    type="button"
    onClick={onClick}
    className={classes}
  >
    {children}
  </ButtonWrapper>
);

Button.defaultProps = {
  classes: '',
  onClick: () => {},
  bg: '',
  color: '',
  // width: '100%',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
};

export default Button;
