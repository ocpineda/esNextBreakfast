
// export functionality to share it with the world...
export function setString(parent = document) {
    let node = document.createElement('pre');
    node.innerHTML = `This is a <code>'pre'</code> tag, built from the <code>pre</code> namespaced import!`;
    parent.appendChild(node);
}

