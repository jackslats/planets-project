
const mercury = document.querySelector('.mercury')
// console.log(mercury);

const mercuryButton = document.querySelector('#mercurybutton')
// console.log(mercuryButton);

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





// async function getPlanet(planet) {
//     const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=' + planet, {
//         headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
//     })
//     const data = await resp.json()
//     console.log(data);
//     console.log(typeof data);
//     // planets.push(data)
// }


let isClicked = false


mercuryButton.addEventListener('click', () => {

    async function getMercury() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=mercury', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const mercuryData = data[0]

        mercury.innerHTML = `
            Name: ${mercuryData.name} <br>
                Distance (Light Years): ${mercuryData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${mercuryData.mass}<br>
                        Length of Year: ${mercuryData.period} days<br>
                            Radius (Relative to Jupiter): ${mercuryData.radius}<br>
                                Semi-Major Axis (AU): ${mercuryData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${mercuryData.temperature}<br> `


    }


    if (isClicked) {

        mercury.innerHTML = 'Mercury is the first planet from the Sun and the smallest planet in the Solar System. It is a terrestrial planet with a heavily cratered surface due to the planet having no geological activity and an extremely tenuous atmosphere (called an exosphere).'
        mercuryButton.innerHTML = 'Discover'
        mercuryButton.classList.remove('buttonclicked')
        isClicked = false

    } else {


        getMercury()
        mercuryButton.classList.add('buttonclicked')
        mercuryButton.innerHTML = 'sDescription'
        isClicked = true
    }
}


)





// mercuryButton.addEventListener('click', () => {
//     async function getMercury() {
//         const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=mercury', {
//             headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
//         })
//         const data = await resp.json()
//         console.log(data);
//         console.log(typeof data);
//         const mercuryData = data[0]

//         mercury.innerHTML = `
//             Name: ${mercuryData.name} <br>
//                 Distance (Light Years): ${mercuryData.distance_light_year}<br>
//                     Mass (Relative to Jupiter): ${mercuryData.mass}<br>
//                         Length of Year: ${mercuryData.period} days<br>
//                             Radius (Relative to Jupiter): ${mercuryData.radius}<br>
//                                 Semi-Major Axis (AU): ${mercuryData.semi_major_axis}<br>
//                                     Temperature (Kelvin): ${mercuryData.temperature}<br> `
//     }

//     getMercury()
// })


venusButton.addEventListener('click', () => {
    async function getVenus() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=venus', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const venusData = data[0]

        venus.innerHTML = `
            Name: ${venusData.name} <br>
                Distance (Light Years): ${venusData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${venusData.mass}<br>
                        Length of Year: ${venusData.period} days<br>
                            Radius (Relative to Jupiter): ${venusData.radius}<br>
                                Semi-Major Axis (AU): ${venusData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${venusData.temperature}<br> `
    }

    getVenus()
})

earthButton.addEventListener('click', () => {
    async function getEarth() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=earth', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const earthData = data[0]

        earth.innerHTML = `
            Name: ${earthData.name} <br>
                Distance (Light Years): ${earthData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${earthData.mass}<br>
                        Length of Year: ${earthData.period} days<br>
                            Radius (Relative to Jupiter): ${earthData.radius}<br>
                                Semi-Major Axis (AU): ${earthData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${earthData.temperature}<br> `
    }

    getEarth()
})

marsButton.addEventListener('click', () => {
    async function getMars() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=mars', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const marsData = data[0]

        mars.innerHTML = `
            Name: ${marsData.name} <br>
                Distance (Light Years): ${marsData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${marsData.mass}<br>
                        Length of Year: ${marsData.period} days<br>
                            Radius (Relative to Jupiter): ${marsData.radius}<br>
                                Semi-Major Axis (AU): ${marsData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${marsData.temperature}<br> `
    }

    getMars()
})


jupiterButton.addEventListener('click', () => {
    async function getJupiter() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=jupiter', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const jupiterData = data[0]

        jupiter.innerHTML = `
            Name: ${jupiterData.name} <br>
                Distance (Light Years): ${jupiterData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${jupiterData.mass}<br>
                        Length of Year: ${jupiterData.period} days<br>
                            Radius (Relative to Jupiter): ${jupiterData.radius}<br>
                                Semi-Major Axis (AU): ${jupiterData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${jupiterData.temperature}<br> `
    }

    getJupiter()
})

saturnButton.addEventListener('click', () => {
    async function getSaturn() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=saturn', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const saturnData = data[0]

        saturn.innerHTML = `
            Name: ${saturnData.name} <br>
                Distance (Light Years): ${saturnData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${saturnData.mass}<br>
                        Length of Year: ${saturnData.period} days<br>
                            Radius (Relative to Jupiter): ${saturnData.radius}<br>
                                Semi-Major Axis (AU): ${saturnData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${saturnData.temperature}<br> `
    }

    getSaturn()
})

uranusButton.addEventListener('click', () => {
    async function getUranus() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=uranus', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const uranusData = data[0]

        uranus.innerHTML = `
            Name: ${uranusData.name} <br>
                Distance (Light Years): ${uranusData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${uranusData.mass}<br>
                        Length of Year: ${uranusData.period} days<br>
                            Radius (Relative to Jupiter): ${uranusData.radius}<br>
                                Semi-Major Axis (AU): ${uranusData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${uranusData.temperature}<br> `
    }

    getUranus()
})


neptuneButton.addEventListener('click', () => {
    async function getNeptune() {
        const resp = await fetch('https://api.api-ninjas.com/v1/planets?name=neptune', {
            headers: { 'X-Api-Key': "5SRD/spXcrXWHoETKcaYgQ==bbJZYNVbaxrFkwg8" },
        })
        const data = await resp.json()
        console.log(data);
        console.log(typeof data);
        const neptuneData = data[0]

        neptune.innerHTML = `
            Name: ${neptuneData.name} <br>
                Distance (Light Years): ${neptuneData.distance_light_year}<br>
                    Mass (Relative to Jupiter): ${neptuneData.mass}<br>
                        Length of Year: ${neptuneData.period} days<br>
                            Radius (Relative to Jupiter): ${neptuneData.radius}<br>
                                Semi-Major Axis (AU): ${neptuneData.semi_major_axis}<br>
                                    Temperature (Kelvin): ${neptuneData.temperature}<br> `
    }

    getNeptune()
})