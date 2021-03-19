import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import base from './styles/base';

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <View style={base.centered}>
      <Title>Profile</Title>
    </View>
  );
};

export default Profile;
