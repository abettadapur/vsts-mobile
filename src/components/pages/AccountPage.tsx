import * as React from 'react';

import { connect } from "react-redux";
import { VssAccount } from '../../models/Account';
import { View, Text } from 'react-native';
import { IAccountState } from '../../redux/store/AccountStore';
import { Dispatch } from 'redux';
import { IState } from '../../redux/store/Store';
import { AccountActionTypes, AccountActions } from '../../redux/actions/Actions';

const mapStateToProps = (state: IState): Partial<IAccountPageProps> => {
    return {
        accounts: state.accountState.accounts
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Partial<IAccountPageProps>): Partial<IAccountPageProps> => {
    return {
        ...ownProps,
        fetchAccounts: () => dispatch(AccountActions.fetchAccounts())
    }
}

export interface IAccountPageProps {
    accounts: VssAccount[];
    fetchAccounts: () => void;
}

export class AccountPage extends React.Component<IAccountPageProps> {
    public render(): JSX.Element {
        return (
            <View>
                <Text>{JSON.stringify(this.props)}</Text>
            </View>
        );
    }
    public componentDidMount() {
        this.props.fetchAccounts();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPage);

