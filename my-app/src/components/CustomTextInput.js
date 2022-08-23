import React from "react";
import { Text, TextInput, View, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' );

export const CustomTextInput = ( {value, onChangeText, placeholder} ) => {
    return (
        <View style={ styles.container }>
            <TextInput 
            style={ styles.input } 
            value={ value }
            onChangeText={ onChangeText }
            placeholder={ placeholder } 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 5,
    },
    input: {
        justifyContent: 'center',
        textAlign: 'center',
        height: height * 0.06,
        width: width * 0.75,
        maxWidth: 300,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        borderColor: 'rgba(219, 219, 219, 0.2)',
    },
});