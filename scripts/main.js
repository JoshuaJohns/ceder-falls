import { areasSection } from "./areas.js";
import { guestList } from "./guest.js";
import { serviceList } from "./services.js";



const mainContainer = document.querySelector("#main")

const applicationHtml = `
${areasSection()}



`
mainContainer.innerHTML = applicationHtml



const asideContainer = document.querySelector("#aside")

const aside = `
<aside class="aside">
${guestList()}

</aside>

`
asideContainer.innerHTML = aside

const serviceContainer = document.querySelector("#service")

const service = `

${serviceList()}



`
serviceContainer.innerHTML = service