import React, { Component } from 'react';

const GoogleMapsLoader = require('google-maps');
      GoogleMapsLoader.VERSION = '3.14';
      GoogleMapsLoader.LIBRARIES = ['places'];
      GoogleMapsLoader.KEY = 'AIzaSyBI5cYJFHCsdpNt3VVE5gqJDir94zt_qcw';

export default class GoogleMap extends Component {
  componentDidMount() {
    let _this = this;
    let map = this.refs.map;
    GoogleMapsLoader.load(function(google){
      _this.loadGoogleMap(map, google);
    });
  }

  loadGoogleMap(element, google){
    var work = new google.maps.LatLng(51.521243, -0.13977);
    var map = new google.maps.Map(element, {
      center: work,
      zoom: 16,
      minZoom: 2,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false,
      backgroundColor:'#222',
    });

    var place_request = {
      placeId: 'ChIJE0OZ0ysbdkgRDSUbs0uheG8'
    };

    var service = new google.maps.places.PlacesService(map);
    service.getDetails(place_request, function(place, status){
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // To add the marker to the map, use the 'map' property
        var marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map
        });
                
        var contentString = '<div class="map-marker-info">'+
        '<h4 class="title">Chris Kinch @ '+ place.name +'</h4>'+
        '<p class="map-marker-meta">'+ place.vicinity +'</p>'+
        '<p>Current workplace and second home of Chris Kinch. Resident since August 2008. Coding as we speak.</p>'+
        '</div>';

        infowindow.setContent(contentString);
        infowindow.open(map, marker);

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, this);
        });
      }  
    });

    var infowindow = new google.maps.InfoWindow({
        maxWidth: 370,
        disableAutoPan: true
    });
  }

  render() {
    return (
      <div id="block-googlemapfullwidth" ref="map"></div>
    );
  }
}