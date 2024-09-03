const limit =10;
const page = 10;

const url = `https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=${limit}`
const starlistOl = document.getElementById("starlist")

function convertCharacterToLi(characters){
    return`
    <li class="character"><!-- listar personagem -->
                <span class="name">${characters.name}</span><!-- elemento mas ainda não definido -->
                <div class="detail">
                <span class="description">${characters.description}</span>
                <img src="${characters.image}" alt="Bib Fortuna">
                
            </div>
            </li>
     `
}

fetch(url)
    .then((response) => response.json())
    .then((json) => json.data)
    .then((starlist) => starlistOl.innerHTML = starlist.map(convertCharacterToLi).join(""))/* .join("") - para tirar as virgulas */
    .catch((error) => console.log(error));
    /* (console) mostra pelo console// (response.json) mostra no json(memoria interna, resposta em jason) */