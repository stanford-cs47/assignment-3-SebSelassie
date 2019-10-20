/*
 *
 * Assignment 3
 * Starter Files
 *
 * CS47
 * Oct, 2018
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Images, Colors } from "./App/Themes";
import APIRequest from "./App/Config/APIRequest";

import News from "./App/Components/News";
import Search from "./App/Components/Search";

export default class App extends React.Component {
  state = {
    loading: true,
    articles: [],
    searchText: "",
    category: ""
  };

  componentDidMount() {
    //uncomment this to run an API query!
    this.loadArticles();
  }

  async loadArticles(searchTerm = "", category = "") {
    console.log(`SEARCH TERM ${searchTerm}`)
    this.setState({ articles: [], loading: true });
    var resultArticles = [];
    if (category === "") {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({ loading: false, articles: resultArticles });
  }

  onChangeSearch = searchText => {
    this.setState({ searchText });
  };

  loadItems = () => {
    const searchTerm = this.state.searchText;
    console.log(this.state.searchText)
    this.setState({ searchText: "" });
    this.loadArticles(searchTerm);
  };

  contentView() {
    let content;
    if (this.state.loading) {
      content = (
        <View style={styles.loadingScreen}>
          <ActivityIndicator />
        </View>
      );
    } else {
      content = (
        <View style={styles.contentView}>
          <News articles={this.state.articles} />
        </View>
      );
    }
    return content;
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("./App/Images/nyt.png")} style={styles.logo} />
        <Search onChangeSearch={this.onChangeSearch} loadItems={this.loadItems} />
        {this.contentView()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    width: Dimensions.get("window").width * 0.7,
    alignSelf: "center"
  },
  loadingScreen: {
    flex: 5,
    justifyContent: "center"
  },
  contentView: {
    flex: 5
  }
});
