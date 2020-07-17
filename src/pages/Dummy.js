import React from 'react'
import { SafeAreaView, Text, Button } from "react-native";

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

const Dummy = props => {
     const signOut = () => {
        auth().signOut()
        AsyncStorage.removeItem('@USER_ID')
        props.navigation.navigate("Signin")
    }
    return(
        <SafeAreaView>
            <Text>Dummy Page</Text>
            <Button
            title='Signout'
            onPress={signOut}/>
        </SafeAreaView>
    )
}

export {Dummy}