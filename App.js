import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {Navigator} from './src/Navigation';
import {StatusBar, View} from './src/Components/Base';
import createStore from './src/Store';
import theme from './src/Theme';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <View>
        <StatusBar />
        <Navigator />
      </View>
    </ThemeProvider>
  </Provider>
);

console.ignoredYellowBox = ['Warning: componentWill'];

export default App;
