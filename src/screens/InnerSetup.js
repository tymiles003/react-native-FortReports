import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InnerSetupReviewLeft,
  InnerSetupReviewRight,
  InnerSetupUserLeft,
  InnerSetupUserRight
} from './';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking
} = ReactNative;

/**
 * Container component for Setup page
 */
class InnerSetup extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row' }}>
      	<View style={{width: 360}}>
          <InnerSetupUserLeft />
        </View>
        <View style={{flex: 1}}>
          <InnerSetupUserRight />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerSetup;
