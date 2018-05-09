import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, Store, Dispatch, connect } from 'react-redux';
// import { navigation } from "react-navigation";
import { configureStore, IState } from './redux/store/Store';
import { AppNavigator, addListener } from './navigation/AppNavigator';
import { addNavigationHelpers, NavigationProp, NavigationState, NavigationDispatch } from 'react-navigation';

const store = configureStore();

const App: React.SFC<{ dispatch, navigationState: NavigationState }> = ({ dispatch, navigationState }) => {
  return (
    <AppNavigator
      navigation={
        addNavigationHelpers({
          dispatch,
          state: navigationState
        })
      }
    />
  );
}

const mapStateToProps = (state: IState) => ({
  navigationState: state.navigationState
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
