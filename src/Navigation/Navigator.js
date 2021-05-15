import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import pt from 'prop-types';

import Images from '../Theme/Images';
import MainScreen from '../Screens/MainScreen';
import PreloadScreen from '../Screens/PreloadScreen';
import {i18n} from '../Utilities/Localization';


const MenuNavigator = createStackNavigator({
  CategoryList: {
    screen: MainScreen,
    navigationOptions: {
      title: i18n.t('main.menuTitle'),
    },
  },
  ProductList: MainScreen,
}, {
  initialRouteName: 'CategoryList',
  mode: 'card',
  headerMode: 'float',
});


const MainNavigator = createBottomTabNavigator({
  Menu: MenuNavigator,
  Basket: MainScreen,
}, {
  navigationOptions: ({navigation}) => {
    const MainTabBarIcon = (props) => {
      const {routeName} = navigation.state;
      const IconComponent = Images.Main.TabBar[`${routeName}Icon`];
      return <IconComponent size={25} color={props.tintColor} />;
    };
    MainTabBarIcon.propTypes = {
      tintColor: pt.string.isRequired,
    };
    return {
      tabBarIcon: MainTabBarIcon,
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      },
    };
  },
});

const PreloadNavigator = createStackNavigator({
  Preload: {screen: PreloadScreen},
  Main: {screen: MainNavigator},
}, {
  headerMode: 'none',
  initialRouteName: 'Preload',
  mode: 'modal',
});


export default PreloadNavigator;
