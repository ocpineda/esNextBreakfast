
// export functionality to share it with the world...
export function setString(parent = document) {
    let node = document.createElement('p');
    node.innerHTML = `This is a <code>'p'</code> tag, built from the <code>p</code> namespaced import!`;
    parent.appendChild(node);
}
