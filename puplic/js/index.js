
function make_connection(url, cb,count) {
    var xhr = new XMLHttpRequest();
    let objct;
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            objct = JSON.parse(xhr.responseText);
            console.log(objct.projects);
            if (typeof cb == 'function')
                cb(objct,count);

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