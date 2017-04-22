
// export functionality to share it with the world...
export function setString(parent = document) {
    let node = document.createElement('h2');
    node.innerHTML = `This is a <code>'h2'</code> tag, built from the <code>h2</code> namespaced import!`;
    parent.appendChild(node);
}