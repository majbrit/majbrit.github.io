document.documentElement.classList.add("no-transition");

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");

    if(darkModeToggle){
        darkModeToggle.checked = true; 
    }
    
}

window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        setTimeout(() => {
            document.documentElement.classList.remove("no-transition");
        }, 50); 
    });
});



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
    const coffee = document.getElementById("around-coffee");
    const me = document.getElementById("me-hover");
    let hoverTimer;

    if (coffee && me) {
        coffee.style.opacity = "0";
        coffee.style.display = "none";
        me.addEventListener("mouseover", () => {
            hoverTimer = setTimeout(() => {
                coffee.style.display = "inline-block";
                coffee.style.opacity = "1";
            }, 10000); 
        });

        me.addEventListener("mouseout", () => {
            clearTimeout(hoverTimer); 
        });
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".spinning");
    if(buttons) {
        for (let i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener("mouseover", (event) => {
                buttons[i].querySelector(".link-item").style.margin = "4px";
                buttons[i].querySelector(".link-item").style.padding = `1px 4px`;
                event.target.style.cursor = "pointer";
            });
            buttons[i].addEventListener("mouseout", (event) => {
                buttons[i].querySelector(".link-item").style.margin = "0px";
                buttons[i].querySelector(".link-item").style.padding = `5px 8px`;
                event.target.style.cursor = "default";
            });
        }
    }
});




document.addEventListener("DOMContentLoaded", () => {

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", () => {
            const isDarkMode = darkModeToggle.checked;
            localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
            body.classList.toggle("dark-mode", isDarkMode);

        });
    }

});


document.addEventListener("DOMContentLoaded", () => {
    const pink = document.getElementById("deco-pink");
    const lightblue = document.getElementById("deco-lightblue");
    const darkblue = document.getElementById("deco-darkblue");

    let hoverIntervalLightblue;
    let hoverIntervalPink;
    let hoverIntervalDarkblue;

    if(pink) {
        pink.addEventListener("mouseover", (event) => {
                var rect, r; 
                var x, xm, xd; 
                var y,y2; 
            hoverIntervalPink = setInterval(() => {
                rect = pink.getBoundingClientRect(); 
                r = rect.width / 2;
                xm = rect.left + r + window.scrollX;
                x = Math.random() * rect.width + rect.left + window.scrollX;  
                xd = x - xm;
                y =  rect.top + (rect.height/2) + window.scrollY - Math.sqrt(Math.pow(r, 2) - Math.pow(xd, 2)) ;
                createCircle(x, y, window.getComputedStyle(pink).backgroundColor);
            }, 100); 
        });

        pink.addEventListener("mouseleave", () => {
            clearInterval(hoverIntervalPink);
        });
    }

    if(lightblue) {
        lightblue.addEventListener("mouseover", (event) => {
            hoverIntervalLightblue = setInterval(() => {
                const rect = lightblue.getBoundingClientRect(); 
                const x = Math.random() * rect.width + rect.left + window.scrollX;  
                const y =  rect.top + rect.height / 2 + window.scrollY;
                createCircle(x, y, window.getComputedStyle(lightblue).backgroundColor);
            }, 100); 
        });
        
        lightblue.addEventListener("mouseleave", () => {
            clearInterval(hoverIntervalLightblue);
        });
    }

    if(darkblue) {
        darkblue.addEventListener("mouseover", (event) => {
            hoverIntervalDarkblue = setInterval(() => {
                const rect = darkblue.getBoundingClientRect(); 
                const x = Math.random() * rect.width + rect.left + window.scrollX;  
                const y =  rect.top + rect.height / 2 + window.scrollY;
                createCircle(x, y, window.getComputedStyle(darkblue).backgroundColor);
            }, 100); 
        });

        darkblue.addEventListener("mouseleave", () => {
            clearInterval(hoverIntervalDarkblue);
        });
    }
    

});

function createCircle(x, y, color) {

    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);

    const size = Math.random() * 10 + 2;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x - size / 2}px`;
    circle.style.top = `${y - size / 2}px`;
    circle.style.backgroundColor = color;

    setTimeout(() => {
        circle.remove();
    }, 1000);
}
