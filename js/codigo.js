$(document).ready(function () {
    //variaveis
    var i = 0;
    var nome = "";
    var caminho = "musica/";
    var extensao = ".mp3";
    var musica = [
     "Boys_Noize_And_Pilo-Cerebral",
     "Boys_Noize-Overthrow",
     "Chlorophyll-M_O_O_N",
     "Cybotron-Clear",
     "DedSec-Amethyst-Watch_Dogs_2",
     "Hudson_Mohawke-100HM",
     "LFO-LFO",
     "Ministry-Jesus_Built_My_Hotrod",
     "Summer_Girlfriends-Lost Boys",
     "The_Prodigy-The_Day_Is_My_Enemy"
     ];
    //próxima musica
    $("#proximo").click(function(){
        if (i < musica.length - 1)
        i++;
        else
        i = 1;
        $("audio").attr("src", caminho + musica[i] + extensao);
        $("#nomeMusica").text(musica[i]);
    });
    $("#anterior").click(function(){
        if (i > 0)
        i--;
        else
        i = musica.length-1;
        $("audio").attr("src", caminho + musica[i] + extensao);
        $("#nomeMusica").text(musica[i]);
    });
    //playlist
    $("#listaMusica").ready(function(){
       for (i = 0; i < musica.length; i++)
           nome += "<br>" + parseInt(i+1) + " - " + musica[i];
        $("#listaMusica").html(nome);
    });
    $("#nomeMusica").text(musica[i]);
});
