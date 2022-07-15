
const removeDisplay = (target) => {
  target.parentElement.remove();
}

const removeStorage = () => {

}

const removeHandler = {
  handleEvent(event){
    console.log(event.target);
    removeDisplay(event.target);
  }
}

export {
  removeHandler,
}
