let dots = document.getElementById("about-dots");
let more = document.getElementById("about-more");
let btn = document.getElementById("about-btn");
let btnInnerHtmlCashe = btn.innerHTML;

function readMore() {

            if (more.classList.contains("is-hidden")) {
                // dots.style.display = "inline";
                more.classList.remove("is-hidden");
                more.style.transform = "translateY(0)";
                btn.innerHTML = "Close";
                dots.style.display="none";
            } else {
                // dots.style.display = "none";
                more.style.transform = "translateY(-90px)";
                more.classList.add("is-hidden");
                btn.innerHTML = btnInnerHtmlCashe;
                dots.style.display="inline";
            }
}

btn.addEventListener('click', readMore);

