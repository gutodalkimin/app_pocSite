import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
export var MapPage = (function () {
    function MapPage(confData) {
        this.confData = confData;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.confData.getMap().then(function (mapData) {
            var mapEle = document.getElementById('map');
            var map = new google.maps.Map(mapEle, {
                center: { lat: -23.09528614, lng: -50.3713274 },
                zoom: 16
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    MapPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-map',
                    templateUrl: 'map.html'
                },] },
    ];
    /** @nocollapse */
    MapPage.ctorParameters = [
        { type: ConferenceData, },
    ];
    return MapPage;
}());
