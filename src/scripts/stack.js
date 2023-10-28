function PushStack() {
  stack = PushBack(stack, "pushValueA", "displayStack");
}

function PopStack() {
  stack = PopBack(stack, "displayStack");
}

function SizeStack() {
  alert("Size stack " + (stack.split(', ').length - 1));
}

function ClearStack() {
  stack = Clear(stack, "displayStack");
}

function BackStack() {
  BackElement(stack);
}

function FrontStack(){
  FrontElement(stack);
}

function PushBackDeque() {
  deque = PushBack(deque, "pushValueB", "displayDeque");
}

