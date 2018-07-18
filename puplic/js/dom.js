const btn = document.getElementById('search_btn');
const query = document.getElementById("search_input");
const result_section = document.getElementsByClassName("container")[1];
const box = document.getElementsByClassName("box");


console.log(result_section);

btn.addEventListener('click', function () {
    var count = prompt("Enter The Number Of Photos ??");
    console.log(query.value);
    var obj = make_connection("https://api.behance.net/v2/projects?q=" + query.value + "&client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV",

        function (obj) {

            var arr = [];
            for (var i = 0; i < count; i++) {//(obj.projects)[i].owners
                arr.push({
                    "img":(obj.projects)[i].covers["404"],"img2":(obj.projects)[i].owners[0].username});
            }
            add_to_body(arr)
            return arr;
        });
    //console.log(arr);
});


function add_to_body(arr,obj) {

    result_section.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const img = document.createElement("img");
        img.src = arr[i].img;
        img.setAttribute("class", "box");
        console.log();
        img.addEventListener('click', function () {
            console.log(arr[i].img2);

        })
        result_section.appendChild(img);

    }



}