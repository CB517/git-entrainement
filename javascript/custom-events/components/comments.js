export class CommentsList {
    #comments = [];
    #template;

    constructor(comments) {
        this.#comments = comments;
        this.#template = document.getElementById("card-template");
        if (!this.#template) {
            console.error("⛔ ERROR: Template #card-template not found!");
        }
    }

    /**
     * Ajoute les événements personnalisés à une carte
     * @param {HTMLElement} card - La carte du commentaire
     * @param {Object} comment - L'objet commentaire
     */
    addEventListeners(card, comment) {
        const viewBtn = card.querySelector("#view");
        const editBtn = card.querySelector("#clg");

        viewBtn.addEventListener("click", () => {
            const event = new CustomEvent("viewAuthor", { 
                detail: { author: comment.name } 
            });
            card.dispatchEvent(event);
        });

        editBtn.addEventListener("click", () => {
            const event = new CustomEvent("editComment");
            card.dispatchEvent(event);
        });

        card.addEventListener("viewAuthor", (e) => {
            alert(`Auteur : ${e.detail.author}`);
        });

        card.addEventListener("editComment", () => {
            card.style.backgroundColor = "gray";
        });
    }

    /**
     * Ajoute les commentaires à un élément du DOM
     * @param {HTMLElement} element - L'élément où ajouter les commentaires
     */
    appendTo(element) {
        if (!this.#template) return;

        this.#comments.forEach(comment => {
            const clone = this.#template.content.cloneNode(true);
            const card = clone.querySelector(".card");

            if (!card) {
                console.error("⛔ ERROR: La carte n'est pas trouvée !");
                return;
            }

            // 🎯 Remplissage des infos
            const firstName = comment.name.split(" ")[0];
            clone.querySelector(".card-text").textContent = `"${comment.body}"`;
            clone.querySelector(".text-body-secondary").textContent = `By: ${firstName}`;

            // 🎯 Ajout des événements via la nouvelle méthode
            this.addEventListeners(card, comment);

            element.appendChild(clone);
        });

        console.log("✅ Tous les commentaires ont été ajoutés !");
    }
}
