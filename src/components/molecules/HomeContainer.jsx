import React from 'react';
import PropTypes from 'prop-types';

// components
// atoms
import Text from '../atoms/Text';

const HomeContainer = () => (
  <>
    <Text
      tag="h1"
      color="#000"
      size="text2"
      margin="100px"
      text="Welcome"
      align="center"
    />
  </>
);

HomeContainer.defaultProps = {};

HomeContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default HomeContainer;
