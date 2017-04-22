// export functionality to share it with the world...
export function setH2(parent = document) {
    let node = document.createElement('h2');
    node.innerHTML = `This is a <code>'h2'</code> tag, built from the <code>setH2</code> sent through a barrel!`;
    parent.appendChild(node);
}
