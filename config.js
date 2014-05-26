 
var cur = 0;
var l = new Array();
var name = "";
var hp = 100;
var money = 3;
var power = 1;


var p = new Array(); //параметры, не доступные пользователю
p['tv_broken'] = true;
p['room_visited'] = false;
p['computer_on'] = true;
p['fridge_empty'] = true;
p['room2window'] = false;
p['room2cupboard'] = false;
p['time'] = '18:00';
p['fallinwaterchance'] = 0.8;//Вероятность падения в реку (dream.js)
p['numberofretriestosleep'] = 4;//Максимальное количество неудачных попыток уснуть если окно закрыто(dream.js)
p['minimaltimetosleep'] = '18:00';//Без учета остальных параметров.

var fridge = new Array();
//fridge[0] = 'сыр';
 
var h = new Array();
