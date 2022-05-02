let images_contanier = document.getElementById("images");
let images = ["./images/download.jpeg", "./images/download (1).jpeg", "./images/IguacuFalls1920x1200.jpg"]
images_contanier.src = images[0];
let links = document.getElementById("links");
let next = document.getElementById("next");
let previous = document.getElementById("prev");
let counter = 0;
let points = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3")];
//console.log(points[2]);
points[counter].style.backgroundColor = "black";

function s() {
    if (counter <= images.length - 1 && counter >= 0) {
        images_contanier.src = images[++counter];
        //counter++;
        console.log(counter);
        let clone = counter;
        points[clone - 1].style.backgroundColor = "";
        points[clone].style.backgroundColor = "black";

    } else {
        counter = 0;
        images_contanier.src = images[++counter];
        let clone = counter;
        points[clone + 1].style.backgroundColor = "";
        points[clone].style.backgroundColor = "black";
    }

}

next.addEventListener('click', function() {
    s();
})
previous.addEventListener('click', function() {

    if (counter >= 0 && counter < images.length) {
        images_contanier.src = images[counter--];
        console.log(counter)
        let clone = counter;
        points[clone++].style.backgroundColor = "black";
        points[clone].style.backgroundColor = "";
    } else {
        counter = images.length - 1;
        images_contanier.src = images[counter];
        console.log(counter)
        points[clone--].style.backgroundColor = "black";
        points[clone].style.backgroundColor = "";


    }
});
for (let i = 0; i <= points.length - 1; i++) {
    points[i].addEventListener('click', function() {
        images_contanier.src = images[i];
        //points[i].style.background = "black";
        //points[i - 1].style.background = "";
        points[i + 1].style.backgroundColor = "#eee";
        points[i].style.backgroundColor = "black";


    })
};
setInterval(s, 5000)