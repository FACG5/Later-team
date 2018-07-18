
if (typeof module !== 'undefined') {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}
/*(function () {
  var search = document.getElementsByClassName("search-btn")[0];
  var inp = document.getElementsByClassName("search-query")[0];

    search.addEventListener('click', function(){
        var final = document.getElementsByClassName("search-results")[0];
        final.innerHTsML = "";        
        var res = inp.value;
        var xhr = new XMLHttpRequest();
        var url = "https://api.behance.net/v2/projects?q=cat&client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV";
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var obj = JSON.parse(xhr.responseText);
                console.log(obj);               
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    })


  })();*/

function make_connection(url,cb) {
    var xhr = new XMLHttpRequest();
    let objct;
    xhr.onreadystatechange = function () {
        
        if (xhr.readyState == 4&&xhr.status==200) {
            objct=JSON.parse(xhr.responseText);
                cb(objct);      

        }


    }
    xhr.open("GET", url, true);
    xhr.send();

}

 function gitProject (result){  
    return result.projects[0].name;
    }

    function gitUserData (result){
        return result.user.first_name + result.user.last_name;
    }

if (typeof module !== 'undefined') {
    module.exports ={make_connection,gitProject, gitUserData};
  }