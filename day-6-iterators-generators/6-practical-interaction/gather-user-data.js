
/*
In this class we host the entire flow through a list of questions
posed to the user, as well as the logic for displaying them.  In
a practical sense, all of our logic for the user's workflow lives
in this generator.
 */
export class UserDataEntry {
    constructor(name, formId, displayId) {
        this.formId = formId;
        this.displayId = displayId;
        this.username = name;
        this.isGeEmployee = false;
        this.sso = null;
        this.email = null;
    }

    *getData() {
        const firstQuestion = this.buildFirstQuestion();
        const firstResponse = yield this.setInput(firstQuestion);

        const secondQuestion = this.buildSecondQuestion(firstResponse);
        const secondResponse = yield this.setInput(secondQuestion);

        yield this.buildFinalOutput(secondResponse);
    }

    setInput(object) {
        document.getElementById(this.formId).innerHTML = `
        <label>${object.label}</label><br/>
        <input type="${object.inputType}" id="input"/>
        `;
    }

    buildFirstQuestion() {
        return {
            inputType: 'number',
            label: `Well hello, ${this.username}! Enter your SSO`
        }
    }

    buildSecondQuestion(sso) {

        let label;

        if(/^\d{9}$/.test(sso)) {
            this.isGeEmployee = true;
            this.sso = sso;
            label = `That's a fine SSO, ${this.username}.  What's your email?`
        } else {
            label = `That's not a valid GE SSO.  That's ok, we'll move on.  What's your email?`
        }

        return {
            label,
            inputType: 'email'
        }
    }

    buildFinalOutput(email) {
        this.email = email;

        let markup = `
        <h3>Ok!</h3>
        <p>Your username is ${this.username}</p>
        <p>Your email address is ${this.email}</p>
        `;

        if(this.isGeEmployee) {
            markup += `<p>You are a GE employee</p><p>Your SSO is ${this.sso}</p>`
        } else {
            markup += `<p>You are not a GE employee</p>`
        }

        document.getElementById(this.displayId).innerHTML = markup;
    }
}