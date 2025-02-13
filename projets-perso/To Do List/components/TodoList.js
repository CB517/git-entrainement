import { createElement } from '../functions/dom.js';

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */
export class TodoList {

    /**
     * @type {Todo[]}
     */
    todos = [];

    /**
     * @param {Todo[]} todos 
     */
    constructor (todos) {
        this.todos = todos;
    }

    /**
     * @param {HTMLElement} element 
     */
    appendTo(element) {
        element.innerHTML = `<form class="d-flex pb-4">
            <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title">
            <button class="btn btn-primary">Ajouter</button>
        </form>
        <main>
            <div class="btn-group mb-4 filter" role="group">
                <button type="button" class="btn btn-outline-primary active" data-filter="all">Toutes</button>
                <button type="button" class="btn btn-outline-primary" data-filter="todo">A faire</button>
                <button type="button" class="btn btn-outline-primary" data-filter="done">Faites</button>
            </div>

            <ul class="list-group">
            </ul>
        </main>`
        const list = element.querySelector('.list-group');
        for (let todo of this.todos) {
            const tache = new TodoListItem(todo);
            tache.appendTo(list);
       }
        element.querySelector('form').addEventListener('submit', e => this.onSubmit(e));
        element.querySelectorAll('.btn-group button').forEach(button => {
            button.addEventListener('click', e => this.#toggleFilter(e));
            
        });  
    }
    /**
     * @param {SubmitEvent} e 
     */
    onSubmit(e) {  

        e.preventDefault();

        const title = new FormData(e.currentTarget).get('title').toString().trim();
        
        if (title === '') {
            return;
        }
        
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        };

        this.todos.push(newTodo);
        console.log(this.todos);
        const list = document.querySelector('.list-group');  
        const addNewTodo = new TodoListItem(newTodo);
        addNewTodo.appendTo(list);
        e.currentTarget.reset();
    }  

    /**
     * @param {PointerEvent} e 
     */
    #toggleFilter(e) {
        e.preventDefault();
        const filter = e.currentTarget.getAttribute('data-filter');
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active');
    }
}

class TodoListItem {

    #element

    /**
     * @param {Todo} todo 
     */
    constructor(todo) {
        const id = `todo-${todo.id}`
        const li = createElement('li', {
            class: 'todo list-group-item d-flex align-items-center'
        });
        const checkbox = createElement('input', {
            class: 'form-check-input',
            type: 'checkbox',
            id,
            checked: todo.completed ? '' : null
        });
        const label = createElement('label', {
            class: 'ms-2 form-check-label',
            for: 'id'
        }, todo.title);
        const button = createElement('button', {
            class: 'ms-auto btn btn-danger btn-sm'
        }, '<i class="bi-trash"></i>' );

        li.append(checkbox);
        li.append(label);
        li.append(button);
        this.#element = li;

        button.addEventListener('click', e => this.delete(e));
    }

    /**
     * @param {HTMLElement} element 
     */
    appendTo(element) {
        element.prepend(this.#element);
    }
    
    /**
     * @param {PointEvent} e 
     */
    delete(e) {
        e.preventDefault();
        this.#element.remove();
    }   
}