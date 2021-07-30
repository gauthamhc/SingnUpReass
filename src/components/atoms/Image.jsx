import * as React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const ImageCover = styled.div`
  width: 100%;
`;

const Img = styled.img`
  display: block;
  vertical-align: ${(props) => props.align};
  margin: ${(props) => props.margin};

  ${(props) =>
    props.cover &&
    `
      object-fit: cover;
      object-position: ${props.position || 'center'};
      height: 100%;
    `}
`;

const Image = ({ cover, url, position, align, margin, width, height }) => (
  <ImageCover>
    <Img
      src={url}
      cover={cover}
      position={position}
      align={align}
      margin={margin}
      width={width}
      height={height}
    />
  </ImageCover>
);

Image.defaultProps = {
  cover: '',
  url: '#',
  position: '',
  align: '',
  margin: '',
  width: '',
  height: '',
};

Image.propTypes = {
  cover: PropTypes.string,
  url: PropTypes.string,
  position: PropTypes.string,
  align: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Image;
