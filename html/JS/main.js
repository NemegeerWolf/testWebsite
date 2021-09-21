var mijnAfbeelding = document.querySelector('img');
var i = 0;
var afbeeldingen = ["afbeeldingen/winter/winter1.jpg","afbeeldingen/winter/winter2.1.jpg","afbeeldingen/winter/winter2.jpg", "afbeeldingen/winter/winter3.jpg"
,"afbeeldingen/winter/winter4.jpg", "afbeeldingen/winter/winter5.jpg", "afbeeldingen/winter/winter6.jpg", "afbeeldingen/winter/winter7.jpg"
,"afbeeldingen/winter/winter8.jpg", "afbeeldingen/winter/winter9.jpg", "afbeeldingen/winter/winter10.jpg", "afbeeldingen/winter/winter11.jpg" ];
mijnAfbeelding.onclick = function() {
   // var mijnSrc = mijnAfbeelding.getAttribute('src');   
   
    mijnAfbeelding.setAttribute ('src', afbeeldingen[i]);
    i++;
    if(i == 12) {
        i = 0;
    }
    
}