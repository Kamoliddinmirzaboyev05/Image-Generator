// get html elements
const loaderBack = document.querySelector(".loader-back");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loaderBack.classList.add("hidden");
    setTimeout(() => {
      loaderBack.style.opacity = "0";
    }, 500);
  }, 2000);
  const images = document.querySelector(".images");
  const searchInput = document.querySelector(".searchInput");
  const searchBtn = document.querySelector(".searchBtn");

  // getdata function start
  const getData = async (link) => {
    const req = await fetch(link);
    const data = await req.json();
    writeData(data);
    console.log(data);
  };

  let imageName = localStorage.getItem("imageName")
    ? localStorage.getItem("imageName")
    : "flower";
  let apiLink = `https://api.unsplash.com/search/collections?page=1&query=${imageName}&client_id=9eOC1FJwfCdlKxijSLi1184jwvXg3I1_8Q6G_cPl1Ls`;

  // searchBtn function start
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    images.innerHTML = "";
    imageName = searchInput.value;
    localStorage.setItem("imageName", imageName);
    apiLink = `https://api.unsplash.com/search/collections?page=1&query=${imageName}&client_id=9eOC1FJwfCdlKxijSLi1184jwvXg3I1_8Q6G_cPl1Ls`;
    getData(apiLink);
  });

  getData(apiLink);

  // writeData function start
  const writeData = (DB) => {
    DB.results.forEach((item) => {
      console.log(item);

      images.innerHTML += `
    <div class="image">
            <img src="${item.cover_photo.urls.full}" alt="">
            <div class="descr">
              <h2>${item.title}</h2>
              <p>${item.user.last_name}</p>
            </div>
          </div>  
    
    `;
    });
  };
}); //DOMContentLoaded
