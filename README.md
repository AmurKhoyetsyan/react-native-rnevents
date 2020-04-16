## react-native-rnevents

### install

    npm i react-native-rnevents

### Documentation

#### for android

    <activity android:name=".MainActivity" android:launchMode="singleTask">
    add android:launchMode="singleTask"

#### Example

    import RNEvents, {
        BackHandler,
        Keyboard,
        Web,
        Call
    } from "react-native-rnevents";
    import { TouchableOpacity } from "react-native";

    ......
    ......
    ......

#### How to open the website in the browser on mobile

    // RNEvents.Web("url");

    <TouchableOpacity onPress={()=> RNEvents.Web("https://github.com/AmurKhoyetsyan")}>
        github
    </TouchableOpacity>

    ......
    ......
    ......

#### How to call by phone

     onPress={()=> RNEvents.Call({number: "+ZZZYYXXXXXX"})}

#### How to make a Viber, a Telegram or a Whatsapp call

    let option = {
        number: "+ZZZYYXXXXXX", // Just for Telegram write the username without @
        app: "viber", // viber or whatsapp or telegramm
        titleOne: "You don't have", // for alert
        titleTwo: "", // for alert
        message: "Dօ you want to download?", // for alert
        cancel: "Cancel", // alert buttons
        ok: "OK" // alert buttons
    };

    // titleOne + app name + titleTwo

    .....
    .....
    .....

    onPress={()=> RNEvents.Call(option)}


#### for hooks

##### Keyboard

    const [visible, dismiss] = RNEvents.Keyboard();

    // dismiss - function
    // visible - true or false

##### BackHandler

    const yourCallback = () => {
        // your code
    }

    RNEvents.BackHandler(yourCallback);