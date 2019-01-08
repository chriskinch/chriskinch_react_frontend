'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.VERSION = '3.14';
GoogleMapsLoader.LIBRARIES = ['places'];
GoogleMapsLoader.KEY = 'AIzaSyBI5cYJFHCsdpNt3VVE5gqJDir94zt_qcw';

var GoogleMap = function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    return _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).apply(this, arguments));
  }

  _createClass(GoogleMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;
      var map = this.refs.map;
      GoogleMapsLoader.load(function (google) {
        _this.loadGoogleMap(map, google);
      });
    }
  }, {
    key: 'loadGoogleMap',
    value: function loadGoogleMap(element, google) {
      var work = new google.maps.LatLng(51.521243, -0.13977);
      var map = new google.maps.Map(element, {
        center: work,
        zoom: 16,
        minZoom: 2,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        backgroundColor: '#222'
      });

      var place_request = {
        placeId: 'ChIJE0OZ0ysbdkgRDSUbs0uheG8'
      };

      var service = new google.maps.places.PlacesService(map);
      service.getDetails(place_request, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // To add the marker to the map, use the 'map' property
          var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map
          });

          var contentString = '<div class="map-marker-info">' + '<h4 class="title">Chris Kinch @ ' + place.name + '</h4>' + '<p class="map-marker-meta">' + place.vicinity + '</p>' + '<p>Current workplace and second home of Chris Kinch. Resident since August 2008. Coding as we speak.</p>' + '</div>';

          infowindow.setContent(contentString);
          infowindow.open(map, marker);

          google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, this);
          });
        }
      });

      var infowindow = new google.maps.InfoWindow({
        maxWidth: 370,
        disableAutoPan: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'block-googlemapfullwidth', ref: 'map' });
    }
  }]);

  return GoogleMap;
}(_react.Component);

exports.default = GoogleMap;

//# sourceMappingURL=GoogleMap.js.map