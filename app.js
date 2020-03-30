document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.querySelectorAll('.card')[0];
	
    card.onmouseover = function(event) {
        let target = event.target;
        card.classList.toggle('card__touch')
    };
	
    card.onmouseout = function(event) {
        let target = event.target;
        card.classList.toggle('card__touch')
    };
});
