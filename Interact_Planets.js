
const mercury = document.querySelector('.mercury')
// console.log(mercury);
const mercuryButton = document.querySelector('#mercurybutton')

const venus = document.querySelector('.venus')
const venusButton = document.querySelector('#venusbutton')

const earth = document.querySelector('.earth')
const earthButton = document.querySelector('#earthbutton')

const mars = document.querySelector('.mars')
const marsButton = document.querySelector('#marsbutton')

const jupiter = document.querySelector('.jupiter')
const jupiterButton = document.querySelector('#jupiterbutton')

const saturn = document.querySelector('.saturn')
const saturnButton = document.querySelector('#saturnbutton')

const uranus = document.querySelector('.uranus')
const uranusButton = document.querySelector('#uranusbutton')

const neptune = document.querySelector('.neptune')
const neptuneButton = document.querySelector('#neptunebutton')


async function getPlanet(name, element) {
    const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=' + name, {
        headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
    })
    const data = await resp.json()
    console.log(data);
    console.log(typeof data);
    const planetData = data[0]

    element.innerHTML = `
                         Name: ${planetData.name} <br>
            Distance (Light Years): ${planetData.distance_light_year}<br>
                                 Mass (Relative to Jupiter): ${planetData.mass}<br>
                                    Length of Year: ${planetData.period} days<br>
                                        Radius (Relative to Jupiter): ${planetData.radius}<br>
                                            Semi-Major Axis (AU): ${planetData.semi_major_axis}<br>
                                                 Temperature (Kelvin): ${planetData.temperature}<br> `
}

const togglePlanets = {
    mercury: false,
    venus: false,
    earth: false,
    mars: false,
    jupiter: false,
    saturn: false,
    uranus: false,
    neptune: false,

}


function planetClick(element, description, button, name) {

    if (togglePlanets[name]) {

        element.innerHTML = description
        button.innerHTML = 'Discover'
        button.classList.remove('buttonclicked')
        togglePlanets[name] = false

    } else {


        getPlanet(name, element)
        button.classList.add('buttonclicked')
        button.innerHTML = 'Description'
        togglePlanets[name] = true
    }


}



mercuryButton.addEventListener('click', () => {

    planetClick(
        mercury,
        'Mercury is the first planet from the Sun and the smallest planet in the Solar System. It is a terrestrial planet with a heavily cratered surface due to the planet having no geological activity and an extremely tenuous atmosphere (called an exosphere).',
        mercuryButton,
        'mercury'
    )
})

venusButton.addEventListener('click', () => {

    planetClick(
        venus,
        'Venus is the second planet from the Sun. It is a rocky planet with the thickest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth.',
        venusButton,
        'venus'
    )
})

earthButton.addEventListener('click', () => {

    planetClick(
        earth,
        'Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. Earth is the only planet known to sustain liquid surface water, with ocean water extending over 70.8% of the planet, making it an ocean world.',
        earthButton,
        'earth'
    )
})

marsButton.addEventListener('click', () => {

    planetClick(
        mars,
        'Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname "the Red Planet".',
        marsButton,
        'mars'
    )
})

jupiterButton.addEventListener('click', () => {

    planetClick(
        jupiter,
        'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun.',
        jupiterButton,
        'jupiter'
    )
})

saturnButton.addEventListener('click', () => {

    planetClick(
        saturn,
        'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.',
        saturnButton,
        'saturn'
    )
})

uranusButton.addEventListener('click', () => {

    planetClick(
        uranus,
        'Uranus is the seventh planet from the Sun and is a gaseous cyan ice giant. Most of Uranus is made out of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called "ice" or volatiles.',
        uranusButton,
        'uranus'
    )
})

neptuneButton.addEventListener('click', () => {

    planetClick(
        neptune,
        'Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet.',
        neptuneButton,
        'neptune'
    )
})