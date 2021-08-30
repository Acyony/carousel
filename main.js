//-=^.^-=----------The current gallery image-----=^.^-=-----

let currentGalleryItem = 1;

//-=^.^-=----------To know how many pictures my gallery has-----=^.^-=-----

let totalGalleryItems = document.querySelectorAll(".gallery-item").length;


//-=^.^-=----------The previous image-----=^.^-=-----


document
  .querySelector("#gallery-prev")
  .addEventListener("click", function (event) {
    let current = document.querySelector(`#gallery-item-${currentGalleryItem}`);

    currentGalleryItem = currentGalleryItem - 1;

    if (currentGalleryItem === 0) {
      currentGalleryItem = totalGalleryItems;
    }

    let next = document.querySelector(`#gallery-item-${currentGalleryItem}`);

    current.classList.remove("gallery-item-selected");
    next.classList.add("gallery-item-selected");
  });



//-=^.^-=----------The next image-----=^.^-=-----


document
  .querySelector("#gallery-next")
  .addEventListener("click", function (event) {
    let current = document.querySelector(`#gallery-item-${currentGalleryItem}`);
    currentGalleryItem = currentGalleryItem + 1;

    if (currentGalleryItem > totalGalleryItems) {
      currentGalleryItem = 1;  // adjust => the last img + 1
    }

    let next = document.querySelector(`#gallery-item-${currentGalleryItem}`);

    current.classList.remove("gallery-item-selected");
    next.classList.add("gallery-item-selected");
  });





//-=^.^-=----------The previous image-----=^.^-=-----

/* 
1) grabbing the prev button;

2) When the user clicks on the previous button, the variable, -1 is subtracted from the variable currentGalleryItem.

If the value becomes 0, then the value is set to the value of the variable totalGalleryItems, which is the last element.

before

c
1 -> 2 -> 3

after

          c
1 -> 2 -> 3


however, if the value the value is larger than 0 then the next value is just the normal previous element.


before

     c
1 -> 2 -> 3

after

c
1 -> 2 -> 3

 
5) The first img => class: gallery-item-selected if current ".remove" the display block and the next "add"  the display 

 */

