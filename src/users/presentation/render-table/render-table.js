import usersStore from '../../store/users-store';
import './render-table.css';


let table ;


const createTable = () =>{

    const table = document .createElement('table');
    const tableHeaders = document.createElement ('thead');
    tableHeaders.innerHTML =`
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>        
    `;


    const tableBody = document.createElement ('tbody');
    table.append (tableHeaders,tableBody)
    return table;



}
/**
 * 
 * @param {HTMLDivElement} Element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();

    if ( !table ) {
        table = createTable();
        element.append (table);

    }


    let tableHtml = '';


    users.forEach ( user => {
        tableHtml += `
            <tr>
                 <td>${user.id }</td>
                 <td>${user.Balance }</td>
                 <td>${user.FirstName}</td>
                 <td>${user.LastName}</td>
                 <td>${user. Active}</td>
                 <td>
                    <a href= "#/"data-id=" ${user.id }"> Select </a>
                    |
                    <a href= "#/"data-id=" ${user.id }"> Delete </a>
                </td>
             </tr>
        `
    });

    table.querySelector ('tbody').innerHTML = tableHtml;

}