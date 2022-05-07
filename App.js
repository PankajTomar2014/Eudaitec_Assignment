import React,{useState,useEffect} from 'react';

import {FlatList, Text, SafeAreaView,View, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import RootStack from './Src/Navigation/RootStack';
import store from './Src/Redux/Store';
import { Provider } from 'react-redux';

import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import iid from '@react-native-firebase/iid';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = (props) => { 

  // const  senderID = '820291676536'; rokeit.apps
  const  senderID = '519629426892';
  // const  senderID = '927964019280'; by client

  // const [deviceId , setDeviceId] = useState(DeviceInfo.getDeviceId());
  const [deviceToken , setDeviceToken] = useState(null);

  // eZ6B3rCU70qKlGUwbEzjER:APA91bF6OPgjYORIS72DBjf-KRWmKb6v50_7UWbkQgWCkais5jakD0OXM0WKHpRBu8qZMMRBzoYsrA48VQfgK1KeZQWG6S1RGOgVxzzOdqjXJ_5B433C9TmI9d07xLICIw1n_qfmnUEg

  useEffect(async() => { 
    
   
  requestUserPermission();     
     
    console.log('useEffect==>Called');
    await getDeviceToken();

     var refreshToken = null;
     var that = this;
 
     console.log('deviceToken AAAAAA=====>' + deviceToken);
     if(Platform.OS == 'android'){
     await PushNotification.configure({
       // (optional) Called when Token is generated (iOS and Android)
       popInitialNotification:true,
       onRegister: function (token) {
        
          refreshToken = token.token;        
         console.log('refresh token is line 55==>', JSON.stringify(refreshToken));
         console.log('deviceToken is line 56==> ', deviceToken);  
        //  if(Platform.OS == 'android'){
         if (deviceToken === null) {
         console.log('refresh token is set=LINE:57=>', JSON.stringify(refreshToken));
           AsyncStorage.setItem('PushToken', JSON.stringify(refreshToken));
           AsyncStorage.setItem('isTokenUpdate', JSON.stringify(false));
         } else if (deviceToken !== refreshToken) {
         console.log('refresh token is set=LINE:61=>', JSON.stringify(refreshToken));
           AsyncStorage.setItem('PushToken', JSON.stringify(refreshToken));
           AsyncStorage.setItem('isTokenUpdate', JSON.stringify(false));
           AsyncStorage.setItem(
             'OldPushToken',
             JSON.stringify(deviceToken),
           );
         }
    
         
       },
 
       // (required) Called when a remote or local notification is opened or received
       onNotification:async function (notification) {
         console.log('NOTIFICATION:====>', notification);
         console.log('userInteraction====>' + notification.userInteraction,
         );
 
         var titleText = '';
         var message = '';
         titleText = notification.title;
         message = notification.message;
         
       },
       // Android only
       senderID: senderID,
       // iOS only
       permissions: {
         alert: true,
         badge: true,
         sound: true,
       },
       popInitialNotification: true,
       requestPermissions: true,
     });
         }
 
     /// ios push notification setup
 
     messaging().onNotificationOpenedApp(async(remoteMessage) => {
       console.log(
         'Notification caused app to open from background state:',
         remoteMessage,
       );
     });
 
     // Check whether an initial notification is available
     messaging()
       .getInitialNotification()
       .then(async(remoteMessage) => {
         // Notification caused app to open from quit state:
        console.log('from_quit_state:===>',remoteMessage);

       
       });
 
     messaging().onMessage(async (remoteMessage) => {
       console.log(
         'Notification caused notification to handle from foreground state:',
         remoteMessage,
       );
       const message = `You have an${remoteMessage.data.notification_type}`;
       const description = remoteMessage.data.body;
       console.log('message==>',remoteMessage)
       

       if(Platform.OS === 'android'){
              PushNotification.localNotification({
              title: message, // (optional)
              message: message, // (required)
              playSound: true, // (optional) default: true
              soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
              number: 1, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
              // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
            });
       }else{
              // PushNotificationIOS.addNotificationRequest({
              PushNotificationIOS.presentLocalNotification({
              title: message, // (optional)
              message: message, // (required)
              playSound: true, // (optional) default: true
              soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
              number: 1,
              id: new Date().toString(),
              userInfo: remoteMessage.data,
              applicationIconBadgeNumber: 1,
            });
       }
     });

     return null;

  },[]);




 

  




 const  requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      console.log('User has provisional notification permissions.');
    } else {
      console.log('User has notification permissions disabled');
    }
  };

  const  getDeviceToken = async () => {   
    await AsyncStorage.getItem('PushToken', (err, result) => {
      if (err === null) {
        console.log('getDeviceToken==>', result);
        // var refreshToken = result;
        var refreshToken = JSON.parse(result);
        console.log('getDeviceToken==>', refreshToken);
        if (refreshToken !== undefined || refreshToken !== null) {
          // this.setState({deviceToken: refreshToken});
          setDeviceToken(refreshToken);
        }
      }
    });
  };

 

  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </NavigationContainer>
  );
};
export default App;