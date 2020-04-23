import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function Dashboard() {
  const { signed, signOut } = useContext(AuthContext);


  function handleSignout(){
    signOut();
  }


  return (
    <View style={styles.container}>
      <Button onPress={handleSignout} title='Sign out' />
    </View>
  );
}
