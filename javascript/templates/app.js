import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
    const data = await fetchJSON('https://jsonplaceholder.typicode.com/comments?_limit=10');
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger',
        role: 'alert'
    }, 'Impossible de charger les éléments');
    document.body.prepend(alertElement);
}


