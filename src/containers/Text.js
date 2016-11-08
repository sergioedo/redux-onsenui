import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'react-onsenui';

import * as Actions from '../actions';

const Text = ({text, actions}) => {
  const onChangeText = (event) => {
    //console.log("text changed!" + event.target.value);
    actions.setText ({
      text: event.target.value
    });
  };

  return (
    <div>
      <Input
        placeholder='Input field'
        style={{ height: 20 }}
        value={text}
        onChange={onChangeText} />
      <p>{text}</p>
    </div>
  );
};

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  ...state
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);