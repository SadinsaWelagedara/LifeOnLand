document.addEventListener('DOMContentLoaded', function() {
    // Get all image items and their corresponding descriptions
    const imageItems = document.querySelectorAll('.carousel .list .item');
    const descriptions = document.querySelectorAll('.carousel .list .item .content .des');

    // Loop through each image item
    imageItems.forEach((item, index) => {
        // Add click event listener to toggle image enlargement and description display
        item.addEventListener('click', function() {
            // Toggle enlarged class for the clicked image
            this.classList.toggle('enlarged');

            // Toggle display of description for the clicked image
            descriptions[index].classList.toggle('show');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Title customization
    const titleColorInput = document.getElementById('title-color');
    const titleElement = document.querySelectorAll('.carousel .list .item .content .title');

    titleColorInput.addEventListener('change', function() {
        const color = this.value;
        titleElement.forEach(element => {
            element.style.color = color;
        });
    });

    // Description customization
    const descriptionColorInput = document.getElementById('description-color');
    const descriptionElement = document.querySelectorAll('.carousel .list .item .content .des');

    descriptionColorInput.addEventListener('change', function() {
        const color = this.value;
        descriptionElement.forEach(element => {
            element.style.color = color;
        });
    });

    // Font customization
    const fontSelect = document.getElementById('font');
    const contentElements = document.querySelectorAll('.carousel .list .item .content');

    fontSelect.addEventListener('change', function() {
        const font = this.value;
        contentElements.forEach(element => {
            element.style.fontFamily = font;
        });
    });
});

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');

nextDom.onclick = function(){ 
    showSlider('next');
}
prevDom.onclick = function(){ 
    showSlider('prev');
}

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');

    if (type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
    }else{
        let positionLastItem = itemSlider.length-1;
        listItemDom.prepend(itemSlider[positionLastItem]);
    }
}
