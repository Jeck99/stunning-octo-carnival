import React, { Component } from 'react';

export default class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { second: 0, vegtabale_name: "", vegtabaleArray:[] };
        this.ChangeVageName = this.ChangeVageName.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.secondUp = this.secondUp.bind(this);
    }
    ChangeVageName() {
        this.state.vegtabaleArray.push(this.state.vegtabale_name);
        this.setState({ vegtabale_name: this.state.vegtabale_name });
    }
    changeInput(event) {
        this.state.vegtabale_name= event.target.value;
    }
    render() {
        return (<div>
            <input type="text" onChange={this.changeInput } />
            <h1>{this.state.vegtabale_name}</h1>
            <button onClick={this.ChangeVageName}>Change Name</button>
            <ul>
                {this.state.vegtabaleArray.map((vegItem)=><li>{vegItem}</li>)}
            </ul>





            {/* <h1>{this.state.second}</h1>
            <button onClick={this.secondUp}>Increase</button> */}
        </div>)
    }
    secondUp() {
        const nextSecond = this.state.second + 1;
        this.setState({ second: nextSecond });
    }
    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }
}