const productsSection = document.querySelector("#items") 

function afficherProduits(){
    fetch( "http://localhost:3000/api/products") 
    .then((res) => res.json())
    .then((data) => { 
        console.log(data);
        let nombresArticles = data.length
        for (let i = 0; i < nombresArticles; i++){ 
            productsSection.innerHTML += `<a href="./product.html?id=${data[i]._id}">
            <article>
                <img src=${data[i].imageUrl} alt=${data[i].altTxt}>
                <h3 class="productName">${data[i].name}</h3>
                <p class="productDescription">${data[i].description}</p>
            </article>
            </a>`;
        }
    })
    .catch((err) => console.log(err))
}
afficherProduits()

