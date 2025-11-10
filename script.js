const body = document.getElementById("body")
const textColor = document.getElementsByClassName("ColorText")
const dayBtn = document.getElementById("ChangeBGD")
const textarea = document.getElementById("textarea")
const checkbox = document.querySelector('[type="checkbox"]');
const label = document.querySelector('label[for="' + checkbox.id + '"]');
const display = document.getElementsByClassName("display")
const Text = document.getElementsByClassName("Text")
let NowsDay = 0;

function Day() {

    switch (NowsDay) {
        case 0:
            body.style.backgroundColor = "white";
            for (let i = 0; i < textColor.length; i++) {
                textColor[i].style.color = "black";

            }

            for (let i = 0; i < display.length; i++) {
                display[i].style.color = "#ffffff";
            }

            for (let i = 0; i < Text.length; i++) {
                Text[i].style.color = "#ffffff";
            }

            dayBtn.style.transform = "scale(1)";
            dayBtn.style.backgroundColor = "#ffffff";
            dayBtn.style.color = "black";
            dayBtn.textContent = "☾";
            dayBtn.style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 2px 8px";


            textarea.style.color = "black";
            textarea.style.backgroundColor = "#ffffff";
            textarea.style.border = "#000000 2.5px solid";
            checkbox.addEventListener('change', () => {
                checkbox.style.outline = "2px solid #000000";;
            });

            label.classList.remove("nightmode");
            label.classList.add("daymode");

            NowsDay = 1;
            break;

        case 1:
            body.style.backgroundColor = "#141414";
            for (let i = 0; i < textColor.length; i++) {
                textColor[i].style.color = "white";

            }
            for (let i = 0; i < display.length; i++) {
                display[i].style.color = "#141414";
            }

            for (let i = 0; i < Text.length; i++) {
                Text[i].style.color = "#141414";
            }

            dayBtn.style.transform = "scale(1)";
            dayBtn.style.backgroundColor = "#424247";
            dayBtn.style.color = "white";
            dayBtn.textContent = "☀";
            dayBtn.style.boxShadow = "rgba(255, 255, 255, 0.15) 0px 2px 8px";

            textarea.style.color = "white";
            textarea.style.backgroundColor = "#424247";
            textarea.style.border = "#5858589f 2.5px solid";

            checkbox.addEventListener('change', () => {
                checkbox.style.outline = "2px solid #5858589f";;
            });

            label.classList.remove("daymode");
            label.classList.add("nightmode");

            NowsDay = 0;
            break;
    }
}

function HoveringD() {
    dayBtn.style.transform = "scale(1.5)";
}

function HoveringO() {
    dayBtn.style.transform = "scale(1)";
}

dayBtn.addEventListener("click", Day);

dayBtn.addEventListener("mouseenter", HoveringD);

dayBtn.addEventListener("mouseout", HoveringO);

let count = document.getElementById("textarea").value;


// ข้างล่าง input
let input = document.querySelectorAll('textarea')[0];
characterCount = document.querySelector('#displaychar');
const box = document.getElementById("ExcludedSpace");
const boxvalue = box.checked;
const wordcount = document.getElementById("wordcount")
const sentencecount = document.getElementById("sentencecount"); // อย่าลืมมี <span id="sentencecount"></span>

input.addEventListener('keydown', countChar);
input.addEventListener('keyup', countChar);
box.addEventListener('change', countChar);

function countChar() {
    const text = input.value.trim();

    const sentences = text
        .split(/[.!?]+/)         // แยกด้วย ., !, หรือ ?
        .map(s => s.trim())      // ตัด space รอบประโยค
        .filter(s => s.length > 0); // เอาเฉพาะประโยคที่ไม่ว่าง
    sentencecount.innerHTML = sentences.length;

    if (text === ""){
        wordcount.innerHTML = 0;
    } else{
        wordcount.innerHTML = text.split(/\s+/).length;
    }

    if (box.checked) {
        const x = input.value.replaceAll(' ', '');
        characterCount.innerHTML = x.length;
    } else {
        characterCount.innerHTML = input.value.length;
    }
}



