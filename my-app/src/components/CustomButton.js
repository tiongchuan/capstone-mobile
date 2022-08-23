import React from "react";
import { Text, TextInput, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get( 'window' );

export const CustomButton = ( { onPress, text } ) => {
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
        height: height * 0.06,
        width: width * 0.35,
        backgroundColor: '#9D2427',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.02,
    },
    btnText: {
        color: 'white',
    }  
});