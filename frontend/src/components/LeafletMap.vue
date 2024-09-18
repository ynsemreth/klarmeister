<template>
<div id="map" :style="{ height: '400px', width: '100%' }"></div>
</template>


<script>
import L from 'leaflet';

export default {
    mounted() {
        const map = L.map('map').setView([47.766, 11.372], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([47.766, 11.372])
            .addTo(map)
            .bindPopup('Im Thal 9, 82377 Penzberg')
            .openPopup();
    },
};
</script>
  
  
<style scoped>
#map {
    height: 400px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
