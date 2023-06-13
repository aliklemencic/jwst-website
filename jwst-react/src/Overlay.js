import React from 'react';


class Overlay extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            descriptions: {
                "carina-nebula": "The Carina Nebula is located in the Carina-Sagittarius Arm of the Milky Way, in the Southern sky. The nebula is about 8,500 light-years from Earth and is one of the largest nebulae in in the universe. The Carina Nebula contains one of the youngest known star clusters, Trumpler 14, which is around half a million years old. It also contains the brightest star in the Milky Way, WR 25. Mystic Mountain is the term for the dust-gas pillar in this image, first captured by the Hubble Space Telescope.",
                "neptune": "Neptune is the eighth planet from the sun and the furthest known planet in our Solar System. It's the fourth largest, the third most massive, and the densest giant planet in our Solar System. In this image you can clearly see its neighbor, Pluto, the dwarf planet. Fun fact: Neptune is the only planet in the Solar System found by mathematical prediction as opposed to observation. Uranus' orbit unexpectedly changed, causing French Astronomer Alexis Bouvard to hypothesize that an unkown planet's gravity was affecting it.",
                "pillars-of-creation": "This stunning image shows the elephant trunks of interstellar gas and dust in the Eagle Nebula, 6,500-7,000 light-years from Earth. The pillars pictured here are in the process of creating new stars, while being eroded by the light of nearby recently formed stars. The Pillars of Creation was initially photographed by the Hubble Space Telescope and quickly became famous. The JWST recaptured the Eagle Nebula in higher detail in October 2022.",
                "phantom-galaxy": "The Phantom Galaxy is a spiral galaxy located in the constellation Pisces, 32 million light-years from Earth. As this image shows, the galaxy has two distinct spiral arms, and it is estimated to be home to about 100 billion stars. The galaxy's low brightness makes it hard for astronomers to study, which is why this image from JWST is so incredible.",
                "southern-ring-nebula": "The Southern Ring Nebula is also known as NGC 3132. It's an extensively studied planitary nebula consisting of two stars about 2,000 light-years from Earth. This image marks the first time astronomers saw that the dimmer star was cloaked in dust. The brighter star is younger, while the dim star is dying. The two stars orbit one another while the dim one sheds mass, creating the rings in this image.",
                "stephans-quintet": "Stephan's Quintet is a group of five galaxies, four of which form the first compact galaxy group ever discovered. The group is the most studied compact galaxy group and will likely merge with each other. Stephan's Quintet can be seen in the constellation Pegasus. Fun fact: the angelic figures at the start of It's a Wonderful Life are based on images of this iconic quintet.",
                "tarantula-nebula": "The Tarantula Nebula forms the southest corner of the Large Magellanic Cloud, a satellite of the Milky Way. It gets its name from the way it looked in images in the early 20th century. This Nebula is 160,000 light-years from Earth and is extremely bright. The first black hole outside the Milky Way was discovered in this nebula."
            },
            titles: {
                "carina-nebula": "The Carina Nebula",
                "neptune": "Neptune",
                "pillars-of-creation": "The Pillars of Creation",
                "phantom-galaxy": "The Phantom Galaxy",
                "southern-ring-nebula": "The Southern Ring Nebula",
                "stephans-quintet": "Stephan's Quintet",
                "tarantula-nebula": "The Tarantula Nebula"
            },
            imageExists: this.props.image !== null
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.image !== prevProps.image) {
            this.setState({ imageExists: this.props.image !== null })
        }
    }

    getOverlay() {
        if (this.state.imageExists) {
            console.log('in if')
            return <div id="overlay" style={{display: 'block'}} onClick={this.removePopup}></div>
        }
        else {
            console.log('in else')
            return <div id="overlay" style={{display: 'none'}}></div>
        }
    }

    getPopup() {
        if (this.state.imageExists) {
            const description = this.state.descriptions[this.props.image]
            const title = this.state.titles[this.props.image]
            const imageURL = "images/" + this.props.image + ".jpg"

            return (
                <div id="popup" style={{display: 'block'}}>
                    <div id="popup-content">
                        <h2>{title}</h2>
                        <img src={imageURL} alt={this.props.image}></img>
                        <p>{description}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id="popup" style={{display: 'none'}}>
                    <div id="popup-content"></div>
                </div>
            )
        }
    }

    removePopup = (e) => {
        e.preventDefault();
        this.setState({ imageExists: false});
    }

    render() {
        var overlay = this.getOverlay()
        var popup =this.getPopup()
        return(
            <div className="overlay-for-images">
                {overlay}
                {popup}
            </div>
        )
    }

}

export default Overlay;
