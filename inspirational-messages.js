//Random inspirational-messages
const youArr = ['have the best laugh', 'light up the room', 'have a great sense of humor', 'like sunshine on a rainy day', ' bring out the best in other people', 'are strong', 'are making a difference'];
const whenArr = ['Today', 'Soon', 'Tomorrow', 'This year', 'This month'];
const whatArr = ['everything will be ok', 'happiness will come to you', 'you will meet someone special', 'you will save lots of money', 'good news will come to you', 'you will have good time with your family', 'weather will be good'];


function inspirationalMessage() {
    const you = youArr[Math.floor(Math.random() * youArr.length)];
    const when = whenArr[Math.floor(Math.random() * whenArr.length)];
    const what = whatArr[Math.floor(Math.random() * whatArr.length)];
    const message = `You ${you}. ${when} ${what}!`;
    return document.getElementById("message").innerHTML = message;
};

const arrColor = ['red', 'blue', 'black', 'pink', 'yellow', 'orange', 'brown', 'aqua', 'green', 'plum'];
function changeColor() {
    messageColor = arrColor[Math.floor(Math.random() * arrColor.length)];
    return document.getElementById('message').style.color = messageColor;
}
