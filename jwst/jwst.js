document.addEventListener("DOMContentLoaded", setupListeners);

function setupListeners() {    
    let pillarEvent = document.querySelector('#pillars');
    pillarEvent.addEventListener("click", pillarsOfCreation);

    let quintetEvent = document.querySelector('#quintet');
    quintetEvent.addEventListener("click", stephansQuintet);

    let southernEvent = document.querySelector('#southern-ring');
    southernEvent.addEventListener("click", southernRingNebula);

    let tarantulaEvent = document.querySelector('#tarantula');
    tarantulaEvent.addEventListener("click", tarantulaNebula);

    let carinaEvent = document.querySelector('#carina');
    carinaEvent.addEventListener("click", carinaNebula);

    let phantomEvent = document.querySelector('#phantom');
    phantomEvent.addEventListener("click", phantomGalaxy);

    let neptuneEvent = document.querySelector('#neptune');
    neptuneEvent.addEventListener("click", neptune);
}

function pillarsOfCreation() {
    showPopups();
    setupOverlayListener();

    text = "This stunning image shows the elephant trunks of interstellar gas and dust in the Eagle Nebula, 6,500-7,000 light-years from Earth. The pillars pictured here are in the process of creating new stars, while being eroded by the light of nearby recently formed stars. The Pillars of Creation was initially photographed by the Hubble Space Telescope and quickly became famous. The JWST recaptured the Eagle Nebula in higher detail in October 2022";
    writeContent("<h2>Pillars of Creation</h2>",
               "images/pillars-of-creation.jpg",
               text);
}

function stephansQuintet() {
    showPopups();
    setupOverlayListener();

    text = "Stephan's Quintet is a group of five galaxies, four of which form the first compact galaxy group ever discovered. The group is the most studied compact galaxy group and will likely merge with each other. Stephan's Quintet can be seen in the constellation Pegasus. Fun fact: the angelic figures at the start of It's a Wonderful Life are based on images of this iconic quintet.";
    writeContent("<h2>Stephan's Quintet</h2>",
               "images/stephans-quintet.jpg",
               text);
}

function southernRingNebula() {
    showPopups();
    setupOverlayListener();

    text = "The Southern Ring Nebula is also known as NGC 3132. It's an extensively studied planitary nebula consisting of two stars about 2,000 light-years from Earth. This image marks the first time astronomers saw that the dimmer star was cloaked in dust. The brighter star is younger, while the dim star is dying. The two stars orbit one another while the dim one sheds mass, creating the rings in this image.";
    writeContent("<h2>Southern Ring Nebula</h2>",
               "images/southern-ring-nebula.jpg",
               text);
}

function carinaNebula() {
    showPopups();
    setupOverlayListener();

    text = "The Carina Nebula is located in the Carina-Sagittarius Arm of the Milky Way, in the Southern sky. The nebula is about 8,500 light-years from Earth and is one of the largest nebulae in in the universe. The Carina Nebula contains one of the youngest known star clusters, Trumpler 14, which is around half a million years old. It also contains the brightest star in the Milky Way, WR 25. Mystic Mountain is the term for the dust-gas pillar in this image, first captured by the Hubble Space Telescope.";
    writeContent("<h2>Carina Nebula</h2>",
               "images/carina-nebula.jpg",
               text);
}

function tarantulaNebula() {
    showPopups();
    setupOverlayListener();

    text = "The Tarantula Nebula forms the southest corner of the Large Magellanic Cloud, a satellite of the Milky Way. It gets its name from the way it looked in images in the early 20th century. This Nebula is 160,000 light-years from Earth and is extremely bright. The first black hole outside the Milky Way was discovered in this nebula.";
    writeContent("<h2>Tarantula Nebula</h2>",
               "images/tarantula-nebula.jpg",
               text);
}
function phantomGalaxy() {
    showPopups();
    setupOverlayListener();

    text = "The Phantom Galaxy is a spiral galaxy located in the constellation Pisces, 32 million light-years from Earth. As this image shows, the galaxy has two distinct spiral arms, and it is estimated to be home to about 100 billion stars. The galaxy's low brightness makes it hard for astronomers to study, which is why this image from JWST is so incredible.";
    writeContent("<h2>Phantom Galaxy</h2>",
               "images/phantom-galaxy.jpg",
               text);
}
function neptune() {
    showPopups();
    setupOverlayListener();

    text = "Neptune is the eighth planet from the sun and the furthest known planet in our Solar System. It's the fourth largest, the third most massive, and the densest giant planet in our Solar System. In this image you can clearly see its neighbor, Pluto, the dwarf planet. Fun fact: Neptune is the only planet in the Solar System found by mathematical prediction as opposed to observation. Uranus' orbit unexpectedly changed, causing French Astronomer Alexis Bouvard to hypothesize that an unkown planet's gravity was affecting it.";
    writeContent("<h2>Neptune</h2>",
               "images/neptune.jpg",
               text);
}

function showPopups() {
    wrapper.style.display = 'None';
    list.style.display = 'None';
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function hidePopups() {
    wrapper.style.display = 'block';
    list.style.display = 'block';
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

function writeContent(title, image, text) {
    var container = document.getElementById('popup-content')
    container.innerHTML = title;

    var img = document.createElement('img');
    img.src = image
    container.appendChild(img);

    var paragraph = document.createElement('p');
    paragraph.innerText = text
    container.appendChild(paragraph);
}

function setupOverlayListener() {
    let overlayEvent = document.querySelector('#overlay');
    overlayEvent.addEventListener("click", hidePopups);
}
