/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  };
  render() {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.append(tbody);
    this.rows.forEach((element) => {
      let tr = document.createElement('tr');
      for (let value of Object.values(element)) {
        let td = document.createElement('td');
        td.innerHTML = value;
        tr.append(td);
      }
      let td = document.createElement('td');
      let button = document.createElement('button');
      button.innerHTML = 'X';
      button.addEventListener('click', this.delRow)
      td.append(button);
      tr.append(td);
      tbody.append(tr);
    });
    return table;
  }
  delRow(event) {
    event.target.closest('tr').remove();
  }
}