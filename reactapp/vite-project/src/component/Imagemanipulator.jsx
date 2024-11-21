import React, { useState } from 'react';
import cat from './cat.jpg';

function Imagemanipulation() {
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [rotation, setRotation] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#ff0009');

    const enhanceHeight = () => {
        setHeight(prevHeight => prevHeight + 20); 
    };

    const enhanceWidth = () => {
        setWidth(prevWidth => prevWidth + 20); 
    };

    const rotateImage = () => {
        setRotation(prevRotation => prevRotation + 90); 
    };

    const changeBackground = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setBackgroundColor(randomColor);
    };

    return (
        <div style={{ border: '2px solid green', height: '300px', width: '400px', marginLeft: '250px', backgroundColor: backgroundColor }}>
            <div style={{ marginLeft: '100px', marginTop: '20px', border: "1px solid black", height: '100px', width: '100px', overflow: 'hidden' }}>
                <img 
                    src={cat} 
                    height={height} 
                    width={width} 
                    alt='cat image' 
                    style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s' }} 
                />
            </div>
            <div>
                <button onClick={changeBackground}>Change Background</button>
                <button onClick={enhanceHeight}>Enhance Height</button>
                <button onClick={enhanceWidth}>Enhance Width</button>
                <button onClick={rotateImage}>Rotate</button>
            </div>
        </div>
    );
}

export default Imagemanipulation;