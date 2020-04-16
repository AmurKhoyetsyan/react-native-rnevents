import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

import FontAwesome, { SolidIcons, BrandIcons } from "react-native-fontawesome";

import Button from "./src/Button";
import Styles from "./src/Style";

import RNEvants from "react-native-rnevents";

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={Styles.p1}>
                        <Button
                            icon={<FontAwesome style={{color: '#000000', fontSize: 22}} icon={SolidIcons.mobileAlt} />}
                            title={"+ZZZ YY XX XX XX"}
                            onPress={()=>RNEvants.Call({number: "+ZZZYYXXXXXX"})}
                        />
                    </View>
                    <View style={Styles.p1}>
                        <Button
                            icon={<FontAwesome style={{color: '#7c529e', fontSize: 22}} icon={BrandIcons.viber} />}
                            title={"+ZZZ YY XX XX XX"}
                            onPress={()=>RNEvants.Call({number: "+ZZZYYXXXXXX", app: "viber"})}
                        />
                    </View>
                    <View style={Styles.p1}>
                        <Button
                            icon={<FontAwesome style={{color: '#22c842', fontSize: 22}} icon={BrandIcons.whatsapp} />}
                            title={"+ZZZ YY XX XX XX"}
                            onPress={()=>RNEvants.Call({number: "+ZZZYYXXXXXX", app: "whatsapp"})}
                        />
                    </View>
                    <View style={Styles.p1}>
                        <Button
                            icon={<FontAwesome style={{color: '#2497d2', fontSize: 22}} icon={BrandIcons.telegram} />}
                            title={"@user_name"}
                            onPress={()=>RNEvants.Call({number: "user_name", app: "telegramm"})}
                        />
                    </View>
                    <View style={Styles.p1}>
                        <Button
                            icon={<FontAwesome style={{color: '#000000', fontSize: 22}} icon={BrandIcons.github} />}
                            title={"github"}
                            onPress={()=>RNEvants.Web("https://github.com/AmurKhoyetsyan")}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default App;
