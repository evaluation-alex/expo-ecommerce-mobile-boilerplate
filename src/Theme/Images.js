/* eslint-disable global-require */

import React from 'react';
import Icons from '@expo/vector-icons';
import styled from 'styled-components';

import {Image} from '../Components/Base';


function image(sourceFn, defaultProps = {}) {
  const component = props => <Image {...defaultProps} {...props} source={sourceFn()} />;
  return styled(component)``;
}

function icon(path, defaultProps = {}) {
  let [set, name] = path.split('.');
  if (!name) {
    name = set;
    set = 'Entypo';
  }
  const IconComponent = Icons[set];
  let component = props => <IconComponent {...defaultProps} {...props} name={name} />;
  component = styled(component)``;
  return component;
}

const images = {
  Preload: {
    CenterLogo: image(() => require('../../res/images/Preload/CenterLogo.png')),
  },
  Main: {
    TabBar: {
      MenuIcon: icon('shop'),
      BasketIcon: icon('shopping-basket'),
    },
  },
};

export default images;
