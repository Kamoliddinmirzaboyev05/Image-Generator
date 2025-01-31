// get html elements
const images = document.querySelector(".images")

let imageName = "Flower";
const apiLink = `https://api.unsplash.com/search/collections?page=1&query=${imageName}&client_id=9eOC1FJwfCdlKxijSLi1184jwvXg3I1_8Q6G_cPl1Ls`;

const getData = async (link) => {
  const req = await fetch(link);
  const data = await req.json();
  writeData(data)
  console.log(data);
};

getData(apiLink);

const writeData = (DB)=>{
DB.results.forEach(item => {
    console.log(item);
    
    images.innerHTML += `
     <div class="image"><img src="${item.user.links.photos}" alt=""></div>
    
    `
});
}