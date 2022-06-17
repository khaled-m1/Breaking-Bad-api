fetch("https://www.breakingbadapi.com/api/characters")
  .then((data) => {
    // console.log(data);
    return data.json();
  })
  .then((result) => {
    let viewData = "";
    result.map((item) => {
      viewData += `      
      <div class="col-sm-12 col-md-4 col-lg-4" >
      <div class="card" style="width: 18rem">
        <img
          src=${item.img}
          class="card-img-top"
          alt="img"
        />
        <div class="card-body">
          <h5 class="card-title display-6">${item.name}</h5>
          <p class="card-text lead">${item.nickname}</p>
        </div>
      </div>
    </div>`
    });
    document.getElementById("items").innerHTML = viewData;
  })
  .catch((err) => {
    console.log(err);
  });
 
