const data = [
  '001.jpg',
  '002.jpg',
  '003.jpg',
  '004.jpg',
  '005.jpg',
  '006.jpg',
  '007.jpg',
]
let index = 0;
const elemAdPgBar = document.querySelector('#AdPgBar');
const elemAdImgContainer = document.querySelector('#AdImgContainer');
setInit();
function setInit() {
  render();
  setEvent();
}
function setEvent() {
  elemAdPgBar.addEventListener('click', atclick);
}
function render() {
  for (let i = 0; i < data.length; i += 1) {
    elemAdImgContainer.innerHTML += `<img src="./images/${data[i]}" alt="advertisement" class="ad__img ">`
    elemAdPgBar.innerHTML += `<li class="ad__pgTab" data-num="${i}">
    ${i + 1}</li>`
  }
  elemAdPgBar.children[index].classList.add('js-ad__pgTab');
}
function atclick(e) {
  const self = e.target;
  let nowIndex = parseInt(self.dataset.num, 10);
  if (self.nodeName !== 'LI' || nowIndex === index) return;
  elemAdPgBar.children[index].classList.remove('js-ad__pgTab');
  elemAdPgBar.children[nowIndex].classList.add('js-ad__pgTab');
  elemAdImgContainer.style.transform = `translateX(${-100 * nowIndex}%)`;
  index = nowIndex;
}



