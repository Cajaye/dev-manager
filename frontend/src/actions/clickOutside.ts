export function clickOutside(node: HTMLElement) {
  const handleClickEvent = (event) => {
    if (!node.contains(event.target)) {
      //if node is not a decendant of event.target?
      //target would be whatever we assign use:clickOutside to
      node.dispatchEvent(new CustomEvent("outclick")); //makes a new custom event called outclick
    }
  };
  document.addEventListener("click", handleClickEvent, true); //add event listener to the page

  return {
    destroy() {
      document.removeEventListener("click", handleClickEvent, true);
    },
  };
}
//use:clickOutside on:outclick={}
