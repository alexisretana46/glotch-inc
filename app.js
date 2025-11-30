// Crear mapa centrado en México
const map = L.map('map').setView([23.6345, -102.5528], 5);

// Capa de OpenStreetMap (funciona en Android y archivos locales)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Marcador de ejemplo
L.marker([23.6345, -102.5528]).addTo(map)
  .bindPopup("Mapa funcionando con Glotch-Inc 😊");

