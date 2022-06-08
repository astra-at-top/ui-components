'use strict';

let data = {
    one:{
        date:'Oct 25, 2020',
        type:'Pro Annual'
    },
    two:{
        date:'Oct 21, 2020',
        type:'Pro Annual'
    },
    three:{
        date:'July 21, 2020',
        type:'Sponsered Post'
    },
    four:{
        date:'July 20, 2020',
        type:'Sponsered Post'
    }
}

let dataarr = [['July 20, 2020', 'Sponsered Post'],['Jult 21, 2020','Sponsered Posr'],['Oct 21, 2021','Pro Annual'],['Oct 25, 2021', 'Pro Annual']] 

const tbody = document.querySelector('tbody');


dataarr.forEach(function (data){
    let [date, text] = data
    const html = `
    <tr class="main-table-row ">
    <td class="main-table-data">${date}</td>
    <td class="main-table-data"
    >${text}</td>
    <td
    class="main-table-data">
        <button>
            Download
        </button>
    </td>
</tr>
    `
    tbody.insertAdjacentHTML('afterbegin',html)
});



console.log(tbody)

let table_data = function (data){

}