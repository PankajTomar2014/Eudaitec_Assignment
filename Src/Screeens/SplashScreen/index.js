import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './styles';

const SplashScreen = (props) => {

  useEffect(() => {
    gotoHomeScreen();
  }, []);

  const gotoHomeScreen = () => {
    setTimeout(() => {
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'GridView' }],
      });
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.splasText}>
        {'Splash Screen'}
      </Text>
    </SafeAreaView>
  )

};

export default SplashScreen;