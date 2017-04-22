export function setH2(parent = document) {
    let node = document.createElement('h2');
    node.innerHTML = `This is a <code>'h2'</code> tag, built from the <code>setH2</code> named export!`;
    parent.appendChild(node);
}

export function setP(parent = document) {
    let node = document.createElement('p');
    node.innerHTML = `This is a <code>'p'</code> tag, built from the <code>setP</code> named export!`;
    parent.appendChild(node);
}
export function setPre(parent = document) {
    let node = document.createElement('pre');
    node.innerHTML = `This is a <code>'pre'</code> tag, built from the <code>setPre</code> named export!`;
    parent.appendChild(node);
}

