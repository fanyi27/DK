{

  var Zhi = '528917444'; #更改吱口令

  var newscript = document.createElement('script');

  newscript.setAttribute('type','text/javascript');

  newscript.setAttribute('src','https://cdn.bootcss.com/clipboard.js/2.0.1/clipboard.js');

  var head = document.getElementsByTagName('head')[0];

  head.appendChild(newscript);

  document.writeln('<input id="foo" readonly="readonly" style="position: fixed;left:-100%;top:50%" value="'+Zhi+'">');

  function zhiFuBaoUrlSearch(str) {

    var name, value;

    var num = str.indexOf("?");

    var params = [];

    str = str.substr(num + 1);

    var arr = str.split("&");

    for (var i = 0; i < arr.length; i++) {

      num = arr[i].indexOf("=");

      if (num > 0) {

        name = arr[i].substring(0, num);

        value = arr[i].substr(num + 1);

        params[name] = value;

      }

    }

    return params;

  }

  function zhiFuBaoSetClassAndAttribute(elements){

    for (var e = 0;e<elements.length;e++){

      Celement = document.querySelectorAll(elements[e]);

  
