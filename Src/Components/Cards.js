
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CommanStyle from '../Utils/CommanStyle';
import Colors from '../Utils/Colors';


export const ListCard = (props) => {
    const { decription,onPress, title, positionType, date } = props;
    return (
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.8}
        style={CommanStyle.cardContainer}>
            <Text style={CommanStyle.titleStyle}>{title}</Text>
            <View style={CommanStyle.decriptStyle}>
                <Text style={CommanStyle.titleStyle}>{decription}</Text>
            </View>
            <View style={CommanStyle.bottomTextStyle}>
                <Text style={CommanStyle.titleStyle}>{positionType}</Text>
                <Text style={CommanStyle.titleStyle}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
};

export const ErrorMessage = (props) => {
    const { message } = props;
    return (
        <Text style={CommanStyle.errorText}>{message}</Text>
    )
};
