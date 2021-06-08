function highlight(table) {
    for (let i = 1; i < table.rows.length; i++) {
        for (let j = 0; j < [...table.rows[i].cells].length; j++) {
            if (table.rows[i].cells[j].getAttribute('data-available') === 'true') {
                table.rows[i].classList.add('available');
            } else if (table.rows[i].cells[j].getAttribute('data-available') === 'false') {
                table.rows[i].classList.add('unavailable');
            }
        }
    }
    for (let i = 1; i < table.rows.length; i++) {
        if ((table.rows[i].classList.contains('available') === false) && (table.rows[i].classList.contains('unavailable') === false)) {
            table.rows[i].hidden = 'true';
        }
        if (table.rows[i].cells[2].innerHTML === 'm') {
            table.rows[i].classList.add('male');
        } else if (table.rows[i].cells[2].innerHTML === 'f') {
            table.rows[i].classList.add('female');
        }
        if (table.rows[i].cells[1].innerHTML < 18) {
            table.rows[i].style.textDecoration = 'line-through';
        }
    }
}