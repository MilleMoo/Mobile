import React, { useState } from "react";
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Alert
} from "react-native";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

const RegisForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    const [Cpassword, setCPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: '',
    })

    const navigation = useNavigation();

    const validateField = (field, value) => {
        let error = ''
        if (!value) {
            error = 'this field is required'
        } else {
            if (field == "email" && !/\S+@\S+\.|S+/.test(value)) {
                error = 'Invalid email address'
            } else if (field == 'password' && value.length < 6) {
                error = 'Password must be 6 characters'
            }
        }
        setErrors((preErrors) => ({...preErrors, [field]: error}))
        return error
    }
    
    const handleCheck = (field, value) => {
        switch (field) {
            case "username":
                setUsername(value)
                setErrors((preErrors) => ({ ...preErrors, username: "" }))
                break;
            case "email":
                setEmail(value);
                setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                break;
            case "password":
                setPassword(value);
                setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
                break;
            case "Cpassword":
                setCPassword(value);
                setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
                break;
            default:
                break
        }
    }
    const validatePasswordMatch = () => {
        if (password !== Cpassword) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
            return 'Passwords do not match';
        }
        return '';
    };

    
    const checkAll = () => {
        const usernameCheck = validateField('username', username)
        const emailCheck = validateField('email', email)
        const passwordCheck = validateField('password', password)
        const confirmPasswordCheck = validatePasswordMatch();
        if (!usernameCheck && !emailCheck && !passwordCheck && !confirmPasswordCheck) {
            Alert.alert("Register:", "SUCKSEED!!",
                [{ text: "OK", onPress: () => { navigation.navigate("Msg") } }]);
        }
    }
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>Registration Form</Text>
            <TextInput
                placeholder="Username"
                style={styles.InContent}
                value={username}
                onChangeText={(newValue) => handleCheck("username", newValue)}
            />
            {errors.username ? (<Text style = {styles.error}>{errors.username }</Text>) : null}
            <TextInput
                placeholder="Email"
                style={styles.InContent}
                value={email}
                onChangeText={(newValue) => setEmail(newValue)}
                />
            {errors.email ? (<Text style = {styles.error}>{errors.email }</Text>) : null}
            <TextInput
                placeholder="Password"
                style={styles.InContent}
                secureTextEntry
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
                />
            {errors.password ? (<Text style = {styles.error}>{errors.password }</Text>) : null}
            <TextInput
                placeholder="Confirm Password"
                style={styles.InContent}
                secureTextEntry
                value={Cpassword}
                onChangeText={(newValue) => setCPassword(newValue)}
                />
            {errors.confirmPassword ? (<Text style = {styles.error}>{errors.confirmPassword }</Text>) : null}
            <MyButton title="Register" backgroundColor="darkgreen"
                onPress={checkAll}
            ></MyButton>
            <Text style={{ fontSize: 28 }}>
                1.add confirm password and recheck with password
            </Text>
            <Text style={{ fontSize: 28 }}>
                2.if password and confirm doesn't match, show error
            </Text>
            <Text style={{ fontSize: 28 }}>
                3.if success, redirect to Msg Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    InContent: {
        borderColor: "black", 
        borderWidth: 2,
        borderRadius: 5,
        textAlign: "center",
        marginBottom: 10,
    },
    error: {
        color: "red",
        paddingBottom: 10,
    },
})

export default RegisForm;