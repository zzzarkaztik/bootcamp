async function putData(data, book) {
  let req = await fetch(data, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  let res = await req.json();
  console.log(res);
  window.location.href = "library.html";
}

$(document).ready(function () {
  $("#add_book").submit(function (x) {
    let book_data = {
      title: $("#title").val(),
      description: $("#description").val(),
      genre: $("#genre").val(),
    };
    putData("http://localhost:3000/api/books", book_data);
    x.preventDefault();
  });
});
