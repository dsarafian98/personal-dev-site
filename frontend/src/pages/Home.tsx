import React, {PropsWithChildren, useContext} from 'react';
import {SafeAreaView, Text, View, useColorScheme} from 'react-native';
import {Context} from '../Context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useContext(Context);

  return (
    <Context.Consumer>
      {context => (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{context.getName()}</Text>
        </View>
      )}
    </Context.Consumer>
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
