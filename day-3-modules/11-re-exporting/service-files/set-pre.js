// export functionality to share it with the world...
export function setPre(parent = document) {
    let node = document.createElement('pre');
    node.innerHTML = `This is a <code>'pre'</code> tag, built from the <code>setPre</code> sent through a barrel!`;
    parent.appendChild(node);
}
