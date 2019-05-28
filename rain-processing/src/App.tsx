import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Drop from "./Drop";

const width = 900;
const height = 600;

class App extends React.Component {
    public render() {


        let stars = [];
        for (let i = 0; i < 20; ++i) {
            stars.push(<Drop width={width} height={height} key={i}/>)
        }

        const svgStyle = {
            background: 'url(https://i.kym-cdn.com/photos/images/original/000/160/528/131305048820.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        };


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Rain (SVG + React)</h1>
                </header>
                <p className="App-intro">
                </p>
                <svg width={width} style={svgStyle} height={height}>
                    {stars}
                </svg>
            </div>
        );
    }
}

export default App;
