// Al incluir el SDK de Goggle, podemos instanciar el servicio.
// Este será el que debas inyectar al modelo para que pueda hacer las llamadas
const service = new google.maps.places.PlacesService(document.createElement('div'));

// Buscar sitios cercanos por tipo
// https://developers.google.com/maps/documentation/javascript/places#place_search_requests
function searchNearByType() {
  return new Promise((resolve, reject) => {
    let request = {
      location: new google.maps.LatLng(41.411549, 2.194118), // Barcelona
      radius: 50000, // 50 Km
      keyword: 'supermarket', //restaurant, bakery, bar, museum, gym, supermarket
    }

    service.nearbySearch(request, resolve);
  });
}

// Buscar sitios cercanos por nombre
// https://developers.google.com/maps/documentation/javascript/places#place_search_requests
function searchNearByName() {
  return new Promise((resolve, reject) => {
    let request = {
      location: new google.maps.LatLng(41.411549, 2.194118), // Barcelona
      radius: 50000, // 50 Km
      keyword: '100 montaditos', // Nombre a buscar
    }

    service.nearbySearch(request, resolve);
  });
}

// Obtener los detalles de un lugar
// https://developers.google.com/maps/documentation/javascript/places#place_details
function placeDetails() {
  return new Promise((resolve, reject) => {
    let request = {
      placeId: "ChIJrTeoTCG9pBIRp2JDFQ1GM3o",
      fields: [
        'formatted_address',
        'name',
        'rating',
      ]
    }

    service.getDetails(request, resolve);
  });
}

placeDetails().then(data => console.log(data));
