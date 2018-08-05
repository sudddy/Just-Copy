var cWindow = [];
var allWindow = [];



chrome.tabs.query({
    "currentWindow": true
}, function(tabs) {
    i=0;
    tabs.forEach(function(tab) {
        cWindow.push(tab.url);
        tr = $('<tr/>');
        tr.append("<td><input type='checkbox' value=" + tab.url + " name='pval' id='chk_" + i + "' /></td><td>" + tab.url + "</td>");
        $('#tbodyCW').append(tr);
        i++;
    });
});

chrome.tabs.query({
    "currentWindow": false
}, function(tabs) {
    j=0;
    tabs.forEach(function(tab) {
        allWindow.push(tab.url);
        tr = $('<tr/>');
        tr.append("<td><input type='checkbox' value=" + tab.url + " name='pval' id='chk_" + j + "' /></td><td>" + tab.url + "</td>");
        $('#tbodyAW').append(tr);
        j++;
    });
});

function cb(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.insertBefore(textArea, document.body.firstChild);
  textArea.focus();
  textArea.select();

  try {
      var successful = document.execCommand('copy');
      alert("Link Copied")
  } catch (err) {
     
  }
  document.body.removeChild(textArea);
}

document.getElementById('cpCW').addEventListener('click', function() {
  var a=cWindow.join('\n');
  cb(a);
});

document.getElementById('cpAW').addEventListener('click', function() {
  var a= allWindow.join('\n');
  cb(a);
});

$(document).ready(function() {

    $("#cpSL").click(
        function() {
            var link = [];
            $.each($("input[name='pval']:checked"),
                function() { 
                    link.push($(this).val());
                     });
            fav=link.join("\n");
            cb(fav);

        });
});

  $(window).scroll(function() {
   
    if($(window).scrollTop() + $(window).height() > ($(document).height() - 100)) {
         $('.footer').fadeOut();
    }
    else{
        $('.footer').fadeIn();
    }
 });
 