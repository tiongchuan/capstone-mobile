import React from "react";
import { Text, TextInput, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get( 'window' );

export const CustomFlatButton = ( { onPress, text } ) => {
    return (
        <View style={ styles.container }>
            <TouchableOpacity 
                style = { styles.btn }
                onPress = { onPress }>
                <Text style = { styles.btnText }>{ text }</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 5,
    },
    btn: {
        padding: 0,
    },
    btnText: {
        color: 'gray',
        fontSize: 12,
      }, 
});