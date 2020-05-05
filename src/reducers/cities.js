export function weatherData(state = {}, action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.fetchedData;
        default:
            return state;
    }
}

export function activePlace(state = 0, action) {
    switch (action.type) {
        case 'SET_ACTIVE_PLACE':
            return action.placeIndex;
        default:
            return state;
    }
}

export function cities(state = citiesArray, action) {
    switch (action.type) {
        case 'SET_CITIES':
            return action.cities ;

        default:
            return state;
    }
}

var citiesArray = [
        { name: "Alicante", zip: "03005" },
        { name: "Ávila", zip: "05000"},
        { name: "Barcelona", zip: "08002"},
        { name: "Girona", zip: "17000"},
        { name: "Granada", zip: "18000"},
        { name: "Málaga", zip: "29000"},
        { name: "Madrid", zip: "28001" },
        { name: "Murcia", zip: "30000" },
        { name: "Valencia", zip: "46116"},
        { name: "Seville", zip: "41001"},
        { name: "Melilla", zip: "52000"}
        ]
