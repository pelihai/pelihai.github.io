


$( document ).ready(function() {
    var gallery = $('#gallery').justifiedGallery({
        rowHeight : 200,
        lastRow : 'justify',
        margins : 3,
        randomize : true
    });

    gallery.on('jg.complete', function() {
        $('#gallery a').swipebox({hideBarsDelay : false})
    });




/*
 function readMultipleFiles(evt) {
    //Retrieve all the files from the FileList object
    var files = evt.target.files; 

    if (files) {
        for (var i=0, f; f=files[i]; i++) {
              var r = new FileReader();
            r.onload = (function(f) {
                return function(e) {
                    var contents = e.target.result;
                    $('body').append('<h1>' + f.name + '</h1><img src="img/' + f.name + '"/>');
                };
            })(f);

            r.readAsText(f);
        }   
    } else {
          alert("Failed to load files"); 
    }
  }

  document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);
*/







});
