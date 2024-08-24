import React, {PropsWithChildren, useContext, useState} from 'react';
import {Image, SafeAreaView, Text, View, useColorScheme} from 'react-native';
import {Context} from '../Context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Avatar, Icon} from 'react-native-elements';

function Profile(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useContext(Context);
  const [profilePic, setProfilePic] = useState();

  const getProfilePic = () => {
    return <Icon name="account-circle" type="material-icons"></Icon>;
  };

  return (
    <Context.Consumer>
      {context => (
        <View style={{flex: 1}}>
          {getProfilePic()}
          {/* <Icon name="account-circle" type="material-icons"></Icon> */}
        </View>
      )}
    </Context.Consumer>
  );
}

export default Profile;
