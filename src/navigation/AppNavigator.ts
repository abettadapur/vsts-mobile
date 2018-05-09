import { StackNavigator } from "react-navigation";
import { ConnectedAccountPage } from "../components/pages/AccountPage";
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { IState } from '../redux/store/Store';

export const AppNavigator = StackNavigator({
    Accounts: { screen: ConnectedAccountPage }
});

export const navigationMiddleware = createReactNavigationReduxMiddleware<IState>("root", state => state.navigationState);
export const addListener = createReduxBoundAddListener("root");