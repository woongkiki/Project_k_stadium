import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Bookmark from './Bookmark';
import Mypage from './Mypage';
import DefText from '../components/common/DefText';
import {colorSelect} from '../components/common/StyleCommon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function CustomTabBar(props) {
  const {state, navigation, userInfo} = props;

  const screenName = state.routes[state.index].name; //tabbar 현재 스크린명

  const {bottom} = useSafeAreaInsets();
  const {width} = useWindowDimensions();
  const tabWidth = width / 3;
  const tabHeight = 60;

  const TabNavigate = screen => {
    navigation.navigate('TabNavi', {
      screen: screen,
    });
  };

  return (
    <View style={[styles.tabBarContainer, {paddingBottom: bottom}]}>
      <TouchableOpacity
        onPress={() => TabNavigate('Home')}
        style={[styles.tabBarItem, {width: tabWidth, height: tabHeight}]}>
        <DefText
          text={'Home'}
          style={[
            styles.tabBarLabel,
            {
              color:
                screenName == 'Home' ? colorSelect.blue : colorSelect.black,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => TabNavigate('Bookmark')}
        style={[styles.tabBarItem, {width: tabWidth, height: tabHeight}]}>
        <DefText
          text={'Bookmark'}
          style={[
            styles.tabBarLabel,
            {
              color:
                screenName == 'Bookmark' ? colorSelect.blue : colorSelect.black,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => TabNavigate('Mypage')}
        style={[styles.tabBarItem, {width: tabWidth, height: tabHeight}]}>
        <DefText
          text={'Mypage'}
          style={[
            styles.tabBarLabel,
            {
              color:
                screenName == 'Mypage' ? colorSelect.blue : colorSelect.black,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const TabNavi = props => {
  const {navigation} = props;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
      backBehavior={'history'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabNavi;
