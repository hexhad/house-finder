import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Hexagon} from 'react-native-feather';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import ScreenFour from '../screens/ScreenFour';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          position: 'absolute',
          bottom: 40,
          left: 45,
          right: 45,
          elevation: 0,
          borderRadius: 3,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={ScreenOne}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                focused && {
                  backgroundColor: '#0003',
                  padding: 10,
                  borderRadius: 4,
                },
              ]}>
              <Home
                {...{
                  width: 23,
                  height: 23,
                  stroke: '#0000008f',
                  fill: '#00000000',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={ScreenTwo}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                focused && {
                  backgroundColor: '#0003',
                  padding: 10,
                  borderRadius: 4,
                },
              ]}>
              <Hexagon
                {...{
                  width: 23,
                  height: 23,
                  stroke: '#0000008f',
                  fill: '#00000000',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About1"
        component={ScreenThree}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                focused && {
                  backgroundColor: '#0003',
                  padding: 10,
                  borderRadius: 4,
                },
              ]}>
              <Hexagon
                {...{
                  width: 23,
                  height: 23,
                  stroke: '#0000008f',
                  fill: '#00000000',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About3"
        component={ScreenFour}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                focused && {
                  backgroundColor: '#0003',
                  padding: 10,
                  borderRadius: 4,
                },
              ]}>
              <Hexagon
                {...{
                  width: 23,
                  height: 23,
                  stroke: '#0000008f',
                  fill: '#00000000',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
