import React, { Component } from "react";
import PropTypes from "prop-types"; //consider using this!
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Linking,
  TouchableHighlight
} from "react-native";
import { material } from "react-native-typography"; //consider using this!
import { Metrics, Colors } from "../Themes";

export default class NewsItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            Linking.canOpenURL(item.url).then(supported => {
                supported ?  Linking.openURL(item.url) :alert(`couldn't open URL`);
            });
          }}
        >
          <View style={styles.container}>
            <Text style={material.headline}>{item.title}</Text>
            <Text style={material.body2}>{item.snippet}</Text>
            <Text style={material.body1}>{item.byline}</Text>
            <Text style={material.caption}>{item.date}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center"
  }
});
