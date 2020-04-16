import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Styles from "./Style";

const Button = props => (
    <TouchableOpacity
        activeOpacity={.8}
        onPress={()=> props.onPress()}
        style={[Styles.dFlex, Styles.noWrap, Styles.flexRow]}
    >
        <View style={Styles.p1}>{props.icon}</View>
        <View style={Styles.p1}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
);

export default Button;