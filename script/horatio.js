var a = function(u, d, o) {
  var om = { 'href': u };
  if (o) {
    $.extend(om, o);  
  }
  return htag('a', d, om);
};

var div = function(c, o) {
  return htag('div', c, o);
};

var htag = function(tn, c, o) {
  if (! $.isEmptyObject(o)) {
    return '<' + tn + ' ' + parseopt(o) + '">' + c + '</' + tn + '>';
  } else {
    return '<' + tn + '>' + c + '</' + tn + '>';
  }
};

var htagnend = function(tn, o) {
  if (! $.isEmptyObject(o)) {
    return '<' + tn + ' ' + parseopt(o) + '>';
  } else {
    return '<' + tn + '>';
  }
};

var p = function(c, o) {
  return htag('p', c, o);
};

var parseopt = function(o) {
  var pl = [];
  $.each(o, function(k, v) {
    pl.push(k + '="' + v + '"');  
  });
  return pl.join(' ');
};

var span = function(c, o) {
  return htag('span', c, o);
};

var table = function(c, o) {
  return htag('table', c, o);
};

var td = function(c, o) {
  return htag('td', c, o);
};

var tr = function(c, o) {
  return htag('tr', c, o);
};


