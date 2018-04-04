function nextImg(currImage, imageCount) {
  if(currImage+1 >= imageCount) {
       return 0;
  }
  else {
    return currImage+1;
  }
}

function prevImg(currImage, imageCount) {
  if(currImage-1 < 0) {
       return imageCount-1;
  }
  else {
    return currImage-1;
  }
}

function enlargeImages() {
    var currImage = 0;
    var imageCount = $('.container').size;
  
    $('.container').on('click', function () {
        var image = $(this).children('img').attr('src');
        var images = $('.container');
        imageCount = images.length;
        currImage = images.index($(this));
        $('#myModal').show('start', function () {
            $(".showimage").attr("src", image);
        });
    });
  
    $('.modal').on('click', function (e) {
        if (e.target !== this)
          return;
        
        $('#myModal').hide();
    });
  
    $('.right').on('click', function () {
        currImage = nextImg(currImage, imageCount);
        var image = $('.container').eq(currImage).children('img').attr('src');
        $(".showimage").attr("src", image);
    });
  
    $('.left').on('click', function () {
        currImage = prevImg(currImage, imageCount);
        var image = $('.container').eq(currImage).children('img').attr('src');
        $(".showimage").attr("src", image);
    });
}