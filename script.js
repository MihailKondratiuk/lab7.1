document.getElementById('a1').onclick = function(){myf('a1');};
document.getElementById('a2').onclick = function(){myf('a2');};
document.getElementById('a3').onclick = function(){myf('a3');};
document.getElementById('a4').onclick = function(){myf('a4');};
document.getElementById('a5').onclick = function(){myf('a5');};
document.getElementById('a6').onclick = function(){myf('a6');};
document.getElementById('a8').onclick = function(){myf('a8');};
document.getElementById('a7').onclick = function(){myf('a7');};
document.getElementById('a9').onclick = function(){myf('a9');};
var setted = [];
for(var i=0;i<9;i++)
  setted[i]=0;
function myf(n){
  if(setted[parseInt(n.substring(1))-1]==0){
    document.getElementById(n).innerHTML = '<img src="a.png"/>';
    setted[parseInt(n.substring(1))-1] = 1;
  }else return;
  var k =0;
  for(var i=0;i<9;i++)if(setted[i]!=0)k++;
  console.log(k);
  if(k==9 && check(setted)==0){
    alert("Tie");
    return;
  }
  var rand;
  do{
  rand = Math.round(Math.random()*9);
  }while(setted[rand]!=0);
 setted[rand] =2;
  document.getElementById('a'+(rand+1)).innerHTML = '<img src="o.png"/>';
  if(check(setted)==1){
    alert("Tic-Tac-Toe Player X wins");
  }
  if(check(setted)==2){
    alert("Tic-Tac-Toe Player O wins");
  }
}
function check(map){
    if(map[0]==map[4] && map[4]==map[8] && map[0]!=0)
        return map[0];
    else if(map[2]==map[4] && map[4]==map[6] && map[2]!=0)
        return map[2];
    else if(map[0]==map[1] && map[1]==map[2] && map[0]!=0)
        return map[0];

    else if(map[3]==map[4] && map[4]==map[5] && map[3]!=0)
       return map[3];

    else if(map[6]==map[7] && map[7]==map[8] && map[6]!=0)
        return map[6];
    else if(map[0]==map[3] && map[3]==map[6] && map[0]!=0)
        return map[0];

    else if(map[1]==map[4] && map[4]==map[8] && map[1]!=0)
        return map[1];
    else if(map[2]==map[5] && map[5]==map[8] && map[2]!=0)
        return map[2];
    else return 0;
}
