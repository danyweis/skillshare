//When the window loads, call this initialize function
function init(event) {
    var pages = ["page1.html", "page2.html", "page3.html"],
        win = window,
        locParts = win.location.href.split("/"),
        curPage = locParts[locParts.length - 1],
        pageCounter = 0;
    nav = document.querySelector("#nav");

    for (let i = 0; i < pages.length; i++) {
        if (curPage === pages[i]) {
            pageCounter = i;
        }
    }

    //Add function for going to next and previous page.
    function theKey(e) {
        if (e.keyCode === 37) {
            // left arrow key
            pageDown();
        }
        if (e.keyCode === 39) {
            // right arrow key
            pageUp();
        }
    }

    function pageDown() {
        if (pageCounter > 0) {
            pageCounter--;
            win.location.assign(pages[pageCounter]);
            // locParts[locParts.length - 1] = pages[pageCounter];
            // win.location.href = locParts.join("/");
        }
    }

    function pageUp() {
        if (pageCounter < pages.length - 1) {
            pageCounter++;
            win.location.assign(pages[pageCounter]);
            // locParts[locParts.length - 1] = pages[pageCounter];
            // win.location.href = locParts.join("/");
        }
    }

    // work with e.target
    // function theClick(e) {
    //     let left = document.querySelector("#leftArrow");
    //     let right = document.querySelector("#rightArrow");
    //     if (e.target == left) {
    //         pageDown();
    //     } else if (e.target == right) {
    //         pageUp();
    //     }
    // }
    //Add Event listeners for key and mouse click.
    let left = document.querySelector("#leftArrow");
    let right = document.querySelector("#rightArrow");
    win.addEventListener("keydown", theKey);
    // nav.addEventListener("click", theClick);
    left.addEventListener("click", pageDown);
    right.addEventListener("click", pageUp);
}
window.addEventListener("load", init);
