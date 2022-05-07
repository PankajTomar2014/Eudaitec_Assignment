
import React from 'react';
import { Image, View, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommanStyle from '../Utils/CommanStyle';
import { backIcon } from '../Utils/Icons';

export const ListHeader = (props) => {
    const navigation = useNavigation();
    return (
        <View style={CommanStyle.headerContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <Image
                    style={CommanStyle.imageStyle}
                    source={backIcon}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        </View>
    )
}