var score1=0,score2=0,p,res;
let preid1=null,preimg1=null
let preid2=null,preimg2=null,flag=false;let check=2,bit,max100=0;
function img(score,bit){
    let id='a'+score;
    let img=document.createElement("img");
    if(bit==1){
        img.src='img/laugh.gif';
    }else if(bit==-1){
        img.src='img/cry.jpg';
    }else {
        img.src='';
    }
    img.height=30;
    img.width=30;
    img.style.borderRadius='50px';
    document.getElementById(id).appendChild(img);
    setTimeout(() => {
        document.getElementById(id).removeChild(img);
    }, 400);
}
function current(check){
    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");
    if(check==2){
        p1.style.boxShadow="2px 2px 40px green";
        p2.style.boxShadow="";
    }else if(check==1){
        p2.style.boxShadow="2px 2px 40px red";
        p1.style.boxShadow="";
    }
}

function checkScore(score){
    if(score==4){
        img(score,1);
        return 25;
    }else if(score==13){
        img(score,1);
        return 46;
    }else if(score==33){
        img(score,1);
        return 49;
    }else if(score==42){
        img(score,1);
        return 63;
    }else if(score==50){
        img(score,1);
        return 69;
    }else if(score==62){
        img(score,1);
        return 81;
    }else if(score==74){
        img(score,1);
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
        score1=checkScore(score1);
        if(max100==1){
            score1=score1-randomNumber;
        }max100=0;
        
        let id='a'+score1;
        //display dice number on screen
        console.log("p1: "+id,score1,max100);
        if(score1==100){
            window.location='winner1.html';
        }

        if(score1!=100){
        //creating image tag and append
        let img=document.createElement("img");
        img.src='img/plog1.jpg';
        img.height=30   ;
        img.width=30;
        img.style.borderRadius='50px';
        document.getElementById(id).appendChild(img);
        
        preid1=id;
        preimg1=img;
        }
        
    }
    setTimeout(() => {
        let dice="img/"+randomNumber+".jpg";
        btn.src=dice;
    }, 100);
    
    if(randomNumber==6||bit==1){
        flag=false;
        check=2;
    }else{
        flag=true;
    }

    current(check);
    

}
function funp2(){
    check=2;
    if(flag===false){
        return 0;
    }
    var btn=document.getElementById("img");
    btn.src='img/dice.gif';
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
        score2=checkScore(score2);
        if(max100==1){
            score2=score2-randomNumber;
        }max100=0;

        let id='a'+score2;
        //display dice number on screen
        console.log("p2: "+id,score2,max100);
        if(score2==100){
            window.location='winner2.html';
        }

        if(score2!=100){
        //creating image tag and append
        let img=document.createElement("img");
        img.src='img/plog2.jpg';
        img.height=30;
        img.width=30;
        img.style.borderRadius='50px';
        document.getElementById(id).appendChild(img);

        preid2=id;
        preimg2=img;
        }

    }
    setTimeout(() => {
        let dice="img/"+randomNumber+".jpg";
        btn.src=dice;
    }, 100);
    
    if(randomNumber==6||bit==1){
        flag=true;
        check=1;
    }else{
        flag=false;
    }

    current(check,flag);

}
