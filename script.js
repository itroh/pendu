const wordToFind= document.getElementById("btnChoix").addEventListener("click",function(){
    var toto = memorizeWord();
    this.parentNode.hidden=true;
    gameOn(toto);
})

function memorizeWord(){
    console.log(document.getElementById("wordSelected").value);
    return document.getElementById("wordSelected").value;
}


function init(){
    document.getElementById("tentative").hidden=true;
    document.getElementById("looser").hidden=true;
    document.getElementById("winner").hidden=true;


    document.getElementById("score").textContent=10;
}
init();


function gameOn(mot){
    document.getElementById("tentative").hidden=false;
    var squeletteMot="";
    for(var i =0;i<mot.length;i++){
        squeletteMot=squeletteMot+"-";
    }
    var countScore=10;

    document.getElementById("squelette").textContent=squeletteMot;
    document.getElementById("btnTentative").addEventListener("click",function(){
        testLetter(document.getElementById("motTente").value,mot);
        countScore--;
        document.getElementById("score").textContent=countScore;
        if(countScore==0){
            document.getElementById("tentative").hidden=true;
            document.getElementById("looser").hidden=false;

        }
        //compte reste cb de lettre à trouver
        var compteurTrou=0;
        for(var i =0; i< document.getElementById("squelette").textContent.length;i++){
            if( document.getElementById("squelette").textContent[i]=="-"){
                compteurTrou ++;
            }
        }
        if(compteurTrou==0){
            console.log("jai gagné");
            document.getElementById("winner").hidden=false;
            document.getElementById("tentative").hidden=true;


        }
    })
    

}
//fct qui retour la position des letttres à MAJ
function testLetter(lettre,mot){
    if(lettre.length!=1){
        console.log("ceci n'est pas une lettre")
    }else {
        var compteur=0;
        var position=[];
        var motRetour=mot.split('');
        for(var i=0;i<mot.length;i++){
            if(mot[i]==lettre){
                compteur++;
                motRetour[i]=lettre;
                position.push(i);
            }else{
                motRetour[i]="-";
            }
        }
        memorizeWord();
        majMot(lettre,position)
        return position;
    }
}
function majMot(lettre, position){
    var tata = document.getElementById("squelette").textContent.split("");
    var tataText="";
    for(var i=0;i<position.length;i++){
        var posTemp=position[i];
        tata[posTemp]=lettre;
    }
    for(var i=0;i<tata.length;i++){
        tataText=tataText+tata[i];
    }
    document.getElementById("squelette").textContent= tataText;
}