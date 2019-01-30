import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Animated, Animation, TouchableOpacity} from 'react-native'

const dimension = Dimensions.get('window');

class App3 extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            imageContainerHeight: new Animated.Value(200)
        }
    }

    onClick = () => {
        Animated.timing(this.state.imageContainerHeight, {
            toValue: dimension.height - 20,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    render(){
        return (
            <Animated.View style={styles.container}>
            <TouchableOpacity onPress={this.onClick} style={[styles.imageContainer]}>
                <Animated.View style={{height: this.state.imageContainerHeight}}>
                    <Animated.Image source={require('./picture/1.jpg')} style={styles.image} />
                    <Animated.Text style={styles.titleText}>Hello, World!</Animated.Text>
                </Animated.View>
            </TouchableOpacity>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: '100%'
    },
    image: {
        flex: 1
    },
    titleText: {
        position: 'absolute',
        left: 20,
        bottom: 20,
        fontSize: 30
    }
})

export default App3;