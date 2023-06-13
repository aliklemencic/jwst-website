import React from 'react';
import Overlay from './Overlay';

class ImageNav extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageClicked: null
        }
    }

    handleImageClick = (e) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute('image')
        this.setState({ imageClicked: target}) 
    }

    render() {
        return (
            <div className="images">
                <h2>Explore Some of JWST's Groundbreaking Images</h2>
                <ul id="list">
                    <li onClick={this.handleImageClick} image="carina-nebula"><a>Carina Nebula</a></li>
                    <li onClick={this.handleImageClick} image="neptune"><a>Neptune</a></li>
                    <li onClick={this.handleImageClick} image="pillars-of-creation"><a>Pillars of Creation</a></li>
                    <li onClick={this.handleImageClick} image="phantom-galaxy"><a>Phantom Galaxy</a></li>
                    <li onClick={this.handleImageClick} image="southern-ring-nebula"><a>Southern Ring Nebula</a></li>
                    <li><a onClick={this.handleImageClick} image="stephans-quintet">Stephan's Quintet</a></li>
                    <li onClick={this.handleImageClick} image="tarantula-nebula"><a>Tarantula Nebula</a></li>
                </ul>
                <Overlay image={this.state.imageClicked} />
            </div>
        )
    }

}

export default ImageNav;
