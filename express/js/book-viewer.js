async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let books = await JSON.parse(my_text);

  for (let i = 0; i < books.length; i++) {
    let row = `
      <tr>
      <td class="align-middle">${books[i].title}</td>
      <td><button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#book_${books[i].id}">View</button></td>
      </tr>`;
    $("#book_list").append(row);

    let modal = `
    <div class="modal fade" id="book_${books[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${books[i].title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><b>Genre:</b> ${books[i].genre}</p>
            <p><b>Description:</b><br />${books[i].description}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>`;
    $("#modals").append(modal);
  }
}
getData("http://localhost:3000/api/books");
