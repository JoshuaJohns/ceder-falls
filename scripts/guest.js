import { getAreas, getServices, getAreaServices, getGuest } from "./database.js";
const areas = getAreas()
// const services = getServices()
// const areaServices = getAreaServices()
const guest = getGuest()

export const guestList = () => {
    let guestHTML = '<h2 class="aside-h2">Current Guest</h2><ul>'
    for (const currentGuest of guest) {
        guestHTML += `<li class="aside-li">${currentGuest.name}</li>`
    }
    guestHTML += '</ul>'
    return guestHTML
}


