function PushBackQueue() {
  queue = PushBack(queue, "pushValueC", "displayQueue");
}

function PopFrontQueue() {
  queue = PopFront(queue,"displayQueue");
}

function ClearQueue() {
  queue = Clear(queue,"displayQueue");
}

function SizeQueue() {
  alert("Size Queue " + (queue.split(', ').length - 1));
}

function BackQueue() {
  BackElement(queue);
}

function FrontQueue() {
  FrontElement(queue);
}
