var wordToFind= document.getElementById("btnChoix").addEventListener("click",function(){
    var toto = memorizeWord();
    divTrialsCreation(toto);
    this.parentNode.remove();
    
})

function memorizeWord(){
    console.log(document.getElementById("wordSelected").value);
    return document.getElementById("wordSelected").value;
}
function divTrialsCreation(toto){
    //creation div principal
    var divEssais= document.createElement("div");
    divEssais.setAttribute("class","divTrials");
    //div squelette mot
    var squeletteMot=document.createElement("p")
    squeletteMot.setAttribute("class","squelette");
    var motVide=""
    for(var i=0; i<toto.length;i++){
        motVide=motVide+" _ ";
    }
    squeletteMot.textContent=motVide;
    divEssais.appendChild(squeletteMot);
    console.log(motVide);
    //placement div
    var placement= document.getElementsByClassName("wordSelectedDiv")[0];
    document.body.insertBefore(divEssais,placement);


}