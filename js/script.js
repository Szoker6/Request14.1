  
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
    window.initMap = function() {
	
		var uluru = {lat: 41.899275, lng: 12.478255};
		
		var map = new google.maps.Map(document.getElementById('map'), {
		
			zoom: 4,
			center: uluru
		});
		
		var marker = new google.maps.Marker({
			
			position: uluru,
			map: map
		}); 
	}	 

});
