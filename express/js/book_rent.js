async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let books = await JSON.parse(my_text);

  for (let i = 0; i < books.length; i++) {
    let book = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="${books[i].title}" id="${books[i].id}">
    <label class="form-check-label" for="${books[i].id}">${books[i].title}</label>
    </div>`;
    $("#books_rent").append(book);
  }
}
getData("http://localhost:3000/api/books");
