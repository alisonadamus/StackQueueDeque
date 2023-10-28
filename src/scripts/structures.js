let stack = "";
let deque = "";
let queue = "";
let N = 12;

function PushBack(structure, pushValue, display) {
  if (structure.split(", ").length <= N) {
    x = document.getElementById(pushValue).value;
    if (x == "") {
      alert("Enter a value")
    } else {
      structure = structure + x + ", ";
      console.log(structure);
      document.getElementById(display).textContent = structure;
      return structure;
    }
  } else {
    alert("structure full");
  }
}

function PushFront(structure, pushValue, display) {
  if (structure.split(", ").length <= N) {
    x = document.getElementById(pushValue).value;
    if (x == "") {
      alert("Enter a value")
    } else {
      structure = x + ", " + structure;
      console.log(structure);
      document.getElementById(display).textContent = structure;
      return structure;
    }
  } else {
    alert("structure full");
  }
}

function PopBack(structure, display) {
  if (!(structure.split(', ').length === 1)) {
    let tmpStructure = "";
    alert("Pop element " + structure.split(', ') [structure.split(
        ', ').length - 1]);
    for (let i = 0; i < structure.split(', ').length - 2; i++) {
      tmpStructure += structure.split(', ')[i] + ', ';
    }
    structure = tmpStructure;
    console.log(structure);
    document.getElementById(display).textContent = structure;
    return structure;
  } else {
    alert("structure empty");
  }
}

function PopFront(structure, display) {
  if (!(structure.split(', ').length === 1)) {
    let tmpStructure = "";
    alert("Pop element " + structure.split(', ') [structure.split(
        ', ').length - 1]);
    for (let i = 1; i < structure.split(', ').length - 1; i++) {
      tmpStructure += structure.split(', ')[i] + ', ';
    }
    structure = tmpStructure;
    console.log(structure);
    document.getElementById(display).textContent = structure;
    return structure;
  } else {
    alert("structure empty");
  }
}

function Clear(structure, display) {
  structure = "";
  document.getElementById(display).textContent = structure;
  alert("Cleared");
  return structure;
}

function BackElement(structure){
  if (!(structure.split(', ').length === 1)) {
    alert("Last element " + structure.split(', ')[structure.split(', ').length
    - 2]);
  } else {
    alert("structure empty");
  }
}

function FrontElement(structure){
  if (!(structure.split(', ').length === 1)) {
    alert("First element " + structure.split(', ')[0]);
  } else {
    alert("structure empty");
  }
}