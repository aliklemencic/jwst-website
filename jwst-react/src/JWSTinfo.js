import React from 'react';

class JWSTinfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="jwst-info">
                <h1>The James Webb Space Telescope</h1>
                <p className="jwst">The James Webb Space Telescope (JWST) is an infrared space telescope launched by NASA on December 25, 2021. It's the largest optical telescope in space, generating the highiest resolution images of space and seeing deeper into space than ever before. The telescope is named after James E. Webb, the administrator of NASA from 1961 to 1968, during the space race.</p>
                <p className="jwst">The JWST's primary mirror consists of 18 hexagonal mirrors, an innovation that generates six times the light-collecting space of the Hubble Telescope. The construction of JWST cost $10 billion and began in 1996, although the current approach is the result of a redesign in 2005. The original mission was planned for 10 years, but thanks to a more than successful launch, JWST has an expected life of 20 years.</p>
            </div>
        )
    }

}

export default JWSTinfo;
