
var cm = new Array();
cm['fap'] = function (){
    alert('omg cum');
}
l[0] = new Array();
l[0]['text'] = "Введите имя для вашего персонажа.";
l[0]['c'] = new Array();
l[0]['c']['action'] = function(t){
    name = t; 
    load("room");
}

l['room'] = new Array();
l['room']['onload'] = function(){
    if(p['room_visited']){
        l['room']['text'] = 'Комната. В тускло освещенном помещении стоит диван, а напротив него - компьютер.';
        l['room']['c']['text'] = "1 - Пойти на кухню <br> 2 - Сесть за компьютер <br> 3 - Выйти в прихожую <br> 4 - Лечь на диван";
        l['room']['c']['4'] = 'bed';
    }
    p['room_visited'] = true;
}
l['room']['text'] = "Иные миры, безграничное счастье и сбывшиеся мечты... Как только вы, лежа на диване, открыли глаза- эти образы, навеянные вашим аутичным воображением, тут же исчезли, оставив горькое послевкусие возвращения в реальность.Единственный источник света в комнате- монитор, где появляются все новые и новые сообщения людей, общением с которыми вы восполняете свое одиночество. Свет падает на ободранные обои, старую мебель и ваше покрытое прыщами лицо. ";
l['room']['c'] = new Array();
l['room']['c']['text'] = "1 - Пойти на кухню <br> 2 - Сесть за компьютер <br> 3 - Выйти в прихожую <br> 4 - Встать на ноги";
l['room']['c']['1'] = 'kitchen';
l['room']['c']['2'] = 'computer';
l['room']['c']['3'] = 'room2';
l['room']['c']['4'] = 'room';
l['room']['c']['selfkill'] = 'alert("1");';

l['bed'] = new Array();
l['bed']['text'] = 'Вы лежите на диване.';
l['bed']['c'] = new Array();
l['bed']['c']['text'] = '1 - Постараться уснуть <br> 2 - Встать с кровати';
l['bed']['c']['1'] = 'dream';
l['bed']['c']['2'] = 'room';


l['computer'] = new Array();
l['computer']['text'] = 'На экране вы видите открытое окно браузера. Введите адрес сайта, на который хотите попасть.';
l['computer']['c'] = new Array();
l['computer']['c']['text'] = '1 - Открыть закладки <br> 2 - Отойти от компьютера';
l['computer']['c']['vk.com'] = function(){
    if(typeof(vk[vk['cur']]) != 'undefined'){
        text(vk[vk['cur']]+'<br>');
        vk['cur']++;
        clock_tick();
    }else{
        vk['cur'] = 0;
        l['computer']['c']['vk.com']();
    }
}
l['computer']['c']['2ch.hk'] = 0;
l['computer']['c']['2channel.ru'] = 'alert("vk");';
l['computer']['c']['1'] = 'favourites';
l['computer']['c']['2'] = 'room';

l['favourites'] = new Array();
l['favourites']['text'] = "Закладки браузера: <br> 2ch.hk/b <br> vk.com <br> 2channel.ru";
l['favourites']['c'] = new Array();
l['favourites']['c']['text'] = '1 - Выйти из менеджера закладок';
l['favourites']['c']['1'] = 'computer';

l['room2'] = new Array();
l['room2']['text'] = 'Прихожая. Под потолком виднеется небольшое окно, освещающее все помещение, а напротив окна - шкаф, сделаный из добротного дерева. В другом конце комнаты находится дверь.';
l['room2']['c'] = new Array();
l['room2']['c']['text'] = '1 - Открыть окно <br> 2 - Заглянуть в шкаф <br> 3 - Выйти на улицу <br> 4 - Посмотреть на часы <br> 5 - Вернуться в комнату';
l['room2']['c']['1'] = 'room2window';
l['room2']['c']['2'] = 'room2cupboard';
l['room2']['c']['3'] = 'room2door';
l['room2']['c']['4'] = 'clocks';
l['room2']['c']['5'] = 'room';

l['room2window'] = new Array();
l['room2window']['text'] = 'Окно закрыто.';
l['room2window']['onload'] = function(){
    if(p['room2window'] == false){
        l['room2window']['text'] = 'Теперь окно открыто.';
        l['room2']['c']['text'] = '1 - Закрыть окно <br> 2 - Заглянуть в шкаф <br> 3 - Выйти на улицу <br> 4 - Посмотреть на часы <br> 5 - Вернуться в комнату';
        p['room2window'] = true;
    }else{
        l['room2window']['text'] = 'Вы закрыли окно.';
        l['room2']['c']['text'] = '1 - Открыть окно <br> 2 - Заглянуть в шкаф <br> 3 - Выйти на улицу <br> 4 - Посмотреть на часы <br> 5 - Вернуться в комнату';
        p['room2window'] = false;
    }
}
l['room2window']['c'] = new Array();
l['room2window']['c']['text'] = '1 - Отойти от окна.';
l['room2window']['c']['1'] = 'room2';

l['room2cupboard'] = new Array();
l['room2cupboard']['onload'] = function(){
       // if(0){;}
    }
l['room2cupboard']['text'] = 'Вы открыли шкаф, но в нем ничего нет.'
l['room2cupboard']['c'] = new Array();
l['room2cupboard']['c']['text'] = '1 - Закрыть шкаф'
l['room2cupboard']['c']['1'] = 'room2'


l['clocks'] = new Array();
l['clocks']['text'] = '';
l['clocks']['onload'] = function (){
    l['clocks']['text'] = p['time'];
}
l['clocks']['c'] = new Array();
l['clocks']['c']['text'] = '1 - Обратно в прихожую'
l['clocks']['c']['1'] = 'room2'

l['room2door'] = new Array();
l['room2door']['text'] = 'Дверь закрыта и вы не можете ее отворить.';
l['room2door']['c'] = new Array();
l['room2door']['c']['text'] = '1 - Отойти от двери';
l['room2door']['c']['1'] = 'room2';

l['kitchen'] = new Array();
l['kitchen']['text'] = "Вы стоите на кухне. Перед вами подтекающий холодильник, выцветший на солнце, а на нем стоит телевизор, который не включался, должно быть, уже несколько лет.";
l['kitchen']['c'] = new Array();
l['kitchen']['c']['text'] = "1 - Открыть холодильник <br> 2 - Включить телевизор <br> 3 - Обратно в комнату";
l['kitchen']['c']['1'] = 'fridge';
l['kitchen']['c']['2'] = 'tv';
l['kitchen']['c']['3'] = 'room';

l['fridge'] = new Array();
l['fridge']['onload'] = function(){
    /*
   var r = '';
   for(var i = 0; typeof fridge[i] != 'undefined'; i++){
       r+= (i+1) + ' - ' + fridge[i] + '<br>';
    }
    l['fridge']['c']['text'] = r + ;*/
}
l['fridge']['text'] = "В вашем холодильнике ничего нет.";
l['fridge']['c'] = new Array();
l['fridge']['c']['text'] = "1 - Закрыть холодильник";
l['fridge']['c']['1'] = 'kitchen';

l['tv'] = new Array();
l['tv']['text'] = "Телевизор включился, но на экране только белый шум. Скорее всего, здесь он ничего не покажет.";
l['tv']['c'] = new Array();
l['tv']['c']['text'] = "1 - Выключить телевизор";
l['tv']['c']['1'] = 'kitchen';

    
