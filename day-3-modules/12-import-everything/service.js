
function setStrings(parent = document, ...elements) {
    elements.forEach(elemString => {
        let node = document.createElement(elemString);
        node.innerHTML = `This is a <code>'${elemString}'</code> tag, built by importing everything!`;
        parent.appendChild(node);
    });
}

let container = document.getElementById('container');

setStrings(container, 'h2', 'p', 'pre');