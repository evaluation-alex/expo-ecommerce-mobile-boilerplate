import React from 'react';
import {Text} from 'react-native';
import pt from 'prop-types';


const CategoryItem = ({item}) => (
  <Text key={item.id}>
    {item.title}
  </Text>
);
CategoryItem.propTypes = {
  item: pt.object.isRequired,
};


export default CategoryItem;
