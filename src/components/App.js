import React, {Component} from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {};
    }
    render(){
        return(
            <div>
           <h1>I am App and I render display and ButttonPanel</h1>
           <Display />
           <ButtonPanel/>
            </div>
        );
    }
};

export default App;

