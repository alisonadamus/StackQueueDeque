function PushFrontDeque() {
  deque = PushFront(deque, "pushValueB", "displayDeque");
}

function PopFrontDeque() {
  deque = PopFront(deque, "displayDeque");
}

function PopBackDeque() {
  deque = PopBack(deque, "displayDeque");
}

function ClearDeque() {
  deque = Clear(deque, "displayDeque");
}

function SizeDeque() {
  alert("Size Deque " + (deque.split(', ').length - 1));
}

function BackDeque() {
  BackElement(deque);
}

function FrontDeque() {
  FrontElement(deque);
}