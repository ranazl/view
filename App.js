import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  LayoutAnimation,
} from "react-native";
import places from "./place/place";


let dimWidth = Dimensions.get('window').width;
let dimHeight = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0);

    this.state={
      small:true,
      btn1:false,
      btn2:false,
      btn3:false,
    }
  }

  changeButton1 = () => {
    LayoutAnimation.configureNext(this.config);
    this.setState({ btn1: !this.state.btn1 });
  };
  changeButton2 = () => {
    LayoutAnimation.configureNext(this.config);
    this.setState({ btn2: !this.state.btn2 });
  };
  changeButton3 = () => {
    LayoutAnimation.configureNext(this.config);
    this.setState({ btn3: !this.state.btn3 });
  };

small =()=> {this.setState({small:!this.state.small})}

  render() {
    console.log("data", places && places);
    return (
      <View style={styles.container}>
        <View>
          <ScrollView>
            <View style={!this.state.small ? styles.headerUp : styles.header}>
              <View style={styles.menu}>
                <Image source={require("./picture/menu.png")} />
              
                <Image
                  source={require("./picture/1.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 50 }}
                />
              </View>
              <Text style={styles.Trips}>Your Trips</Text>
            </View>
            <Text style={{ color: "#636363", fontSize: 16, paddingLeft: 20 }}>
              Current Trips
            </Text>
            {this.state.small ?
            <View style={styles.main}>
            <TouchableOpacity onPress={this.small}><Text>DOKME</Text></TouchableOpacity>
              <Image
                source={require("./picture/nature.jpg")}
                style={{width: 350,height: 290,borderRadius: 20,position: "absolute"}}
              />
              <Text
                style={{color: "white",fontSize: 16,paddingTop: 180,marginRight: 200 }}
              >
                MAY 8-19
              </Text>
              <Text
                style={{color: "white",fontSize: 20, paddingTop: 10,fontWeight: "bold",marginRight: 100}}
              >
                Riding through the
              </Text>
              <Text
                style={{color: "white",fontSize: 20,fontWeight: "bold", marginRight: 90 }}
              >
                lands of the legends
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 175,
                  paddingTop: 20
                }}
              >

                  {this.state.btn1 && <View></View>}
                  {!this.state.btn1 && <View></View>}

              <TouchableHighlight onPress={this.changeButton1}style={this.state.btn1 ? styles.buttonOn : styles.buttonOff}>
                {this.state.btn1 ? 
                                    <View>
                                    <Image source={require("./picture/2.jpg")}
                                    style={[styles.picture,{marginRight:50}]}
                                   />
                            </View>
                 : 
                  <View>
                          <Image source={require("./picture/2.jpg")}
                          style={[styles.picture]}
                         />
                  </View>
                }
              </TouchableHighlight>

              <TouchableHighlight onPress={this.changeButton2}style={this.state.btn2 ? styles.buttonOn : styles.buttonOff}>
                {this.state.btn2 ? 
                        <View>
                          <Image source={require("./picture/3.jpg")}
                          style={[styles.picture,{marginRight:50}]}
                         />
                  </View>
                 : 
                  <View>
                          <Image source={require("./picture/3.jpg")}
                          style={[styles.picture,]}
                         />
                  </View>
                }
              </TouchableHighlight>

              <TouchableHighlight onPress={this.changeButton3}style={this.state.btn3 ? styles.buttonOn : styles.buttonOff}>
                {this.state.btn3? 
                            <View>
                            <Image source={require("./picture/4.jpg")}
                            style={[styles.picture,{marginRight:50}]}
                           />
                    </View>
                 : 
                  <View>
                          <Image source={require("./picture/4.jpg")}
                          style={[styles.picture]}
                         />
                  </View>
                }
              </TouchableHighlight>

              </View>
            </View>
          :
        <View>
<TouchableOpacity onPress={this.small}><Text>DOKME</Text></TouchableOpacity>
                 source={require("./picture/nature.jpg")}
                  style={{width:dimWidth,height: dimHeight,borderRadius: 20}}
              />
              <Text>KARIM</Text>
        </View>
              }
            <View style={this.state.footer ? styles.footerUp : styles.footer}>
                <Text style={{marginVertical:5,paddingBottom:7, color: "#636363", fontSize: 16,}}>Past Trips</Text>
            <FlatList
                pagingEnabled
                data={places}
                horizontal={true}
                keyExtractor={item => item.title}
              
                renderItem={({ item }) => (
                  <View style={styles.box}>
           
                      <View>
                        <View>
                          <Image
                            source={item.image }
                            style={{ height: 210, width: 170,borderRadius:10, }}
                          />
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >

                        </View>
                      </View>
               
                  </View>
                )}
              />
            
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerUp: {
    flex: 0,
    display: 'none',
  },
  header: {
    flex: 2,
    backgroundColor: "white"
  },
headerUp: {
    flex: 0,
    display: 'none',
  },
  main: {
    flex: 4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  mainUp: {
    flex: 4,
  },
  footer: {
    // flex: 3,
    backgroundColor: "white",
    paddingHorizontal:20,
    // paddingVertical: 5,
    height: 260,
    marginTop:20
  },
  footerUp: {
    flex: 0,
    display: 'none',
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center"
  },
  Trips: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
    marginLeft: 35,
    marginTop: 25
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    marginLeft: -10
  },
  box: {
    width: 170,
    height: 210,
    borderRadius:10,
    backgroundColor: "white",
    marginHorizontal:20,
    //flex:1
  },
  boxUp: {
    flex: 0,
    display: 'none',
  },
  buttonOn: {
    width: 70,
    height: 40,
    backgroundColor: "#3a3a3a",
    // elevation: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonOff: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    // elevation: 10,
    borderRadius: 50,
    borderWidth:3,
    alignItems: "center",
    justifyContent: "center"
  },
});
