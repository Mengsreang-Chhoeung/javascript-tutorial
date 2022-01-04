// using document.querySelector(name)
var highlight = document.querySelector(".highlight");

// using parentElement, we using multiple for finding any parent element
highlight.style.backgroundColor = "pink"; // <span></span>
highlight.parentElement.style.backgroundColor = "yellow"; // <p></p>
highlight.parentElement.style.width = "120px"; // <p></p>
highlight.parentElement.parentElement.style.backgroundColor = "red"; // <div class="content"></div>
