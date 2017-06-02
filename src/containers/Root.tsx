import * as React from 'react';
import { StoreState } from '../types';
import { connect } from 'react-redux';

export interface Props {
    currentPath: string;
}

export interface StateFromProps {
    currentPath: string;
}

class RootContainer extends React.PureComponent<Props, object> {

    render() {
        const { currentPath } = this.props;

        return (
            <div>
                {
                    currentPath === '/' && (
                        <div>HOME</div>
                    )
                }
                {
                    currentPath === '/words' && (
                        <div>WORDS</div>
                    )
                }
                {
                    currentPath === '/texts' && (
                        <div>TEXTS</div>
                    )
                }
            </div>
        );
    }
}

export function mapStateToProps({ router }: StoreState) {
    return {
        currentPath: router.currentPath
    };
}

export default connect<StateFromProps, void, {}>(
    mapStateToProps
)(RootContainer);
