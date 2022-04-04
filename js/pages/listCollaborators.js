const LIST_COLLABORATORS = 'http://localhost:3009/collaborators';


function listCollaborators () {
    //method for search customers for API

    fetch(LIST_COLLABORATORS , {method: 'GET'} )
    .then (response => response.json())
    .then (collaborators =>{
        collaborators.map (col =>{
            document.getElementById('table-collaborators').innerHTML +=`
                <tr>
                    <td>${col.name}</td>
                    <td>${col.email}</td>
                    <td>${col.phone}</td>
                    <td>${col.gender}</td>
                    <td>${col.birth}</td>
                    <td>${col.address}</td>
                    <td>${col.specialty}</td>
                </tr>
            `
        });
    });

    return `
      <table class="table table-striped table-dark">
        <thead class="table-dark">
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Address</th>
            <th>Specialty</th>
            </tr>
        </thead>
        <tbody id="table-collaborators">

        </tbody>
      </table>
    `;

}
