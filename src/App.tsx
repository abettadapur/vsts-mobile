import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountPage from "./components/pages/AccountPage";
import { Provider, Store } from 'react-redux';
import configureStore, { IState } from './redux/store/Store';

export default class App extends React.Component {
  private _store: Store<IState>;
  constructor() {
    super(null);
    this._store = configureStore();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!!</Text>
        <Provider store={this._store}>
          <AccountPage />
        </Provider>
      </View>
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
