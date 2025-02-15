import { dictionary } from "./dictionary.js"
const targetWords = [
    "spice",
    "sushi",
    "fishy",
    "space",
    "train",
    "mocks",
    "heart",
    "Idead",
    "spicy",
    "tweak",
    "slack",
    "offer",
    "coook",
    "pssss",
    "horny",
    "juice",
    "yabaa",
    "pedos",
    "nerds",
    "juicy",
    "pdaaa",
    "class",
    "arjun",
    "dance",
    "chill",
    "sweet",
    "grind",
    "awwww",
    "alice",
    "nosos",
    "gnnnn",
    "yabai",
    "yello",

]

const descriptions = {
    "spice": "Happy valentines day! This is the beginning of something good... Yep, it's spice! Spice is our common language, and let's continue to live a life filled with spice! Quote of the day: /n Ashmita: she went into Mr.Hiros room...i guess they were spicing....",
    "sushi": "I used to not eat sushi, but when i met you, it all changed hehe. It started from ebicheese, then after i got force fed uni, my sushi instincts awakened. Now I eat: Ootoro, chuutoro, maguro, ebicheese, tamago, salmon cheese..... and my egg ratio has been steadily decreasing... /n Quote of the Day: Ashmita: I love sushiiiii!",
    "fishy": "Hey, why are you so fishy? Ashmita: hey, why are you so meaty? It seems a carnivore and fish can be together after all...",
    "space": "Space mountain! We had such a fun time that day, and I wish we can have more like it!",
    "train": "Ooooooh. This was where it all began. When we opened our hearts to each other... I can't believe it has been more than a year now! We've beaten haruka, fumie, etc etc... lets continue to make great memories!",
    "mocks": "A sad topic today - mocks. But hey, exams are just temporary. Our relationship isnt! Ms. Godfrey: look at what you have gained",
    "heart": "We have walked into each others hearts since the start, and I want to keep that going. Wish you a happy day full of <3 today!",
    "Idead": "I am dead..... dead.... dead.... Andrew after eating: dead. Just - dead.",
    "spicy": "The spicy makes life taste good! When life hands you halapeneos, you make spice. See, while i started dating you i also started eating gekikara at the indian resturant. Turns out I have a thing for indian spice.",
    "tweak": "Tweaking!!!!! Andrew: your tweakinggggggg",
    "slack": "Paul's syndrome.... yep, pauls syndrome. Our worst enemy. If you slack slack slack, you get wacked wacked wacked, then if you try to get back back back, you will get tracked (and dropped to certificate) - poor kazuki. Mr. Cely: How could they do him like that???",
    "offer": "I am still waiting on my offers..... be glad you have yours now. Ashmita: I GOT AN OFFER FROM IMPERIAL!!! (TEARS FLOWING, ENTIRE INDIAN NATION NOTIFIED)",
    "coook": "I am cooooooked! (Hard OO). Gonna need you to uncoooook me on this one...",
    "pssss": "give me lots of PSS! what new pss do you have today? Also, please focus on pss from fumie. Dont know why but i am the most interested in it (makes for lots of juicy stuff when i gossip abt her to my parents)",
    "horny": "..... Self explanatory.... kinda dont wanna explain this one... Ashmita: what is your horn-o-meter right now?",
    "juice": "Youre always full of juice, and I love juicing :)",
    "yabaa": "yaba.... majide... yabai...",
    "pedos": "well, you know who I am talking about here. Somehow he got a love letter for Valentines day? And arnold doesnt? Come on, clearly hes got some formula. I guess sungbeen downgrading was a good idea after all...",
    "nerds": "Well, we are all nerds, and thats something to be proud of. This is a bit more motivational quote, but I do think that nerds are the one that change the future. Ill look forward to you becoming a great scientist one day... Remember, keep your head up high, and don't be concerned about what they say. You are perfect the way you are.",
    "juicy": "I kinda wanna put something euphemistic, but you get the idea.... somehow you always have so much baby fat, and that makes my day better :)",
    "pdaaa": "we gotta do more pdaaaaa! Leg bumping, squishing, methaning, you name it! A pda a day, keeps the depression away. ",
    "class": "noooo, dont wanna go to class again..... but lets make each others day better!",
    "arjun": "Well, well, well... it finally came to this huh? From D U down and slacking, mans got it all. I'm honestly awaiting his comeback after watching the movie biligiyaru. Seems like he could use one. ",
    "dance": "this one is just respect. You started dancing since you were in the womb... that is a level of committment i havent heard of...",
    "chill": "When life hands you problems, you chill. An Ice pack a day, makes the International Bullying (IB) stay away. Andrew: Yo CHILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "sweet": "I always love hearing your sweet words! It makes my day better... pwease keep giving them to me",
    "grind": "tunak tunak tun tunak tunak tun tunak tunak tun dadada. Why am i slacking instead of grinding on a school day? Well frankly, grinding and slacking needs to have a balance. Or else you get pauls syndrome...",
    "awwww": "Awwww, so cute! Thats the reaction i always have to baby fat. I also keep your letters with me every day, btw. I read it in the morning, and sometimes I just remind myself how lucky i am to have you...",
    "alice": "You alice?",
    "nosos": "Nah, I'm deadlice. Im nososed today...",
    "gnnnn": "get a good sleep, ok? Sleep tight!",
    "stres": "yup, thats not a 5 letter word. I hacked the system on that one, but then again, im a nauti buoy (N). Math Test: Nauti buoy, seaview, are at an angle of depression, calculate the distance between FAILURE MANAGEMENT and Pauls syndrome. ",
    "yabai": "majide yabai.... IA is due tommorow.... crying emoji. It is a common struggle of ib students, but come to me whenever you need support ok?",
    "yello": "yello.... To be honest, if you have done this for 33 consecutive days in a row, then wow. If you havent, keep logging back to check out the other ones. Theres lots of juicy content. This is my special message to you. First of all, thank you for doing this every day. I wrote each one of tese messages based on our memories together. Like this game which will go on for 365 days a year, our relationship will go on too. The memories we made, the juice we had, the spicy moments, they are something that is irreplacable. Many times I marvel at how far we have come, and just thinking about some our... escapades makes me blush. I grew a lot because of you ashmita, and I hope I gave the same to you too. You know, one thing you really got me with was memorable but simple things. I dont know why, but whenever you give a card or something special to me, i feel really special inside. I think the best part of our relationship has been how we have always been together with each other through the highs and lows (and we are definitely not like fumie who just breaks up on a whim). One things for sure: lets keep going strong!",


}


const keyboard = document.querySelector("[data-keyboard]");
const guessGrid = document.querySelector("[data-guess-grid]");
const alertContainer = document.querySelector("[data-alert-container]");

const WORD_LENGTH = 5;
const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;
const referenceDate = new Date(2022, 0, 1);
const msOffsetFromRefDate = Date.now() - referenceDate;
const dayOffsetFromRefDate = msOffsetFromRefDate / 1000 / 60 / 60 / 24;
const targetWord =
    targetWords[Math.floor(dayOffsetFromRefDate % targetWords.length)];

startInteraction();

function startInteraction() {
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick);
    document.removeEventListener("keydown", handleKeyPress);
}

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key);
        return;
    }

    if (e.target.matches("[data-enter]")) {
        submitGuess();
        return;
    }

    if (e.target.matches("[data-delete]")) {
        deleteKey();
        return;
    }
}

function handleKeyPress(e) {
    if (e.key === "Enter") {
        submitGuess();
        return;
    }

    if (e.key === "Backspace" || e.key === "Delete") {
        deleteKey();
        return;
    }

    if (e.key.match(/^[a-z]$/)) {
        pressKey(e.key);
        return;
    }
}

function pressKey(key) {
    const activeTiles = getActiveTiles();
    if (activeTiles.length >= WORD_LENGTH) {
        return;
    }
    const nextTile = guessGrid.querySelector(":not([data-letter])");
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key;
    nextTile.dataset.state = "active";
}

function deleteKey() {
    const activeTiles = getActiveTiles();
    const lastTile = activeTiles[activeTiles.length - 1];
    if (lastTile === null) return;
    lastTile.textContent = "";
    delete lastTile.dataset.state;
    delete lastTile.dataset.letter;
}

function submitGuess() {
    const activeTiles = [...getActiveTiles()];
    if (activeTiles.length !== WORD_LENGTH) {
        showAlert("Not enough letters!");
        shakeTiles(activeTiles);
        return;
    }

    const guess = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter;
    }, "");
    if (!dictionary.includes(guess)) {
        showAlert("Not in word list");
        shakeTiles(activeTiles);
        return;
    }

    stopInteraction();
    activeTiles.forEach((...params) => flipTile(...params, guess));
}

function flipTile(tile, index, array, guess) {
    const letter = tile.dataset.letter;
    const key = keyboard.querySelector(`[data-key="${letter}"i]`);
    setTimeout(() => {
        tile.classList.add("flip");
    }, (index * FLIP_ANIMATION_DURATION) / 2);

    tile.addEventListener(
        "transitionend",
        () => {
            tile.classList.remove("flip");
            if (targetWord[index] === letter) {
                tile.dataset.state = "correct";
                key.classList.add("correct");
            } else if (targetWord.includes(letter)) {
                tile.dataset.state = "wrong-location";
                key.classList.add("wrong-location");
            } else {
                tile.dataset.state = "wrong";
                key.classList.add("wrong");
            }

            if (index === array.length - 1) {
                tile.addEventListener(
                    "transitionend",
                    () => {
                        startInteraction();
                        checkWinLose(guess, array);
                    }, { once: true }
                );
            }
        }, { once: true }
    );
}

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]');
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div");
    alert.textContent = message;
    alert.classList.add("alert");
    alertContainer.prepend(alert);
    if (duration == null) {
        return;
    }
    setTimeout(() => {
        alert.classList.add("hide");
        alert.addEventListener("transitionend", () => {
            alert.remove();
        });
    }, duration);
}

function shakeTiles(tiles) {
    tiles.forEach((tile) => {
        tile.classList.add("shake");
        tile.addEventListener(
            "animationend",
            () => {
                tile.classList.remove("shake");
            }, { once: true }
        );
    });
}


// Modify the checkWinLose function to include showMessage
function checkWinLose(guess, tiles) {
    if (guess === targetWord) {
        showAlert("You Win!!! 🎉🎉", 6000);
        danceTiles(tiles);
        stopInteraction();
        // Add slight delay before showing message
        setTimeout(() => {
            showMessage(targetWord);
        }, 1500);
        return;
    }

    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
    if (remainingTiles.length === 0) {
        showAlert("Almost there... try again!");
        stopInteraction();
    }
}

function danceTiles(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("dance");
            tile.addEventListener(
                "animationend",
                () => {
                    tile.classList.remove("dance");
                }, { once: true }
            );
        }, (index * DANCE_ANIMATION_DURATION) / 5);
    });
}

function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <button class="modal-close">×</button>
            <div class="modal-content"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const showMessageButton = document.createElement('button');
    showMessageButton.className = 'show-message-button';
    showMessageButton.textContent = 'Show Message';
    document.body.appendChild(showMessageButton);

    return { modal, showMessageButton };
}

function showMessage(word) {
    const description = descriptions[word];
    if (!description) return;

    // Create modal if it doesn't exist
    let modal = document.querySelector('.modal-overlay');
    let showMessageButton = document.querySelector('.show-message-button');

    if (!modal) {
        const elements = createModal();
        modal = elements.modal;
        showMessageButton = elements.showMessageButton;
    }

    const modalContent = modal.querySelector('.modal-content');
    modalContent.textContent = description;

    // Show modal
    function openModal() {
        modal.classList.add('active');
        document.body.classList.add('blur');
    }

    // Hide modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('blur');
        showMessageButton.classList.add('visible');
    }

    // Event listeners
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    showMessageButton.addEventListener('click', openModal);

    // Initial open
    openModal();
}