import React, { Component } from 'react';
import {
  View, Text, Button, Icon, TextInput,
  ScrollView,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';


export default class NewsFeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.header}>
              News Feed Screen
            </Text>
          </View>
          <View style={styles.middleContainer}>
            
          </View>
          <View style={styles.bottomContainer}>
           
          </View>
        </View>
    );
  }
}
