const database = {
    Areas: [{
        id: 1,
        location: "North East",
        name: "Chamfort River",
        // services: "rafting, canoeing, fishing"

    }, {
        id: 2,
        location: "North",
        name: "Lost Wolf Hicking Trail",
        // services: "hicking, picnicking, rock climbing"

    }, {
        id: 3,
        location: "North West",
        name: "The Lodge",
        // services: "lodgeing, parking, information desk, picnicking"

    }, {
        id: 4,
        location: "South West",
        name: "Grand River",
        // services: "fishing, hicking"

    }, {
        id: 5,
        location: "South",
        name: "Campgrounds",
        // services: "information desk, lodging, parking"

    }, {
        id: 6,
        location: "South East",
        name: "Pin Bluffs Trails",
        // services: "food vendors, hicking, picnicking, ziplining"

    }],
    services: [{
        id: 1,
        name: "rafting",
    }, {
        id: 2,
        name: "canoeing",
    }, {
        id: 3,
        name: "fishing",
    }, {
        id: 4,
        name: "hicking",
    }, {
        id: 5,
        name: "picnicking",
    }, {
        id: 6,
        name: "rock climbing",
    }, {
        id: 7,
        name: "lodging",
    }, {
        id: 8,
        name: "parking",
    }, {
        id: 9,
        name: "information desk",
    }, {
        id: 10,
        name: "office park",
    },
    {
        id: 11,
        name: "children play areas",
    },
    {
        id: 12,
        name: "zipline",
    },
    {
        id: 13,
        name: "food vendors",
    }],
    areaServices: [
        { id: 1, serviceId: 1, areaId: 1 },
        { id: 2, serviceId: 2, areaId: 1 },
        { id: 2, serviceId: 3, areaId: 1 },
        { id: 3, serviceId: 3, areaId: 4 },
        { id: 4, serviceId: 4, areaId: 2 },
        { id: 4, serviceId: 4, areaId: 4 },
        { id: 4, serviceId: 4, areaId: 6 },
        { id: 5, serviceId: 5, areaId: 2 },
        { id: 5, serviceId: 5, areaId: 3 },
        { id: 5, serviceId: 5, areaId: 6 },
        { id: 6, serviceId: 6, areaId: 2 },
        { id: 7, serviceId: 7, areaId: 3 },
        { id: 7, serviceId: 7, areaId: 5 },
        { id: 8, serviceId: 8, areaId: 3 },
        { id: 8, serviceId: 8, areaId: 5 },
        { id: 9, serviceId: 9, areaId: 3 },
        { id: 9, serviceId: 9, areaId: 5 },
        { id: 10, serviceId: 10, areaId: 5 },
        { id: 11, serviceId: 11, areaId: 5 },
        { id: 12, serviceId: 12, areaId: 6 },
        { id: 13, serviceId: 13, areaId: 6 },
    ],
    guest: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        areaId: 1
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        areaId: 2
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        areaId: 2
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        areaId: 3
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        areaId: 4
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        areaId: 4
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        areaId: 5
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        areaId: 6
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        areaId: 6
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        areaId: 6
    }],
}

export const getAreas = () => {
    return database.Areas.map(area => ({ ...area }))
}

export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}
export const getAreaServices = () => {
    return database.areaServices.map(service => ({ ...service }))
}
export const getGuest = () => {
    return database.guest.map(guest => ({ ...guest }))
}
