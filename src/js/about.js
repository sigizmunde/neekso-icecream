let dots = document.getElementById("about-dots");
let more = document.getElementById("about-more");
let btn = document.getElementById("about-btn");
let btnInnerHtmlCashe = btn.innerHTML;

function readMore() {

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btn.innerHTML = btnInnerHtmlCashe;
                more.style.display="none";
            } else {
                dots.style.display = "none";
                btn.innerHTML="Close"
                more.style.display="inline";
            }
}

btn.addEventListener('click', readMore);

