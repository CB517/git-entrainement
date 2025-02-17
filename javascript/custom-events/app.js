import { fetchJSON } from "./functions/api.js";
import { CommentsList } from "/components/comments.js";
import { createElement } from "/functions/dom.js";

console.log("✅ comments.js est bien chargé !");

try {
    const data = await fetchJSON('https://jsonplaceholder.typicode.com/comments?_limit=20');

    const commentsList = new CommentsList(data);
    commentsList.appendTo(document.getElementById("card-container"));
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger',
        role: 'alert'
    }, 'Impossible de charger les éléments');
    
    document.body.prepend(alertElement);
}
