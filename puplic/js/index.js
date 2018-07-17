(function () {
  var search = document.getElementsByClassName("search-btn")[0];
  var inp = document.getElementsByClassName("search-query")[0];

    search.addEventListener('click', function(){
        var final = document.getElementsByClassName("search-results")[0];
        final.innerHTML = "";        
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


  })();