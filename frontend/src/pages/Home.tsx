import React, {PropsWithChildren, useContext} from 'react';
import {SafeAreaView, Text, View, useColorScheme} from 'react-native';
import {Context} from '../context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text>hello world</Text>
      <Text>hiiii </Text>
    </View>
  );
}

// function Home() {
//   //const context = useContext(Context);

//   return (
//     <SafeAreaView>
//       <Text>hello world</Text>
//       {/* <Context.Consumer>
//         <Text> {'hi'} </Text>
//       </Context.Consumer> */}
//     </SafeAreaView>
//   );
// }

export default Home;
