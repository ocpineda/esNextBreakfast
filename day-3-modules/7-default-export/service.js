
function setStrings(parent = document, ...elements) {
    elements.forEach(elemString => {
        let node = document.createElement(elemString);
        node.innerHTML = `This is a <code>'${elemString}'</code> tag, built from a default export!`;
        parent.appendChild(node);
    });
}

export default setStrings;