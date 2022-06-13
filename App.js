import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import Home from './src/screens/BoatModuleScreens/Home';
// import AboutPort from './src/screens/AboutPort';

const App = () => {
  return <RootNavigation />;
  // return <Home />;
};

export default App;

const styles = StyleSheet.create({});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import RootNavigation from './src/navigation/RootNavigation';

// const App = () => {
//   return <RootNavigation />;
// };

// export default App;

// const styles = StyleSheet.create({});
