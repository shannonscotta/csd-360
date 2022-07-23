//scott shannon    csd-360 mod 11 assignment    22 July 2022
// The purpose of this function is to replace the large image with the smaller image that was clicked

let smallToBig = (image) => {
    let bigImage = document.getElementById("mainImage");
    let imageElement = document.createElement("img");

    imageElement.src = image;
    imageElement.className = "mainImage";
    imageElement.alt = "Big image of clicked small image";
    imageElement.id = "mainImage";

    bigImage.parentNode.replaceChild(imageElement, bigImage);
}
