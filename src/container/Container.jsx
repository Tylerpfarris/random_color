import React, { Component } from 'react';
import RandomColor from '../components/randomColor/RandomColor';
import { randomColor } from '../utils/randomColor';
const babyImg = 'url(baby.jpeg)';

export default class Container extends Component {
    //setting state-- color is undefined to start
    state = {
        color: '',
    };

    //when the program loads mount setInterval
    componentDidMount() {
        setInterval(() => {
            //de-structure color from state and declare newColor, do this so you are able to compare the two
            const { color } = this.state;
            const newColor = randomColor();

            //if newColor and color(our state) is the same 
            if (newColor === color) {
                //set color to babyImg
                this.setState({ color: `${babyImg}` });
                //otherwise set color to newColor
            } else this.setState({ color: newColor });
            //set the interval 1000ms
        }, 1000);
    }

    render() {
        const { color } = this.state;
        return <RandomColor data-testid='RandomColor' color={color} />;
    }
}
