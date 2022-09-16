//let colourSwitch = (button) => {
//    switch (button) {
//        case ("RedGreen") :
//            
//    }
//}


function setStyle(cssText) {
    var sheet = document.createElement('style');
    sheet.type = 'text/css';
    /* Optional */ window.customSheet = sheet;
    (document.head || document.getElementsByTagName('head')[0]).appendChild(sheet);
    return (setStyle = function(cssText, node) {
        if(!node || node.parentNode !== sheet)
            return sheet.appendChild(document.createTextNode(cssText));
        node.nodeValue = cssText;
        return node;
    })(cssText);
};


//var myCSS = setStyle('*{ color:red; }');
//setStyle('*{ color:blue; }', myCSS); // Replaces the previous CSS with this one

function init() { 
    document.getElementById("about").style.color = 'blue';
  }
  
  