import React from 'react';
import JWSTinfo from './JWSTinfo';
import ImageNav from './ImageNav';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() { 
        return (
            <div className="container">
              <JWSTinfo />
              <ImageNav />
            </div>
        )
    }

}

export default App;
