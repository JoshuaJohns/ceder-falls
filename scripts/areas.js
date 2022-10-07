//take each area and assighn it its services
import { getAreas, getServices, getAreaServices, getGuest } from "./database.js";
const areas = getAreas()
const services = getServices()
const areaServices = getAreaServices()
const guest = getGuest()

// export const areasSection = () => {
//     let html = "<ul>"

//     for (const area of areas) {
//         html += `<h2 id="name--${area.id}">${area.name}</h2>`
//         for (const service of services) {
//             html += `<li>${service.name}</li>`
//         }
//     }


//     return html
// }
const filteredServiceAreas = (areas) => {
    let areaWithServices = []
    for (const currentAS of areaServices) {
        if (currentAS.areaId === areas.id) {
            areaWithServices.push(currentAS)
        }
    }
    return areaWithServices
}



const assignedServices = (filteredService) => {
    let service = ''
    for (const currentFilter of filteredService) {
        for (const currentService of services) {
            if (currentService.id === currentFilter.serviceId) {
                service += `<li>${currentService.name}</li>`
            }
        }
    }
    return service
}

export const areasSection = () => {
    let html = ""

    for (const area of areas) {
        const filter = filteredServiceAreas(area)
        const service = assignedServices(filter)
        html += `<section class="area">
        <h2 id="place--${area.id}">${area.name}</h2>
                    <ol>
                     ${service}
                     </ol>
                     </section>`


    }


    return html
}



const employeeOrders = (area) => {
    let amountPerArea = 0

    for (const currentGuest of guest) {
        if (currentGuest.areaId === area.id) {
            amountPerArea += 1
        }
    }

    return amountPerArea
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("place")) {
            const [, areaId] = itemClicked.id.split("--")

            for (const currentArea of areas) {
                if (currentArea.id === parseInt(areaId)) {

                    const guestCount = employeeOrders(currentArea)
                    window.alert(` There is/are ${guestCount} guest in this area. `)

                }
            }
        }
    }
)