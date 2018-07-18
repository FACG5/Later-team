const btn = get('#search_btn')[0];
const query = get("#search_input")[0];
const result_section = get(".container")[1];
const box = get("box");
const right_box = get(".right")[0];
const left_box = get(".left")[0];
const parent = right_box.parentNode;
const footer = get(".section_container")[0];

btn.addEventListener('click', function () {

    var count = prompt("Enter The Number Of Photos The Maximum is 30??");
    footer.setAttribute("style", 'visibility: hidden;');
    var obj = make_connection("https://cors-anywhere.herokuapp.com/api.behance.net/v2/projects?q=" + query.value + "&client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV",

        add_images_to_body, count);

});

function add_images_to_body(obj, count) {
    var arr = [];

    for (var i = 0; i < count; i++) {
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
            make_connection("https://cors-anywhere.herokuapp.com/api.behance.net/v2/users/" + arr[i].img2 + "?client_id=PO4GuFxL3OfqGmKJjOYFE3D5y3pdKZuV", addSection);
            footer.setAttribute("style", 'visibility: visible;');
 });
        add(result_section,img);
    }
}





function addSection(obj) {
    parent.innerHTML = '';

    const h1 = document.createElement("h1");

    textCont(h1,(obj.user.first_name+" " + obj.user.last_name));
    h1.classList.add("userName");
   
    //Create Elements ....
    const h2 = element("h2");
    const h22 = element("h2");
    const span = element("span");
    const span2 = element("span");
    const a = element("a");
    const left = element("div");
    const right = element("div");
    left.classList.add("left");
    right.classList.add("right");

    left.setAttribute("style", "background:url(" + (obj.user.images)["276"] + ")");
    a.classList.add("behance");
    textCont(a, obj.user.url)
    a.href = obj.user.url;
    span.classList.add("followers");
    textCont(span, "Followers : " + obj.user.stats.followers )
   textCont(span2, "Followings :" + obj.user.stats.following)

    add(right, h1);
    add(h2, span);
    add(h22,span2);
    add(parent, left);
    add(parent, right);
    add(right, h2);
    add(right, h22);
    add(right, a);
  
}




function add(parent, child) {
    parent.appendChild(child);
}


function get(str) {
    return document.querySelectorAll(str);
}

function element(str) {
    return document.createElement(str);
}

function textCont(element1, text) {
    element1.textContent=text;
}





/*


*/