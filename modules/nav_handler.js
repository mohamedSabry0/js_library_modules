const navHandler = {
  handleEvent(event) {
    // console.log(event.target)
    if (event.target.tagName === 'A') {
      const prevSec = document.getElementsByClassName('show')[0];
      prevSec.classList.toggle('show');
      const currSec = document.getElementById(`${event.target.id.split('-')[0]}-sec`);
      currSec.classList.toggle('show');
    }
  },
};

export default navHandler;
