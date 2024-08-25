import React, {PropsWithChildren, useContext, useState} from 'react';
import {
  ActionSheetIOS,
  Image,
  Modal,
  SafeAreaView,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Context} from '../Context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Avatar, Icon} from 'react-native-elements';
import ProfilePic from '../components/ProfilePic';

function Profile(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useContext(Context);

  return (
    <Context.Consumer>
      {context => (
        <View style={{flex: 1}}>
          <ProfilePic></ProfilePic>
        </View>
      )}
    </Context.Consumer>
  );
}

export default Profile;
