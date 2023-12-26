async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let p = await JSON.parse(my_text);

  for (let i = 0; i < p.length; i++) {
    let card = `
    <div class="col-lg-3 gy-3">
    <div class="card">
    <img src="img/${p[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="card-title">${p[i].pet_name}</h2>
      <span class="card-text"><b>Species: </b>${p[i].species}</span>
      <p class="card-text"><b>Eating babit: </b>${p[i].eating_habit}</p>
      <a href="#" class="btn btn-primary mb-0 text-center w-100">View pet</a>
    </div>
    </div>
    </div>`;
    $("#pet-cards").append(card);

    let option = `<option value="pet_${p[i].id}">${p[i].pet_name}</option>`;
    $("#pet_list").append(option);
  }
}
getData("http://localhost:3070/api/pets");
