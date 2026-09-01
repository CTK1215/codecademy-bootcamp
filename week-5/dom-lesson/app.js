/*
    ? Challenge
    * hardcode a main element
    * hardcode a div inside with class img-container
    * create an img element
    * pass the url below to its src attribute
    * adjust its width, height, and object fit (set last to cover)
    * append it to the img-container div
    ! SPICEY MODE - create five of those pictures and then make sure they look good using flexbox
*/

let imgUrl = "https://plus.unsplash.com/premium_photo-1661962699932-1948aa1dde16?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// STEP 1: Find the div that's already on the page.
// querySelector uses CSS selector syntax, so the dot means "class".
// This is the parent we'll be appending into.
let container = document.querySelector(".img-container");

// SPICEY MODE: instead of copy-pasting the img code five times,
// wrap it in a loop that runs five times. Each pass builds one image.
for (let i = 0; i < 5; i++) {

    // STEP 2: Create the img element.
    // IMPORTANT: right now this img exists only in memory (JavaScript land).
    // It is NOT on the page yet. Nothing shows up until we append it.
    let img = document.createElement("img");

    // STEP 3: Set the src. Dot notation on the element sets its attribute,
    // same as writing <img src="..."> by hand.
    img.src = imgUrl;

    // STEP 4: Size it. width and height are plain numbers, measured in pixels.
    // I made it a square on purpose: the photo is NOT square, so you can
    // actually SEE object-fit doing its job.
    img.width = 250;
    img.height = 250;

    // STEP 5: object-fit lives on the style object, and the CSS name changes:
    // CSS says "object-fit", but a hyphen is illegal in a JS property name
    // (JS would read it as "object minus fit"). So the DOM converts every
    // hyphenated CSS property to camelCase: object-fit -> objectFit.
    // "cover" = fill the whole 250x250 box, crop the overflow, never squish.
    // Try changing this to "fill" once and watch the photo distort.
    img.style.objectFit = "cover";

    // STEP 6: THE moment. appendChild attaches the in-memory img to the
    // container div, which IS in the document, so now the browser renders it.
    container.appendChild(img);
}
