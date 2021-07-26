// frontend/static/js/views/AbstractView.js
export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }

    async executeViewScript() {
        // Funções serão executadas aqui dentro
    }
}