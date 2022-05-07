import React from 'react';
import { FlatList, Text, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const GridView = (props) => {


  const goToListScreen = () => {
    props.navigation.navigate('ListScreen')
  }
  const renderItem = (item, index) => {
    const itemIndex = index;
    return itemIndex == 0 || itemIndex == 1 || itemIndex == 4 || itemIndex == 5 ?
      (<TouchableOpacity
        activeOpacity={0.8}
        onPress={() => goToListScreen()}
        style={styles.twoBoxContainer}>
        <View style={[styles.twoBoxSubContainer, { paddingVertical: itemIndex == 4 || itemIndex == 5 ? 80 : 50, }]}>
          <Text style={styles.twoBoxTextSyle}>{itemIndex == 0 ? "People" : itemIndex == 1 ? "Planet" : itemIndex == 4 ? 'Species' : 'Vechiles'}</Text>
          <Text style={styles.twoBoxTextSyle}>{itemIndex == 0 || itemIndex == 1 ? '2/3' : '1/2'}</Text>
        </View>
      </TouchableOpacity>
      )
      : itemIndex == 3 || itemIndex == 6 ?
        (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => goToListScreen()}
            style={styles.oneBoxContainer}>
            <View style={styles.oneBoxSubContainer}>
              <Text style={styles.oneBoxTextStyle}>{itemIndex == 3 ? "Films" : 'Starship'}</Text>
              <Text style={styles.oneBoxTextStyle}>{'1/1'}</Text>
            </View>
          </TouchableOpacity>
        ) : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.container}>
        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}]}
          numColumns={2}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}

        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default GridView
