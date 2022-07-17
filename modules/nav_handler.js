class NavHandler {
  handleEvent(event){
    const prevSec = document.getElementsByClassName('show')[0];
    prevSec.classList.toggle('show');
    const currSec = document.getElementById(`${event.target.id.split('-')[0]}-sec`);
    currSec.classList.toggle('show');

  }
}

export default NavHandler;
