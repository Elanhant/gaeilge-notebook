import * as React from 'react';
import { History, Location, Action } from 'history';
import * as actions from '../actions';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export interface Props {
    history: History;
    currentPath: string;
    currentSearch: string;
    changeRoute: (pathname: string, search?: string) => void;
}

export interface StateFromProps {
    currentPath: string;
    currentSearch: string;
}

export interface DispatchFromProps {
    changeRoute: (pathname: string, search?: string) => void;
}

class RouterContainer extends React.PureComponent<Props, object> {

    private unlisten: () => void;

    constructor() {
        super();

        this.historyListener = this.historyListener.bind(this);
    }

    componentDidMount() {
        const
            { history, changeRoute } = this.props;

        changeRoute(history.location.pathname, history.location.search);
        this.unlisten = history.listen(this.historyListener);
    }

    componentDidUpdate(oldProps: Props) {
        const { currentPath, currentSearch, history } = this.props;

        if (oldProps.currentPath !== currentPath) {
            history.push(currentPath, {
                search: currentSearch
            });
        }
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <noscript />
        );
    }

    private historyListener(location: Location, action: Action) {
        if (location.pathname !== this.props.currentPath || location.search !== this.props.currentSearch) {
            this.props.changeRoute(location.pathname, location.search);
        }
    }
}

export function mapStateToProps({ router }: StoreState) {
    return {
        currentPath: router.currentPath,
        currentSearch: router.currentSearch
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.RouterAction>) {
    return {
        changeRoute: (pathname: string, search?: string) => dispatch(actions.changeRoute(pathname, search))
    };
}

export default connect<StateFromProps, DispatchFromProps, { history: History }>(
    mapStateToProps,
    mapDispatchToProps
)(RouterContainer);
