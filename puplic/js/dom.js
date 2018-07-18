const btn = get('#search_btn')[0];
const query = get("#search_input")[0];
const result_section = get(".container")[1];
const box = get("box");
const right_box = get(".right")[0];
const left_box = get(".left")[0];
const parent = right_box.parentNode;
const footer = get(".section_container")[0];
console.log(btn);
btn.addEventListener('click', function () {

    var count = prompt("Enter The Number Of Photos The Maximum is 30??");
    footer.setAttribute("style", 'visibility: hidden;');
    var obj = make_connection("https://api.behance.net/v2/projects?q=" + query.value + "&client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV",

        add_images_to_body, count);

});



function add_images_to_body(obj, count) {
    var arr = [];
    for (var i = 0; i < count; i++) {//(obj.projects)[i].owners
        arr.push({
            "img": (obj.projects)[i].covers["404"], "img2": (obj.projects)[i].owners[0].username
        });
    }
    add_to_body(arr)
    return arr;
}



function add_to_body(arr, obj) {

    result_section.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const img = document.createElement("img");
        img.src = arr[i].img;
        img.setAttribute("class", "box");
        img.addEventListener('click', function () {
            make_connection("https://api.behance.net/v2/users/" + arr[i].img2 + "?client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV", addSection);
            footer.setAttribute("style", 'visibility: visible;');



        });
        result_section.appendChild(img);

    }
}





function addSection(obj) {
    parent.innerHTML = '';

    const h1 = document.createElement("h1");
    h1.textContent = obj.user.first_name;
    h1.textContent += " " + obj.user.last_name;
    console.log("The First Name : " + obj.user.first_name + " " + obj.user.last_name);
    h1.classList.add("userName");
    //Create Elements ....
    const h2 = document.createElement("h2");
    const h22 = document.createElement("h2");

    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const a = document.createElement("a");
    const left = document.createElement("div");
    const right = document.createElement("div");
    left.classList.add("left");
    right.classList.add("right");

    left.setAttribute("style", "background:url(" + (obj.user.images)["276"] + ")");
    a.classList.add("behance");
    a.textContent = obj.user.url;
    a.href = obj.user.url;
    span.classList.add("followers");
    span.textContent = "Followers : " + obj.user.stats.followers;
    span2.textContent = "Followings :" + obj.user.stats.following;
    right.appendChild(h1);
    h2.appendChild(span);
    h22.appendChild(span2);
    right.appendChild(h2);
    right.appendChild(h22);

    right.appendChild(a);


    parent.appendChild(left);
    parent.appendChild(right);

}



function get(str){
    return document.querySelectorAll(str);
}

/*


*/