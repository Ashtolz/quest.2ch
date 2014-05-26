    
function text(t) {
    document.getElementById('txt').innerHTML += t;
    window.scrollTo(0,document.body.scrollHeight);
}

function load(n) {
    
    clock_tick();
    cur = n;
    (typeof h[cur] != 'undefined')? h[cur]++: h[cur] = 1;
    if( typeof(l[n]['onload']) == "function"){
        l[n]['onload']();
    }
        if (!l[n]['c']['text']) {
            text(l[n]['text'] + "<br>");
        } else {
            text(l[n]['text'] + "<br><span class=\"controls\">" + l[n]['c']['text'] + "</span>" + "<br>");
        }
    localStorage.setItem('cur', n);
}

function clock_tick(){
    var h = p['time'].split(':')[0];
    var m = p['time'].split(':')[1];
    m++;
    if(m>59){
            h++;
            m=0;
    }
    if(h>23){
        h = 0;
    }
    if(m<10){
        m='0'+m;
    }
    p['time'] = h+':'+m;
}
    
function gdo(t) {
    if (typeof(l[cur]['c'][t]) == 'function') {
        l[cur]['c'][t]();
    }else{
        if(typeof(l[cur]['c']['action']) == 'function'){
            l[cur]['c']['action'](t);
        }else{
            if(typeof(cm[t]) == 'function'){
            cm[t]();
            }
        }
    }
}

function read() {
    var t = document.getElementById("inp").value;
    if(t.trim()!=''){
        document.getElementById('inp').value = "";
        text("<span class=\"input\">" + t + "</span><br>");
        if (!isNaN(t)){
            if(l[cur]['c'][t]){
                load(l[cur]['c'][t]);
            }
        } else {
            gdo(t);
        }
    }
}

//load(localStorage.getItem('cur'));
load(0);

function save_config(){
    var s = '';
    s = cur + ':';
}

function timestamp(){
    return parseInt(p['time'].split(':')[0])*60+parseInt(p['time'].split(':')[1]);
    }
    
function timestd(t){
        return parseInt(t.split(':')[0])*60+parseInt(t.split(':')[1]);
}
