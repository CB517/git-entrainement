/**
 * @typedef {Object} Comment
 * @property {string} name 
 * @property {string} body 
 */

export class CommentsList {
    /** 
     * @type {Comment[]}
     * @private
     */
    #comments = [];

    /**
     * @param {Comment[]} comments 
     */
    constructor(comments) {
        this.#comments = comments;
    }

    /**
     * @param {HTMLElement} element 
     */
    appendTo(element) {
        const template = document.getElementById("card-template");
        if (!template) {
            console.error("⛔ ERROR: Template #card-template not found!");
            return;
        }

        this.#comments.forEach(comment => {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".card-text").textContent = `"${comment.body}"`;
            clone.querySelector(".text-body-secondary").textContent = `By: ${comment.name.split(" ")[0]}`;
            element.appendChild(clone);
        });

        console.log("✅ All comments have been successfully added!");
    }
}
