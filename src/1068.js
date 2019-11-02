let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let N=+n.shift();
let parents=n.shift().split(' ').map(v=>+v);
let removeNodeNum=+n.shift();

class Node {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
    this.childrens = [];
  }
}

let nodes = Array.from(Array(51), () => new Node(-1, -1));
parents.forEach((v, i) => {
  if (v !== -1) {
    nodes[v].childrens.push(i);
  }
  nodes[i].parent = v;
  nodes[i].value = i;
});

let q = [];
let rootNode = nodes.find(v=>v.parent === -1);

if (removeNodeNum === rootNode.value) {
  console.log(0);
} else {
  q.push(rootNode.value);
  let removeNode = nodes.find(v=>v.value===removeNodeNum);
  removeNode.childrens = [];
  removeParentNode = nodes.find(v=>v.value===removeNode.parent);
  removeParentNode.childrens.splice(removeParentNode.childrens.indexOf(removeNodeNum), 1);
  
  let numOfLeaf = 0;
  while (q.length !== 0) {
    let nextNodeValue = q.shift();
    let nextNode = nodes.find(v=>v.value===nextNodeValue);
    if (nextNode !== undefined) {
      q.push(...nextNode.childrens);
      if (nextNode.childrens.length === 0) {
        numOfLeaf ++;
      }
    }
  }

  console.log(numOfLeaf);
}
