$(document).ready(() => {
    for (let i = 0; i < $(".upvote").length; i++) {
        let $upvote = $(".upvote")[i];
        let $downvote = $(".downvote")[i];
        let $count = $(".count")[i];
        let $minimizeTopic = $("");

        $upvote.addEventListener("click", event => {
            event.target.classList.toggle("on");
            if ($($upvote).hasClass("on")) {
                $count.textContent = Number($count.textContent) + 1;
            } else {
                $count.textContent = Number($count.textContent) - 1;
            }
            if ($($downvote).hasClass("on")) {
                $downvote.classList.toggle("on");
                $count.textContent = Number($count.textContent) + 1;
            }
        });

        $downvote.addEventListener("click", event => {
            event.target.classList.toggle("on");
            if ($($downvote).hasClass("on")) {
                $count.textContent = Number($count.textContent) - 1;
            } else {
                $count.textContent = Number($count.textContent) + 1;
            }
            if ($($upvote).hasClass("on")) {
                $upvote.classList.toggle("on");
                $count.textContent = Number($count.textContent) - 1;
            }
        });
    }
});
