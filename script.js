var score1=0,score2=0,p,res,py1,py2,b=false;
let preid1=null,preimg1=null,preid2=null,preimg2=null,id1=null,id2=null;
let flag=false,check,bit,max100=0,ladder_chance;
function fun(){
    document.getElementId("win_audio").src='audio/loop.mp3';
    var loop=document.getElementById("wa").load();
    var shadow='1px 1px 20px white';
    setInterval(
        ()=>{
            document.getElementById("play1").style.boxShadow=shadow;
            document.getElementById("play2").style.boxShadow=shadow; 
            if(shadow=='1px 1px 20px white'){
                shadow=''
            } else{
                shadow='1px 1px 20px white'
            }
    },700);
}

function img(score,bit){
    let id='a'+score;
    let audio=document.getElementById("audio");
    
   
    let img=document.createElement("img");
    img.setAttribute('class','id');
    if(bit==1){
        img.src='img/laugh.gif';
        audio.src='audio/ladders.mp3';
        document.getElementById("p").load();
    }else if(bit==-1){
        img.src='img/cry.jpg';
        audio.src='audio/loseing.mp3';
        document.getElementById("p").load();
    }else {
        img.src='';
    }

    img.height=30;
    img.width=30;
    img.style.borderRadius='50px';
    document.getElementById(id).appendChild(img);
    setTimeout(() => {
        document.getElementById(id).removeChild(img);
    }, 1000);
}

function current(check){
    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");
    py1=document.getElementById("play1");
    py2=document.getElementById("play2");
    //for removing previous css
    p1.style.boxShadow="";
    if(check==2){
        p1.style.boxShadow="2px 2px 40px green";
        p2.style.boxShadow="";
        py1.innerHTML="Player1 turn";
        py2.innerHTML="";
    }else if(check==1){
        p2.style.boxShadow="2px 2px 40px red";
        p1.style.boxShadow="";
        py1.innerHTML="";
        py2.innerHTML="Player2 turn";
    }
}
function ladder(player){
    if(player==1){
        ladder_chance=1;
    }else{
        ladder_chance=2;
    }
}
function checkScore(score,player){
    if(score==4){
        img(score,1);
        ladder(player);
        return 25;
    }else if(score==13){
        img(score,1);
        ladder(player);
        return 46;
    }else if(score==33){
        img(score,1);
        ladder(player);
        return 49;
    }else if(score==42){
        img(score,1);
        ladder(player);
        return 63;
    }else if(score==50){
        img(score,1);
        ladder(player);
        return 69;
    }else if(score==62){
        img(score,1);
        ladder(player);
        return 81;
    }else if(score==74){
        img(score,1);
        ladder(player);
        return 92;
    }else if(score==27){
        img(score,-1);
        return 5;
    }else if(score==40){
        img(score,-1);
        return 3;
    }else if(score==43){
        img(score,-1);
        return 18;
    }else if(score==54){
        img(score,-1);
        return 31;
    }else if(score==66){
        img(score,-1);
        return 45;
    }else if(score==76){
        img(score,-1);
        return 58;
    }else if(score==89){
        img(score,-1);
        return 53;
    }else if(score==99){
        img(score,-1);
        max100=0;
        return 41;
    } else if(score==100){
        img(score,0)
        return 100;
    }else if(score==101||score==102||score==103||score==104||score==105){
        max100=1;
        return score;
    }
    else{
        return score;
    }
}

function funp1(){
    check=1;
    if(flag){
        return 0;
    }
    let btn=document.getElementById("img");
    btn.src='img/dice.gif';
    
    let audio=document.getElementById("audio");
    audio.src='audio/roll-.mp3';
    document.getElementById("p").load();
    setTimeout(()=>{
        audio.src='';
    },500);
    //remove img tag from previous position
    if(score1>0){
        document.getElementById(preid1).removeChild(preimg1);
    }
    
    //generate random number
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let six=(randomNumber==6)
    if(six||score1>0){
        
        //display 
        score1=score1+randomNumber;
        if(six&&score1==6){
            score1=1;
        }
        score1=checkScore(score1,1);
        if(max100==1){
            score1=score1-randomNumber;
        }max100=0;
        
        id1='a'+score1;
        //display dice number on screen
        console.log("p1: "+id1,score1,max100);

        if(score1==100){
            //window.location='winner1.html';
            var p1=document.getElementById("p1").onclick="";
            var p2=document.getElementById("p2").onclick="";
            addImage(1);
            let win=document.getElementById("win");
            win.src='img/winner1.png';
            py1.innerHTML='';
            py2.innerHTML='';
            document.getElementsByTagName("body")[0].style.backgroundImage='url("img/cel.gif")';

            let audio=document.getElementById("win_audio");
            audio.src='audio/win.mp3';
            document.getElementById("wa").load();
        }

        if(score1!=100){
            setTimeout(()=>{
                addImage(1);
            },300)
            
        }
        
    }
    setTimeout(() => {
        let dice="img/"+randomNumber+".jpg";
        btn.src=dice;
    }, 100);
    
    if(randomNumber==6||ladder_chance==1){
        flag=false;
        check=2;
        ladder_chance=0;
    }else{
        flag=true;
    }

    current(check);
    

}
function addImage(arg){
    //creating image tag and append
    let img=document.createElement("img");
    img.setAttribute('class','id');
    img.height=30   ;
    img.width=30;
    img.style.borderRadius='50px';
    if(arg==1){ 
        img.src='img/plog1.jpg';  
        document.getElementById(id1).appendChild(img); 
        preid1=id1;
        preimg1=img;
    }else{
        img.src='img/plog2.jpg';  
        document.getElementById(id2).appendChild(img); 
        preid2=id2;
        preimg2=img;
    }
    
        audio.src='audio/step.mp3';
        document.getElementById("p").load();
    
}
function funp2(){
    check=2;
    if(flag===false){
        return 0;
    }
    var btn=document.getElementById("img");
    btn.src='img/dice.gif';
    
        let audio=document.getElementById("audio");
        audio.src='audio/roll-.mp3';
        document.getElementById("p").load();
    

    //remove img tag from previous position
    if(score2>0){
        document.getElementById(preid2).removeChild(preimg2);
    }
   
    //generate random number
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    let six=(randomNumber==6)
    if(six||score2>0){
        
        //display 
        score2=score2+randomNumber;
        if(six&&score2==6){
            score2=1;
        }
        score2=checkScore(score2,2);
        if(max100==1){
            score2=score2-randomNumber;
        }max100=0;

        
        id2='a'+score2;
        //display dice number on screen
        console.log("p2: "+id1,score2,max100);
        if(score2==100){
            //window.location='winner2.html';
            var p1=document.getElementById("p1").onclick="";
            var p2=document.getElementById("p2").onclick="";
            addImage(2);

            let win=document.getElementById("win");
            win.src='img/winner2.png';
            py1.innerHTML='';
            py2.innerHTML='';
            document.getElementsByTagName("body")[0].style.backgroundImage='url("img/cel.gif")';

            let audio=document.getElementById("win_audio");
            audio.src='audio/win.mp3';
            document.getElementById("wa").load();
            
        }

        if(score2!=100){
            setTimeout(()=>{
                addImage(2);
            },300)
        }

    }
    setTimeout(() => {
        let dice="img/"+randomNumber+".jpg";
        btn.src=dice;
    }, 100);
    
    if(randomNumber==6||ladder_chance==2){
        flag=true;
        check=1;
        ladder_chance=0;
    }else{
        flag=false;
    }

    current(check);

}
function rules(){
    if(b){
        document.getElementById("rules").style.display='none';
        b=false;
    }else{
        document.getElementById("rules").style.display='inline';
        b=true;
    }
    
}
