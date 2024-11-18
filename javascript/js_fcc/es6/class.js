// es6 class stuff

// class with constructor
class Keeb {
    constructor(name, form) {
        this._name = name,
        this._form = form
    }

    // get set
    get name() { return this._name };
    get form() { return this._form };

    set name(name) { this._name = name };
    set form(form) { this._form = form };
}