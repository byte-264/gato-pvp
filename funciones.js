var player=1;
var cont=0;

function gato(boton){
    /*Jugador inicia valiendo 1, el contador aumenta cada que se de click al boton*/
    if(player==1){
        document.getElementById(boton).innerHTML="X";
        player=2;
        cont++;
    }
    else if(player==2){
        document.getElementById(boton).innerHTML="O";
        player=1;
        cont++;
    }
    //Deshabilito los botones que ya se 'usaron' y cambio su color a gris
    document.getElementById(boton).disabled=true;
    document.getElementById(boton).style.background='#B8B8B8';
    document.getElementById('volver').style.background='#7db9f1';
    //Reviso si ya ganó alguien
    revisar();
    
    denuevo();
}

//Reviso si ya hay un ganador, hay 11 maneras posibles de ganar
function revisar(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById('bt1').innerHTML;
    b2=document.getElementById('bt2').innerHTML;
    b3=document.getElementById('bt3').innerHTML;
    b4=document.getElementById('bt4').innerHTML;
    b5=document.getElementById('bt5').innerHTML;
    b6=document.getElementById('bt6').innerHTML;
    b7=document.getElementById('bt7').innerHTML;
    b8=document.getElementById('bt8').innerHTML;
    b9=document.getElementById('bt9').innerHTML;

    if((b1==b2 && b2==b3) ||
     (b4==b5 && b5==b6) ||
     (b7==b8 && b8==b9) ||
     (b1==b4 && b4==b7) ||
     (b2==b5 && b5==b8) ||
     (b3==b6 && b6==b9) ||
     (b1==b5 && b5==b9) ||
     (b3==b5 && b5==b7)){
        switch(player){
            //Si hay un ganador reviso si es el jugador 1 o el jugador 2
            case 1:
                document.getElementById("resultado").innerHTML="Ganador jugador 2";
               off();
                break;
            case 2:
                document.getElementById("resultado").innerHTML="Ganador jugador 1";
               off();
                break;    
        }
    }
    else if(cont==9){
        document.getElementById("resultado").innerHTML="Hay empate";
        off();
    }
}

/*Deshabilito los botones, los coloreo para saber que no están disponibles
y coloreo el boton de reiniciar para saber que está disponible*/
function off(){
    for(var i=1;i<=9;i++){
        document.getElementById('bt'+i).disabled=true;
        document.getElementById('bt'+i).style.background='#B8B8B8';
    }
    document.getElementById('volver').style.background='#5BC3FC';
    cont=0;
}

//Habilito los botones y los coloreo para saber que ya están disponibles
//Deshabilito el boton de volver a jugar para indicar que no está disponible
function on(){
    for(var i=1;i<=9;i++){
        document.getElementById('bt'+i).disabled=false;
        document.getElementById('bt'+i).innerHTML=i;
        document.getElementById('bt'+i).style.background='#7db9f1';
    }
    document.getElementById("resultado").innerHTML="";  
    document.getElementById('volver').style.background='#B8B8B8';
    cont=0;
}

//Deshabilito el boton y lo coloreo para indicar que no está disponible
function inicio(){
    document.getElementById('volver').disabled=true;
    document.getElementById('volver').style.background='#B8B8B8';
}

//Habilito el boton de volver a jugar
function denuevo(){
    document.getElementById('volver').disabled=false;
}