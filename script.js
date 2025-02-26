const animationTexts = document.getElementsByClassName("animated-text");
for (let i = 0; i < animationTexts.length; i++) {
    const letters = animationTexts[i].textContent.split("");
    animationTexts[i].innerHTML = letters.map((letters, i) => 
        `<span style="animation-delay:${i * 0.1}s">${letters}</span>`
    ).join("");
}

const lettersTexts = document.getElementsByClassName("letters");
for (let i = 0; i < lettersTexts.length; i++) {
    const letters = lettersTexts[i].textContent.split("");
    lettersTexts[i].innerHTML = letters.map((letters, i) => 
        `<span class="animated-letter">${letters === " " ? "&nbsp;" : letters}</span>`
    ).join("");
}



document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".animated-letter");

    letters.forEach(letter => {
        letter.addEventListener("mouseover", () => {
            const prevWidth = window.getComputedStyle(letter).width;
            letter.style.margin = "0px";
            letter.style.fontSize = "37px";
            letter.style.width = prevWidth;

            if (letter.previousElementSibling) {
                const prevWidth = window.getComputedStyle(letter.previousElementSibling).width;
                letter.previousElementSibling.style.margin = "0px";
                letter.previousElementSibling.style.fontSize = "35px";
                letter.previousElementSibling.style.width = prevWidth;
            }

            if (letter.nextElementSibling) {
                const prevWidth = window.getComputedStyle(letter.nextElementSibling).width;
                letter.nextElementSibling.style.margin = "0px";
                letter.nextElementSibling.style.fontSize = "35px";
                letter.nextElementSibling.style.width = prevWidth;
            }
        });

        letter.addEventListener("mouseout", () => {
            letter.style.margin = "";
            letter.style.fontSize = "";

            if (letter.previousElementSibling) {
                letter.previousElementSibling.style.margin = "";
                letter.previousElementSibling.style.fontSize = "";
            }

            if (letter.nextElementSibling) {
                letter.nextElementSibling.style.margin = "";
                letter.nextElementSibling.style.fontSize = "";
            }
 
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const coffee = document.getElementById("small-coffee");
    const me = document.getElementById('me-hover');

    if(coffee) {
        coffee.style.opacity = "0";
        coffee.style.display = 'none';
        me.addEventListener("mouseover", () => {
            coffee.style.display = 'inline-block';
            coffee.style.opacity = "1";
        });
        me.addEventListener("mouseout", () => {
            coffee.style.opacity = "0";
            coffee.style.display = 'none';
        });
    }
});
