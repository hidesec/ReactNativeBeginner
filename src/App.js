import React from 'react';
import {View, ScrollView} from 'react-native';
import Communication from './Communication';
// import FlexBox from './FlexBox';
// import SampleComponent from './SampleComponent';
// import StylingReactNativeComponent from './StylingReactNative';
// import PositionReactNative from './PositionReactNative';
// import PropsDinamis from './PropsDinamis';
// import StateDinamis from './StateDinamis';


const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        {/* <FlexBox /> */}
        {/* <PositionReactNative /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        <Communication />
      </ScrollView>
    </View>
  )
}

export default App;