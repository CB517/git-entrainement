/**
 * @param {string} tagName - Le type d'élément à créer (ex: 'div', 'button', 'label')
 * @param {Object} attributes - Les attributs HTML à ajouter (ex: class, id, etc.)
 * @param {string} [attributes.class] - La classe CSS de l'élément
 * @param {string} [attributes.id] - L'ID de l'élément
 * @param {string} [attributes.type] - Le type d'input ou de bouton
 * @param {boolean} [attributes.hidden] - Masquer l'élément si `true`
 * @param {string} [attributes.for] - Associe un `<label>` à un `input` via son `id`
 * @param {string} [content] - Contenu textuel de l'élément
 * @returns {HTMLElement} - L'élément HTML créé
 */

export function createElement(tagName, attributes = {}, content ="") {
    const element = document.createElement(tagName);
    for (const attribute in attributes) {
        if(attributes[attribute] !== null) {
        element.setAttribute(attribute, attributes[attribute]);
        }
    };
    if (content) {
        element.innerHTML = content;
    };
    return element;
}
