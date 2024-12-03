let main = document.querySelector('.meta');
let url = 'https://www.alibimenstyle.uz/api/products';

async function getAPI() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  htmlga(data.data); 
}

function htmlga(data) {
  let html = '';
  
  data.map((el) => {
    html += `
        <div class="card">
        <img src="${el.image}" alt="${el.name}" />
        <h3>${el.name}</h3>
        <p>Price: ${el.price} UZS</p>
        </div>
    `;
  });
  
  main.innerHTML = html;
}

getAPI();
