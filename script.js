const cardGrid = document.getElementById('cardGrid');
const addBtn = document.getElementById('addCardBtn');
const clearBtn = document.getElementById('clearAllBtn');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const overlay = document.getElementById('cardOverlay');
const activeCardContainer = document.getElementById('activeCard');
const closeOverlayBtn = document.getElementById('closeOverlay');

let cards = JSON.parse(localStorage.getItem('flashcards')) || [];

function saveAndRender() {
    localStorage.setItem('flashcards', JSON.stringify(cards));
    renderCards();
}

function renderCards() {
    cardGrid.innerHTML = '';
    
    if (cards.length === 0) {
        cardGrid.innerHTML = '<p style="opacity:0.5; grid-column: 1/-1; text-align:center;">No cards yet. Start creating!</p>';
        return;
    }

    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card');
        cardEl.innerHTML = `
            <div class="card-inner">
                <button class="delete-btn" onclick="deleteCard(event, ${index})">×</button>
                <div class="card-front">
                    <p>${card.question}</p>
                </div>
                <div class="card-back">
                    <p>${card.answer}</p>
                </div>
            </div>
        `;
        
        cardEl.addEventListener('click', () => {
            cardEl.classList.toggle('flipped');
        });
        
        cardGrid.appendChild(cardEl);
    });
}

addBtn.addEventListener('click', () => {
    const question = questionEl.value.trim();
    const answer = answerEl.value.trim();

    if (question && answer) {
        cards.push({ question, answer });
        questionEl.value = '';
        answerEl.value = '';
        saveAndRender();
    } else {
        alert("Please fill in both fields!");
    }
});

function deleteCard(event, index) {
    event.stopPropagation(); 
    cards.splice(index, 1);
    saveAndRender();
}

clearBtn.addEventListener('click', () => {
    if (confirm("Delete all cards?")) {
        cards = [];
        saveAndRender();
    }
});

function renderCards() {
    cardGrid.innerHTML = '';
    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card');
        cardEl.innerHTML = `
            <div class="card-inner">
                <button class="delete-btn" onclick="deleteCard(event, ${index})">×</button>
                <div class="card-front"><p>${card.question}</p></div>
                <div class="card-back"><p>${card.answer}</p></div>
            </div>
        `;
     
        cardEl.addEventListener('click', () => {
            openFocusMode(card);
        });
        
        cardGrid.appendChild(cardEl);
    });
}

function openFocusMode(cardData) {
    
    activeCardContainer.innerHTML = `
        <div class="card-inner">
            <div class="card-front"><h1>${cardData.question}</h1></div>
            <div class="card-back"><h1>${cardData.answer}</h1></div>
        </div>
    `;
    
    overlay.classList.remove('hidden');
    
   
    const modalInner = activeCardContainer.querySelector('.card-inner');
    activeCardContainer.onclick = () => {
        activeCardContainer.classList.toggle('flipped');
    };
}


closeOverlayBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    activeCardContainer.classList.remove('flipped'); 
});


overlay.addEventListener('click', (e) => {
    if(e.target === overlay) {
        overlay.classList.add('hidden');
        activeCardContainer.classList.remove('flipped');
    }
});

renderCards();
