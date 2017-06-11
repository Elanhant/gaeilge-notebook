import * as React from 'react';
import { LoadWords } from '../actions';
import { LOAD_WORDS } from '../constants';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export interface Props extends StateFromProps, DispatchFromProps {

}

export interface StateFromProps {

}

export interface DispatchFromProps {
    fetchWords: () => void;
}

class WordsContainer extends React.PureComponent<Props, object> {

    componentDidMount() {
        this.props.fetchWords();
    }

    render() {
        return (
            <article>
                Hello there! I will show you some words!
            </article>
        );
    }
}

export function mapStateToProps(state: StoreState): StateFromProps {
    return {

    };
}

export function mapDispatchToProps(dispatch: Dispatch<LoadWords>): DispatchFromProps {
    return {
        fetchWords: () => dispatch({ type: LOAD_WORDS })
    };
}

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(WordsContainer);
