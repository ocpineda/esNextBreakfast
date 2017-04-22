
export function setStrings(parent = document, ...elements) {
    elements.forEach(elemString => {
        let node = document.createElement(elemString);
        node.innerHTML = `This is a <code>'${elemString}'</code> tag, built from a module referenced in a script tag!`;
        parent.appendChild(node);
    });
}