import { getAreaServices, getServices, getAreas, getGuest } from "./database.js";
// import { guestList } from "./guest.js";
const areas = getAreas()
const services = getServices()
const areaServices = getAreaServices()
const guests = getGuest()

export const serviceList = () => {
    let html = '<ul>'
    for (const service of services) {
        html += `<li class="service-li" id="service--${service.id}">${service.name}</li>`
    }
    html += "</ul>"
    return html
}



//Add event listener to each service to inform where selected service can be found

const filterWalkerCitiesByWalker = (services) => {
    let assignedCities = []

    for (const currentAssighnment of areaServices) {

        if (currentAssighnment.serviceId === services.id) {

            assignedCities.push(currentAssighnment)
        }
    }
    return assignedCities
}


const assignedCityNames = (assignments) => {
    let cityNames = ''

    for (const currentAssighnment of assignments) {

        for (const currentCity of areas) {
            if (currentCity.id === currentAssighnment.areaId) {

                cityNames += `${currentCity.name} and `
            }
        }
    }
    return cityNames
}




document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("service")) {
        const [, serviceId] = itemClicked.id.split("--")



        for (const currentService of services) {

            if (currentService.id === parseInt(serviceId)) {
                const assignments = filterWalkerCitiesByWalker(currentService)
                const area = assignedCityNames(assignments)
                window.alert(`${currentService.name} is in ${area}  `)
            }
        }
    }
}
)