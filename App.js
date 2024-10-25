import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect,useContext} from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { NavigationContainer,  DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Routes/Login.js'
import Feed from './Routes/Feed.js';
import Search from './Routes/Search.js';
import Profile from './Routes/Profile.js';
import CreateRoom from './Routes/CreateRoom.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChatRoom from './Routes/ChatRoom.js';
import { UserContext } from "./Context/CurrentUser";




const Tab = createBottomTabNavigator();
const MainApp = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    // #111213ff
    // background: '#1B1F22',
    background: '#121212',
    card: '#191919',
    text: 'rgb(28, 28, 30)',
    border: 'none',
    notification: 'rgb(255, 69, 58)',
  },
};




function TabNavigator({navigation}) {
  const info = useContext(UserContext)

  const ProfilePage = props =>(
    <Profile {...props} profile={info.id}/>
  )


    return (
      <>
      
        <Tab.Navigator screenOptions={{
          "headerShown":false,
          "tabBarShowLabel": false,
          "tabBarStyle": {
            borderTopWidth: 0,
            // position: 'absolute',
            // bottom: 20,
            // left: 15,
            // right: 15,
            // elevation: 0,
            // backgroundColor: '#121212',
            // borderRadius: 15,
            height: 60,
            // shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 9,
            // },
            // shadowOpacity: 0.50,
            // shadowRadius: 12.35,

            // elevation: 19,
          }
        }}>
          <Tab.Screen name="FeedNavigator" component={Feed} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('./SVG/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </View>
            )
          }} />
          <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('./SVG/loupe.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </View>
            )
          }} />
          <Tab.Screen name="Create Room" component={CreateRoom} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('./SVG/plus.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </View>
            )
          }} />
          <Tab.Screen name="Profile" component={ProfilePage} options={{
            tabBarIcon: ({focused}) => (
              <Pressable style={{alignItems: 'center', justifyContent: 'center'}} onPress={()=>navigation.navigate('Profile', {profile: info.id})}>
                <Image
                source={require('./SVG/user.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </Pressable>
            ),
          }} />
          
        </Tab.Navigator>
      </>
    );
}

const App = () => {
  const [userInfo, setUserInfo] = useState()
  const [username, setUsername] = useState()
  const [id, setID] = useState()
  const [token,setToken] = useState()

  const loginToParent = (data) =>{
    setUserInfo(data[0])
    setUsername(data[1])
    setID(data[2])
  }




  const LoginPage = props =>(
    <Login {...props} loginToParent={loginToParent}/>
  )

  
  
  if(userInfo !== undefined && username !== undefined && id !== undefined && userInfo.idToken !== undefined){ //f we dont have user info return login
    return(
      <NavigationContainer theme={MyTheme}>
        <UserContext.Provider value={{ name: username, email: userInfo.user.email, image: userInfo.user.photoUrl, id: id, token: userInfo.idToken}}>
        <MainApp.Navigator screenOptions={{"headerShown":false}}>
          <MainApp.Screen name="Feed" component={TabNavigator} />
          <MainApp.Screen name="ChatRoom" component={ChatRoom} />
        </MainApp.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}



export default App;
