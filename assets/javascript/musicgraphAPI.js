$(document).ready(function() {

	   //  $("body").on("click","#artist-search-btn", function() {
    //   event.preventDefault()
    //   $(".bs-example-modal-lg").modal("hide")
    //   $("#content").empty()

    // });
	// MUSICGRAPH API!!!
	// api key f344ee98dde459951ae8cbb4f62add7d

	var artistSearch = "Jewel"
	var queryURL = "http://api.musicgraph.com/api/v2/artist/search?api_key=f344ee98dde459951ae8cbb4f62add7d&name=" + artistSearch


	$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      // console.log(response.data[0].musicbrainz_image_url);
      var artistImageURL = response.data[0].musicbrainz_image_url
      var artistImage = $("<img>")
      artistImage.addClass("artist-image")
      artistImage.attr("src", artistImageURL)
      console.log(artistImage[0])
       
      $("#content").append(artistImage[0])

	var musicbrainzSearch = response.data[0].musicbrainz_id
	console.log(musicbrainzSearch)
	var queryURL2 = "http://musicbrainz.org/ws/2/artist/" + musicbrainzSearch
    
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      // console.log(response.data[0].musicbrainz_image_url);
      
    
    });
    });



})