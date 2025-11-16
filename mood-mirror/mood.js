function changeColor() {
    document.body.style.backgroundColor = 'rgb(255,255,0)';
    const textElement = document.getElementById("text");
    textElement.textContent = "Keep smiling, it makes people wonder what you're up to";
    localStorage.setItem('lastMoodColor', 'rgb(255,255,0)');
    localStorage.setItem('lastMoodText', "Keep smiling, it makes people wonder what you're up to");
}

function changeColor2() {
    document.body.style.backgroundColor = 'rgb(70, 248, 245)';
    document.getElementById("text").textContent = "It's okay to feel not okay";
    localStorage.setItem('lastMoodColor', 'rgb(70, 248, 245)');
    localStorage.setItem('lastMoodText', "It's okay to feel not okay");
}

function changeColor3() {
    document.body.style.backgroundColor = 'rgb(253, 126, 71)';
    document.getElementById("text").textContent = "Take a deep breath and let it go";
    localStorage.setItem('lastMoodColor', 'rgb(253, 126, 71)');
    localStorage.setItem('lastMoodText', "Take a deep breath and let it go");
}

function changeColor4() {
    document.body.style.backgroundColor = 'rgb(151, 150, 150)';
    document.getElementById("text").textContent = "Rest if you must, but don't quit";
    localStorage.setItem('lastMoodColor', 'rgb(151, 150, 150)');
    localStorage.setItem('lastMoodText', "Rest if you must, but don't quit");
}

function changeColor5() {
    document.body.style.backgroundColor = 'rgb(195, 87, 195)';
    document.getElementById("text").textContent = "Let your excitement be louder than your fears";
    localStorage.setItem('lastMoodColor', 'rgb(195, 87, 195)');
    localStorage.setItem('lastMoodText', "Let your excitement be louder than your fears");
}

function saveQuote() {
    const quoteInput = document.getElementById('quoteInput');
    const userQuote = quoteInput.value.trim();

    if (userQuote) {
        let savedQuotes = JSON.parse(localStorage.getItem('userQuotes')) || [];
        savedQuotes.push(userQuote);
        localStorage.setItem('userQuotes', JSON.stringify(savedQuotes));
        alert('Your quote has been saved successfully!');
        quoteInput.value = '';
    } else {
        alert('Please enter a quote before saving.');
    }
}

function displaySavedQuotes() {
    const savedQuotes = JSON.parse(localStorage.getItem('userQuotes')) || [];
    let quotesDisplay = 'Your Saved Quotes:\n\n';
    if (savedQuotes.length > 0) {
        savedQuotes.forEach((quote, index) => {
            quotesDisplay += `${index + 1}. "${quote}"\n`;
        });
    } else {
        quotesDisplay = "You haven't saved any quotes yet.";
    }
    alert(quotesDisplay);
}

function loadLastMood() {
    const lastColor = localStorage.getItem('lastMoodColor');
    const lastText = localStorage.getItem('lastMoodText');
    const textElement = document.getElementById("text");

    if (lastColor && lastText) {
        document.body.style.backgroundColor = lastColor;
        textElement.textContent = lastText;
    } else {
        textElement.textContent = "Welcome! Choose a mood.";
    }
}

function quotechange() {}

window.onload = loadLastMood;
