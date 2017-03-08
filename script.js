$(document).ready(function () {
    var tresc = $(".tresc"),
        przeslij = $(".przeslij"),
        lista = $(".lista");
        
    przeslij.on("click", function (e) {
        e.preventDefault();
        lista.append("<li>"+tresc.val());
    });
    
    
   
});
