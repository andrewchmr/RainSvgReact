import * as React from "react";

interface DropState {
    x: number;
    y: number;
    ySpeed: number;
    size: number;
}

interface DropProps {
    width: number;
    height: number;
}

class Drop extends React.Component<DropProps, DropState> {

    constructor(props: DropProps) {
        super(props);

        this.state = {
            x: Drop.getRandomNumber(0, this.props.width),
            y: Drop.getRandomNumber(-this.props.width, -50),
            ySpeed: Drop.getRandomNumber(12, 15),
            size: Drop.getRandomNumber(0.1, 0.2)
        }
    }

    static getRandomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    render() {
        return <g>
            <g transform={`translate(${this.state.x}, ${this.state.y}) scale(${this.state.size})`}>
                <path fill={'white'} xmlns="http://www.w3.org/2000/svg"
                      d="M134.475,8.551c-6.8-11.6-14-11.2-20.8,0c-31.2,46.4-78.4,116-78.4,150.8c0,24.4,10,46.8,26,62.8s38.4,26,62.8,26    c24.4,0,46.8-10,62.8-26s26-38.4,26-62.8C212.875,124.151,165.675,54.951,134.475,8.551z M188.075,198.951    c-6.4,10.4-15.6,19.6-26.8,26c-5.2,2.8-11.6,1.2-14.4-4c-3.2-5.6-1.2-12,4-14.8c8-4.4,14.4-10.8,19.2-18.4    c4.8-7.6,7.6-16.4,8-25.6c0.4-6,5.2-10.4,11.2-10c6,0.4,10.4,5.2,10,11.2C198.475,176.151,194.475,188.151,188.075,198.951z"/>
            </g>
        </g>
    }

    componentDidMount() {
        setInterval(() => this.fall(), 30);
    }

    fall() {
        this.setState({
            y: this.state.y + this.state.ySpeed
        });

        if (this.state.y > this.props.height) {
            this.setState({y: Drop.getRandomNumber(-this.props.width, -50), ySpeed: Drop.getRandomNumber(12, 15)});
        }
    }
}

export default Drop;