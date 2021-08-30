const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



function fetchImages(){
    fetch(imgUrl)
    .then(function(response) {
    return response.json();
    }).then(function(json) {
        renderImages(json.message)
    });
}

function renderImages(urls) {
    const imageContainer = document.getElementById("dog-image-container");

    urls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        imageContainer.appendChild(img);
      });
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(function(response) {
    return response.json();
    }).then(function(json) {
        renderBreeds(json.message)
    });
}

function renderBreeds(breeds) {
    const breedsList = document.getElementById("dog-breeds");

    for (const breed in breeds) {
        const li = document.createElement("li");
        li.innerHTML = breed;
        li.addEventListener("click", function(e){
            e.target.style.color = "red";
        });

        breedsList.appendChild(li);
      }
}

function filterBreeds() {
    const value = document.querySelector("select").value
    const breedsList = document.getElementById("dog-breeds").children

    if (value === "all") {
        for (let i = 0; i < breedsList.length; i++) {
                breedsList[i].style.display = ""
        }
    } else {

        for (let i = 0; i < breedsList.length; i++) {
            if (breedsList[i].innerHTML[0] != value) {
                breedsList[i].style.display = "none"
            } else {
                breedsList[i].style.display = ""
            }
        }
    }
}




document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
  });

