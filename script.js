$(init);

function init() {
    
    //initialisation
    $(accueil);
    $(blog);
    $(propos);
    
    $("#accueil").show();
    $("#blog").hide();
    $("#propos").hide();
    $(".cours").hide();

    //bouton de menu
    
    $("#btnAccueil").click(btnAccueil);
    $("#btnBlog").click(btnBlog);
    $("#btnPropos").click(btnPropos);

    //bouton de Formation
    $("#module1").click(formation1);
    $("#module2").click(formation2);
    $("#module3").click(formation3);
    $("#module4").click(formation4);

    //Video
    $(".videoCours").click(lecture);

} //fin init

////////////////////////////////////
/*Javascript pour les boutons menu*/
////////////////////////////////////

function btnAccueil() {
    $("#accueil").show();
    $("#blog").hide();
    $("#propos").hide();
} //fin btnAccueil

function btnBlog() {
    $("#accueil").hide();
    $("#blog").show();
    $("#propos").hide();
    $("#monMedia").attr("src", "https://www.youtube.com/embed/SM2Cznw6e-g");
} //fin btnBlog

function btnPropos() {
    $("#accueil").hide();
    $("#blog").hide();
    $("#propos").show();
    $("#monMedia").attr("src", "https://www.youtube.com/embed/SM2Cznw6e-g");
} //fin btnPropos

///////////////////////////
/*Chargement des contenus*/
///////////////////////////

function accueil() {
    $("#accueil").load("template/contenus/accueil.txt");
} //fin accueil

function blog() {
    $("#prestation").load("template/contenus/blog.txt");
} //fin blog

function propos() {
    $("#propos").load("template/contenus/propos.txt");
} //fin propos

////////////////////////////////////////////////
/*Javascript pour la partie du choix des cours*/
////////////////////////////////////////////////

function formation1() {
    $("#formation1").show();
    $("#formation2").hide();
    $("#formation3").hide();
    $("#formation4").hide();
} //fin formation1

function formation2() {
    $("#formation1").hide();
    $("#formation2").show();
    $("#formation3").hide();
    $("#formation4").hide();
} //fin formation2

function formation3() {
    $("#formation1").hide();
    $("#formation2").hide();
    $("#formation3").show();
    $("#formation4").hide();
} //fin formation3

function formation4() {
    $("#formation1").hide();
    $("#formation2").hide();
    $("#formation3").hide();
    $("#formation4").show();
} //fin formation4

//////////////////////
/*Gestion des videos*/
//////////////////////

function lecture() {
    let lien = $(this).attr("id");
    $("#monMedia").attr("src", lien);
    $(".cours").hide();
    $("#accueil").show();
    $("#blog").hide();
    $("#propos").hide();
}


