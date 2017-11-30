// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require rails-ujs
//= require_tree .

$(document).ready(function (){

    function initialize() {
      var mapOptions = {
      center: { lat: 40.8296, lng: -73.9262 },
      zoom: 16
      };
        

     var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);    
        var image = "<%= asset_path 'yankee_stadium.jpeg'%>"
      var marker = new google.maps.Marker({
      position: { lat: 40.8296, lng: -73.9262 },
      map: map,
     title: 'Yankee Stadium',
     icon: image,
    });
     var contentString = '<h2>Yankee Stadium</h2>' +
        '<p>Home of the Greatest Franchise in Sports</p>';

    var infowindow = new google.maps.InfoWindow({
       content: contentString
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
     });
    }
      
    google.maps.event.addDomListener(window, 'load', initialize);
});