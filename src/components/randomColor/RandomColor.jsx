import React from 'react';
import PropTypes from 'prop-types';

const RandomColor = ({ color }) => (
    <div
        style={{
            //use background shorthand instead of being explicit so we can set it to an image as well as a color. 
            background: color,
            height: '300px',
            width: '300px',
        }}
    ></div>
);

RandomColor.PropTypes = {
    //declaring the prop type of color.
    color: PropTypes.string.isRequired,
};

export default RandomColor;
