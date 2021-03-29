import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import * as Speech from 'expo-speech';

var mean;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      lexicalCategory: '',
      meaning: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'black'}
          centerComponent={{
           text: 'My Pocket Dictionary',
            style: { color: '#fff', fontSize: 18,fontWeight:'bold',fontFamily:'san-serif' },
          }}
        />

        
        <TextInput
          style={styles.inputBox}
          autoCorrect="true"
          onChangeText={(text) => {
            this.setState({ word: text });
          }}
          value={this.state.word}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            mean = db[this.state.word];
            if (mean === undefined || mean === null) {
              alert(
                'Please enter a word, or check your spelling and try again!'
              );
            }
            this.setState({
              word: db[this.state.word].word,
              lexicalCategory: db[this.state.word].lexicalCategory,
              meaning: db[this.state.word].definition,
            });
          }}>
          <Text style={styles. searchButton}>GO</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>WORD:</Text>
        <Text style={styles.displayText1}>{this.state.word}</Text>
        <Text style={styles.displayText}>LEXICAL CATEGORY:</Text>
        <Text style={styles.displayText1}>{this.state.lexicalCategory}</Text>
        <Text style={styles.displayText}>DEFINITION:</Text>
        <Text style={styles.displayText1}>{this.state.meaning}</Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => Speech.speak(this.state.word)}>
            <Text style={styles.displayText2}>PRONUNCIATION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              this.setState({
                word: '',
                lexicalCategory: '',
                meaning: '',
              });
            }}>
            <Text style={styles.displayText2}>CLEAR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.displayText12}>
          WORDS YOU CAN SEARCH FOR: intrigue, mesmerise, procastinate, tree,
          sacerdotal
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 inputBoxContainer: {
    flex:0.3,
   
    alignItems:'center',
    justifyContent:'center',
    
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    marginTop:25,
    color:'black',
    fontFamily:'san-serif'
  },

    

  searchText:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'san-serif',
    color:'white'
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center'
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  detailsTitle:{
    color:'yellow',
    fontSize:20,
    fontWeight:'bold'
  },
    displayText: {
    flex: 0.1,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'green',
    textDecorationLine: 'underline',
  },
  displayText1: {
    flex: 0.1,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  displayText11: {
    flex: 0.1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'blue',
  },
  button2: {
    width: 150,
    borderWidth: 4,
    marginTop: 20,
    borderColor: 'yellow',
    backgroundColor: 'black',
    alignSelf: 'center',
    height: 30,
    marginRight: 10,
  },
  displayText2: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  displayText12: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },

   imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 90,
    marginTop:40
  },
  goButton: {
      width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
      borderRadius: 10,
    backgroundColor:'red',
    marginLeft:100
  },
});
