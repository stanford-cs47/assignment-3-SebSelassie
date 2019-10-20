/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Oct, 2018
 */

import React, { Component } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Linking
} from "react-native";
import { material } from "react-native-typography"; //consider using this!
import { Metrics, Colors } from "../Themes";
import NewsItem from "./NewsItem";

export default class News extends Component {
  static defaultProps = { articles: [] };

  static propTypes = {
    articles: PropTypes.array
  };


  render() {
    const { articles } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={articles}
          renderItem={({ item }) =>  <NewsItem item={item}/>}
          keyExtractor={item => item.url}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
