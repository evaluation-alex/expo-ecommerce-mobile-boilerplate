import React from 'react';

import {View} from '../Components/Base';
import Header from '../Components/Header';
import CategoryItem from '../Components/CategoryItem';
import CategoryList from '../Components/CategoryList';


const Container = View.extend``;


const data = [{
  title: 'Row 1',
  id: 1,
}, {
  title: 'Row 2',
  id: 2,
}];

const MainScreen = () => (
  <Container>
    <Header title="Меню" />
    <CategoryList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={CategoryItem}
    />
  </Container>
);


export default MainScreen;
