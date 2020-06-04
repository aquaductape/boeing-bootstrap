const map = L.map("mapid").setView([15.45, 18.73], 2);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/lishipu/ckb0ww18w16a11joc0z74t6ti/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGlzaGlwdSIsImEiOiJja2Iwd3RwbHAwZHplMzRueHg0NTgxNTd4In0.vV13iJIxpnhaI-0hFHuqwg",
  {
    maxZoom: 20,
  }
).addTo(map);

const circle = L.circle([15.45, 18.73], {
  color: "blue",
  fillColor: "blue",
  fillOpacity: 0.2,
  radius: 16170000,
  // radius: 1017000,
}).addTo(map);

const airplaneIcon = L.icon({
  iconUrl: "../assets/img/airplane-icon.svg",
  iconSize: [28, 28],
  color: "#fff",
  fillColor: "#fff",
  // iconAnchor: [0, 0],
  // popupAnchor: [-3, -76],
});

L.marker([15.45, 18.73], { icon: airplaneIcon }).addTo(map);
