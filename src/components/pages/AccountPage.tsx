import * as React from 'react';

import { connect } from "react-redux";
import { VssAccount } from '../../models/Account';
import { View } from 'react-native';
import { IAccountState } from '../../redux/store/AccountStore';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IAccountState): Partial<IAccountPageProps> => {
    return {
        accounts: state.accounts
    };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Partial<IAccountPageProps>): Partial<IAccountPageProps> => {
    return ownProps;
}

export interface IAccountPageProps {
    accounts: VssAccount[];
}

export class AccountPage extends React.Component<IAccountPageProps> {
    public render(): JSX.Element {
        return (<View />);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPage);

