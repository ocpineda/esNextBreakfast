// export functionality to share it with the world...
export function setP(parent = document) {
    let node = document.createElement('p');
    node.innerHTML = `This is a <code>'p'</code> tag, built from the <code>setP</code> sent through a barrel!`;
    parent.appendChild(node);
}
