function setStrings(parent = document, ...elements) {
    elements.forEach(elemString => {
        let node = document.createElement(elemString);
        node.innerHTML = `This is a <code>'${elemString}'</code> tag, built the olden way`;
        parent.appendChild(node);
    });
}