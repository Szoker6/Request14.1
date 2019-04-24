(function () {
    var carouselWrapper = document.querySelector('.main-carousel')
  
    var templateSlide = document.getElementById('template-slide').innerHTML;
    Mustache.parse(templateSlide);
    var slidesHTML = ""
    slideData.forEach(e => slidesHTML += Mustache.render(templateSlide, e))
    carouselWrapper.insertAdjacentHTML('afterbegin', slidesHTML);

    var flkty = new Flickity(carouselWrapper, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        hash: true
    });

    document.querySelector('.btnRestart').addEventListener('click', function () {
        flkty.select(0)
    })
    var progressBar = document.querySelector('.progress-bar')

    flkty.on('scroll', function (progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + '%';
    });
	
      var infos = document.getElementById('infos');
        window.initMap = function() {
          
          var chiny = {lat: 36.111998, lng: 102.267816};
          var grecja = {lat: 39.417295, lng: 22.588658};
          var newYork = {lat: 40.714527,lng: -73.98648};
          var rio = {lat: -22.906699, lng: -43.188875};
          var rzym = {lat: 41.899275, lng: 12.478255};
          var map = new google.maps.Map(document.getElementById('map'), {
          
              zoom: 7,
              center: rzym
          });
      
          var markerOne = new google.maps.Marker({
              
              position: rzym,            
              map: map
          }); 
          markerOne.addListener('click', function(){
			
			infos.innerHTML = 'To jest Rzym';
        });		
        var markerTwo = new google.maps.Marker({
			position: chiny,
			map: map
        });
        markerTwo.addListener('click', function(){
			
			infos.innerHTML = 'To są Chiny';
        });		
        var markerThree = new google.maps.Marker({
			position: newYork,
			map: map
        });
        markerThree.addListener('click', function(){
			
			infos.innerHTML = 'To jest New York';
        });	
        document.getElementById('center-map').addEventListener('click', function(event){
			event.preventDefault();
	
			map.panTo(newYork);
		
			map.setZoom(10);
        });	   
    }
       
  })();  
  
  
  initMap();

