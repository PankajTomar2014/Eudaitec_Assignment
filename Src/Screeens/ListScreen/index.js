import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { ListCard } from '../../Components/Cards';
import { ListHeader } from '../../Components/Headers';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import { checkInternet } from '../../Utils/CommanFunctions';
import { listApiAction } from '../../Redux/FetchListAction';
import styles from './styles';

const ListScreen = (props) => {
  console.log("props===>", props);
  const listData = props.listData.list;
  const isLoading = props.listData.isLoading;
  const [error, setError] = useState('');

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const isInternetAvailable = await checkInternet();
    if (isInternetAvailable) {
      if (props.listData.error == '' && props.listData.list.length == 0) {
        props.listApiAction();
      } else if (props.listData.error != '' && props.listData.list.length == 0) {
        setError(props.listData.error);
      }
      else {
        setError(props.listData.error);
      }

    } else {
      setError('Please Check Internet Connection.');
    }
  }


  const onPressItem =(item)=>{
    messaging()
    .getInitialNotification()
    .then(async(remoteMessage) => {
      // Notification caused app to open from quit state:
     console.log('from_quit_state:===>',remoteMessage);
     PushNotification.localNotification({
      channelId: 'channel',
      message: "message", // (required)
      title: "title",
      message: "message", // (required) 
    actions: ["Yes", "No"]
    });
    //  handleNotificationFromPannel(remoteMessage);  
    });
  }

  const renderList = (item, index) => {
    return (
      <ListCard
        onPress={()=> onPressItem(item)}
        title={item.title}
        decription={item.opening_crawl}
        positionType={item.director}
        date={item.release_date}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ListHeader />

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => props.listApiAction()}
          />
        }
        ListHeaderComponent={() => error ? <ErrorMessage message={error} /> : null}
        data={listData}
        renderItem={({ item, index }) => renderList(item, index)}
      />


    </SafeAreaView>
  )

};

export default connect(({ listData }) => ({ listData }), { listApiAction })(ListScreen);