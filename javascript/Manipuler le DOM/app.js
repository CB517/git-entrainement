
/*
    📌 Hiérarchie des objets dans le DOM :

    1️⃣ EventTarget  ->  (Tout élément pouvant écouter des événements)
        ⬇
    2️⃣ Node  ->  (Tout nœud du DOM : élément, texte, commentaire, etc.)
        ⬇
    3️⃣ Element  ->  (Nœud spécifique aux éléments HTML ou SVG)
        ⬇
    4️⃣ HTMLElement  ->  (Spécifiquement pour les éléments HTML)
        ⬇
    5️⃣ HTML<Nom>Element  ->  (Spécifique à chaque type d'élément)

    Exemples :
    - <li>  ➝  HTMLLIElement
    - <div>  ➝  HTMLDivElement
    - <button>  ➝  HTMLButtonElement
    - <input>  ➝  HTMLInputElement
*/

// ======================== //
// ====== Section 1 ======= //
// ======================== //
const ul = document.querySelector('ul');

console.log(ul.nodeName);
console.log(ul.innerHTML);
console.log(ul.innerText);
console.log(ul.textContent);

ul.setAttribute("hidden", "hidden");
ul.removeAttribute("hidden");


// ======================== //
// ====== Section 2 ======= //
// ======================== //
const li = document.querySelector('ul > li:first-child');

setInterval(() => {
    li.classList.toggle('red')
}, 1000);


// ======================== //
// ====== Section 3 ======= //
// ======================== //
const blue = document.querySelector('.blue');
setInterval(() => {
    if (blue.classList.toggle('purple')) {
        blue.style.color = "purple";
    } else {
        blue.style.color = "blue";
    }
}, 1000);


// ======================== //
// ====== Section 4 ======= //
// ======================== //
const newLiFirst = document.createElement('li');
newLiFirst.textContent = "Li créé en JS et positionné a au début de la liste";
const newLiLast = document.createElement('li');
newLiLast.textContent = "Li créé en JS et positionné à la fin de la liste";
document.querySelector('ul').prepend(newLiFirst);
document.querySelector('ul').append(newLiLast);
console.log(ul.innerHTML);


// ======================== //
// ====== Section 5 ======= //
// ======================== //
const div = document.createElement('div');
div.textContent = "Je suis une div créé en JS"
ul.insertAdjacentElement('afterend', div);
console.log(div);


// ======================== //
// ====== Section 6 ======= //
// ======================== //
const toClone = document.querySelector("ul");
ul.insertAdjacentElement("afterend" ,(toClone.cloneNode(true)));


// ======================== //
// ====== Section 7 ======= //
// ======================== //
async function main () {
    const select = document.getElementById('lastPosts');
    const loader = document.createElement('p');
    loader.textContent = "Chargement en cours...";
    select.append(loader);
    try {
        const r = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
            headers: {
                Accept: 'application/json'
            }
        })
        if (!r.ok) {
            throw new Error(`Erreur serveur`);
        }
        const posts = await r.json();
        loader.remove();
        for (let post of posts) {
            select.append(createArticle(post));
        }       
    } catch (e) {
        loader.textContent = "Erreur lors du chargement des articles";
            loader.style.color = "red";
            return
    }
}
/**
 * Crée un élément HTML représentant un article
 * @param {{title: string, body: string}} post 
 * @eturn {HTMLElement}
 */
function createArticle (post) {
    const article = document.createElement('article');
    const title = document.createElement('h2');
    const body = document.createElement('p');
    title.textContent = post.title;
    body.textContent = post.body;
    article.appendChild(title);
    article.appendChild(body);
    return article
}

main ();