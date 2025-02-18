import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";
import { TodoList } from "./components/TodoList.js";

try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const list = new TodoList(todos);	
    list.appendTo(document.getElementById('todolist'));
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger',
        role: 'alert'
    }, 'Impossible de charger les éléments');
    document.body.prepend(alertElement);
}
