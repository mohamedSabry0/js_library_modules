class RemoveHandler {
  constructor(storage){
    this.storage = storage;
  }

  handleEvent(event){
    this.removeStorage(event.target);
    this.removeDisplay(event.target);
  }

  removeDisplay = (target) => {
    target.parentElement.remove();
  }

  removeStorage = (target) => {
    console.log(target.parentElement);
    const index = [...target.parentElement.parentElement.children].indexOf(target.parentElement);
    this.storage.listRemove(index);
  }



}

export default RemoveHandler;
