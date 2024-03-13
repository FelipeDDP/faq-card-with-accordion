const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const btnAccordion = accordion.querySelector('.btn-accordion');
    const content = accordion.querySelector('.text');
    const arrow = accordion.querySelector('.caret');

    btnAccordion.addEventListener('click', () => {
        accordions.forEach(item => {
            if (item !== accordion) {
                item.querySelector('.text').classList.remove('show');
                item.querySelector('.caret').classList.remove('selected');
            }
        });
        content.classList.toggle('show');
        arrow.classList.toggle('selected');
    });
});

// EXPLANATION //

// First, I create a list of all 3 accordions

// For each individual in this list, I get the button and the text elements
// and still for each I add a listener for the click event

// The listener knows which button of which individual I've clicked, because it sets said individual with a target property

// On click, a new iteration occurs with a new set of individuals, which must represent the same individuals from the original list

// Adds a toggle for the text and arrow of the target individual, i.e. the one that was clicked

// Compares the item of the second iteration with the individual that was actually clicked. If they don't match, classes are removed.