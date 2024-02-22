// In App.js in a new project
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Provider } from "react-redux";
import Details from "./src/components/Details/Details";
import EditFlatReview from "./src/components/EditFlatReview/EditFlatReview";
import Favorites from "./src/components/Favorites/Favorites";
import Filter from "./src/components/Filter/Filter";
import List from "./src/components/List/List";
import Login from "./src/components/Login/Login";
import Map from "./src/components/Maps/Maps";
import store from "./src/redux/store/index";

const Tab = createBottomTabNavigator();

function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <Provider store={store()}>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: [
              {
                position: "absolute",
                display: "flex",
              },
            ],
            tabBarButton: ["Details", "EditFlatReview", "Home"].includes(
              route.name
            )
              ? () => {
                  return null;
                }
              : undefined,
          })}
        >
          <Tab.Screen
            name="Home"
            component={Login}
            options={{
              tabBarStyle: { display: "none" },
              tabBarIcon: ({ focused }) => (
                <View style={styles.tab}>
                  <Icon
                    color={focused ? "#397ED0" : "#000"}
                    name="user"
                    size={35}
                  />
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="List"
            component={List}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={styles.tab}>
                  <Icon
                    name="home"
                    color={focused ? "#397ED0" : "#000"}
                    size={35}
                  />
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={styles.tab}>
                  <Icon
                    name="heart"
                    color={focused ? "#397ED0" : "#000"}
                    size={35}
                  />
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Filter"
            component={Filter}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={styles.tab}>
                  <Icon
                    name="filter"
                    color={focused ? "#397ED0" : "#000"}
                    size={35}
                  />
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={styles.tab}>
                  <Icon
                    name="map"
                    color={focused ? "#397ED0" : "#000"}
                    size={35}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen name="Details" component={Details} />
          <Tab.Screen name="EditFlatReview" component={EditFlatReview} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tab: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
