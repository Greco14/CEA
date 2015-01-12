function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
			center: new google.maps.LatLng(25.436938,-100.915228),
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);