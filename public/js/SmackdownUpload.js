function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

jQuery(document).ready(function($) {  
  // Used like so
  $.getJSON("js/SmackdownIndex.json", function(json) {
    var arr = json.memes;
    arr = shuffle(arr);

    var allImages = "";


    for (var i = 0; i < arr.length; i++) {
      var img = document.createElement("IMG");
      img.setAttribute("src", "imgs/"+arr[i].fileName+".jpg");
      //or however you get a handle to the IMG
      var width = img.naturalWidth;
      var height = img.naturalHeight;
      var scaler = width - 400;
      width = width - scaler;
      height = height - scaler;

      allImages += '<div class="container"><img src="imgs/'+arr[i].fileName+'.jpg" width='+width+' height=auto><button style="font-size:24px" class="btn"><i class="fa fa-plus-circle"></i></button></div>';
    }

    $('.memes').append(allImages);
    enlargeImages();
  });
});