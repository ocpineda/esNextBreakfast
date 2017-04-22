
// export functionality to share it with the world...
export function setStrings(parent = document, ...elements) {
    elements.forEach(elemString => {
        let node = document.createElement(elemString);
        node.innerHTML = `This is a <code>'${elemString}'</code> tag, built from a module!`;
        parent.appendChild(node);
    });
}