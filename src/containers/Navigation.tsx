import * as React from 'react';
import Navigation, { Link } from '../components/Navigation';
import * as actions from '../actions';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export interface Props {
    currentPath: string;
    changeRoute: (s: string) => void;
}

export interface StateFromProps {
    currentPath: string;
}

export interface DispatchFromProps {
    changeRoute: (s: string) => void;
}

class NavigationContainer extends React.PureComponent<Props, any> {

    constructor() {
        super();

        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    render() {
        const links = [
            { to: '/', name: 'Home', active: true },
            { to: '/words', name: 'Words' },
            { to: '/texts', name: 'Texts' },
        ] as Array<Link>;

        return (
            <Navigation links={links} onLinkClick={this.handleLinkClick} />
        );
    }

    private handleLinkClick(link: Link, e: React.MouseEvent<HTMLInputElement>) {
        e.preventDefault();

        this.props.changeRoute(link.to);
    }
}

export function mapStateToProps({ router }: StoreState) {
    return {
        currentPath: router.currentPath
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.RouterAction>) {
    return {
        changeRoute: (pathname: string) => dispatch(actions.changeRoute(pathname))
    };
}

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(NavigationContainer);
