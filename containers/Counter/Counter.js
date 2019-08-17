import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <br/>
                <CounterControl label="Increment : " clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement : " clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add by 5 : " clicked={this.props.addValue}  />
                <CounterControl label="Subtract by 5 : " clicked={this.props.subValue}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        addValue: () => dispatch({type: 'addValue', value : 5}),
        subValue: () => dispatch({type: 'subValue', value : 5})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);