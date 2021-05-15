import React from 'react';
import pt from 'prop-types';

import {Text, View} from './Base';


const Container = View.extend`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${props => props.theme.header.backgroundColor};
  maxHeight: ${props => props.theme.header.height};
`;

const Title = Text.extend`
  fontSize: ${props => props.theme.header.title.fontSize};
  margin: 4px;
`;


const Header = props => (
  <Container>
    <Title>{props.title}</Title>
  </Container>
);
Header.propTypes = {
  title: pt.string.isRequired,
};

export default Header;
