function getData(callback = f => f ) {
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET',})
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            console.warn(error);
        });
}

class Search {
    constructor(data = [ {} ]) {
        this.searchForm = document.querySelector( 'form' );
        this.searchForm.onsubmit = this.filterData;

        document.querySelector( 'svg' ).onclick = this.clearSearch;

        document.body.insertAdjacentHTML('beforeend', '<table></table>');
        this.table = document.querySelector( 'table' );
        this.data = data;
        this.displayedData = [...this.data];

        this.renderTable();
    }

    setData(data) {
        this.data = data;
        this.displayedData = [...this.data];
        this.renderTable();
    }

    clearSearch = () => {
        this.searchForm.reset();
        this.displayedData = [...this.data];
        this.renderData();
    }

    filterData = (event) => {
        event.preventDefault();
        const searchString = event.target[0].value.trim();
        const keys = Object.keys(this.data[0]);
        this.displayedData = this.data.filter(item => keys.some(key => item[key].toString().includes(searchString)));
        this.renderData();
    }

    sortColumn = (event) => {
        const key = event.target.textContent;
        const currentSorted = event.target.dataset.sorted;
        const titles = [...event.currentTarget.children];
        titles.forEach(item => item.dataset.sorted = "unsorted");
        if (currentSorted === "sorted") {
            event.target.dataset.sorted = "reverse";
            this.displayedData.sort((a, b) => typeof a[key] == "number" ? b[key] - a[key] : (''+b[key]).localeCompare(a[key]));
        } else {
            event.target.dataset.sorted = "sorted";
            this.displayedData.sort((a, b) => typeof a[key] == "number" ? a[key] - b[key] : (''+a[key]).localeCompare(b[key]));
        }
        this.renderData();
    }

   renderTable() {
        let html = '<thead><tr>';
        const keys = Object.keys(this.data[0]);
        keys.forEach(key => html += `<td>${key}</td>`);
        html += '</tr></thead><tbody></tbody>';
        this.table.innerHTML = html;

        document.querySelector('thead tr').addEventListener('click', this.sortColumn.bind(this));

        this.renderData();
    }

    renderData(data = this.displayedData) {
        this.table.querySelector('tbody').innerHTML = '';
        if (data.length === 0) {
            return;
        }
        const keys = Object.keys(data[0]);
        let html = '';
        data.forEach(line => {
            html += '<tr>';
            keys.forEach(key => html += `<td>${line[key]}</td>`);
            html += '</tr>';
        });
        this.table.querySelector('tbody').innerHTML = html;
    }
}

const searchObj = new Search();
getData(searchObj.setData.bind(searchObj));
