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

function ProfilePic(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useContext(Context);
  const [profilePic, setProfilePic] = useState();

  const getProfilePic = () => {
    const defaultPic = (
      <Icon
        name="account-circle"
        type="material-icons"
        onPress={() => openProfileOptions()}
        size={200}></Icon>
    );

    if (context.getProfilePicSrc() === undefined) {
      return defaultPic;
    } else {
      return defaultPic;
    }
  };

  const openProfileOptions = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['View Icon', 'Change Icon', 'Cancel'],
        cancelButtonIndex: 2,
      },
      buttonIndex => {
        if (buttonIndex == 0) {
          viewIcon();
        } else if (buttonIndex == 1) {
          changeIcon();
        }
      },
    );
  };

  const viewIcon = () => {
    return (
      <View>
        <Modal>
          <Image></Image>
        </Modal>
      </View>
    );
  };

  const changeIcon = () => {};

  return (
    <Context.Consumer>
      {context => <View style={{flex: 1}}>{getProfilePic()}</View>}
    </Context.Consumer>
  );
}

export default ProfilePic;
