const data = [
  {
    url: 'https://www.f2e.idv.tw/%E6%B7%BA%E8%AB%87-css3-transition-%E8%BD%89%E5%A0%B4%E5%8B%95%E7%95%AB%E6%95%88%E6%9E%9C.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/07/css3-base-200x150.png',
  },
  {
    url: 'https://www.f2e.idv.tw/css3-transition-%E8%BD%89%E5%A0%B4%E5%8B%95%E7%95%AB%E6%87%89%E7%94%A8%E5%AF%A6%E4%BE%8B-%E6%BB%91%E5%8B%95%E9%81%B8%E5%96%AE%E7%AF%87.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/08/slide-menu-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/css3-transition-%E8%BD%89%E5%A0%B4%E5%8B%95%E7%95%AB%E6%87%89%E7%94%A8%E5%AF%A6%E4%BE%8B-%E6%BB%91%E5%8B%95%E5%BB%A3%E5%91%8A%E7%AF%87.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2014/05/css-slide-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/javascript-%E8%BC%AA%E6%92%AD%E5%BC%8F%E5%BB%A3%E5%91%8A.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/09/setinterval-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/%E4%BD%BF%E7%94%A8-veiwport-%E5%B0%8D%E6%96%BC%E8%A1%8C%E5%8B%95%E8%A3%9D%E7%BD%AE%E7%9A%84%E5%BD%B1%E9%9F%BF.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/08/viewport-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/dreamweaver-%E8%A1%8C%E7%82%BA-%E4%BA%92%E5%8B%95%E5%BC%8F%E6%9B%B4%E6%94%B9%E6%96%87%E5%AD%97%E5%A4%A7%E5%B0%8F.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/09/font-size-200x150.gif',
  },
  {
    url: 'https://www.f2e.idv.tw/dreamweaver-%E8%A1%8C%E7%82%BA-%E9%A1%AF%E7%A4%BA%E9%9A%B1%E8%97%8F%E5%85%83%E7%B4%A0.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/10/layer-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/dreamweaver-%E8%A1%8C%E7%82%BA-%E8%A8%AD%E5%AE%9A%E5%AE%B9%E5%99%A8%E6%96%87%E5%AD%97.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/10/inner-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/%E4%BF%AE%E6%AD%A3-iphone-%E6%89%8B%E6%A9%9F%E6%97%8B%E8%BD%89%E5%BE%8C%E7%95%AB%E9%9D%A2%E6%9C%83%E6%94%BE%E5%A4%A7%E7%9A%84%E5%95%8F%E9%A1%8C.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2014/04/fix-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/illustrator-%E6%91%BA%E7%B4%99%E6%95%88%E6%9E%9C.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/12/paper-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/illustrator-cs6-%E6%96%B0%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%B4%B9.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/12/cs6-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/dreamweaver-spry-%E9%81%B8%E5%96%AE%E5%88%97.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2012/12/spry-menu-200x150.jpg',
  },
  {
    url: 'https://www.f2e.idv.tw/%E6%B7%BA%E8%AB%87-html5.html',
    imgUrl: 'https://www.f2e.idv.tw/wp-content/uploads/2013/01/html5-200x150.jpg',
  },
];

let perPage = 3;
let pages = Math.round(data.length / perPage + 1);
let index = 0;
const elemAdPgBar = document.querySelector('#AdPgBar');
const elemShowBox = document.querySelector('#ShowBox');
const elemAdWrap = elemShowBox.querySelector('#AdWrap');
const elemAdPrev = elemShowBox.querySelector('#AdPrev');
const elemAdNext = elemShowBox.querySelector('#AdNext');

setInit();
function setInit() {
  render();
  setEvent();
  checker(index);
}
function setEvent() {
  elemAdPgBar.addEventListener('click', atClick);
  elemShowBox.addEventListener('click', controllerClicked);
}

function render() {
  elemAdWrap.innerHTML = makeDom('img', data.length);
  elemAdPgBar.innerHTML = makeDom('li', pages);
  elemAdPgBar.children[index].classList.add('js-ad__pgTab');
}

function makeDom(type,times) {
  let objE = document.createElement('div');
  switch (type) {
    case 'img':
      for (let i = 0; i < times; i += 1) {
        objE.innerHTML += `<a class="ad__link" href=${data[i].url}target="_blank"><img src = ${data[i].imgUrl} alt = "ad" width = "200" height = "150" class="ad__img"></a>`;
      }
      break;
    case 'li':
      for (let i = 0; i < times; i += 1) {
        objE.innerHTML += `<li class="ad__pgTab" data-num="${i}"></li>`;
      }
      break;
  }
  return objE.innerHTML;
}

function makePaging(str = '') {
  for (i = 0; i < pages; i += 1) {
    str += `<li class="ad__pgTab" data-num="${i}"></li>`
  }
  return str;
}

function makePicStr(str = '') {
  data.forEach((item) => {
    str += `
      <a class="ad__link" href="${item.url}" target="_blank">
        <img src="${item.imgUrl}" alt="" width="200" height="150" class="ad__img">
      </a>
    `
  })
  return str;
}

function atClick(e) {
  const self = e.target;
  let nowIndex = parseInt(self.dataset.num, 10);
  if (self.nodeName !== 'LI' || nowIndex === index) return;
  changepgBar(index, nowIndex);
  index = nowIndex;
}

function changepgBar(l, c) {
  elemAdPgBar.children[l].classList.remove('js-ad__pgTab');
  elemAdPgBar.children[c].classList.add('js-ad__pgTab');
  elemAdWrap.style.transform = `translateX(${-100 * c}%)`;
  checker(c);
}

function controllerClicked(e) {
  const self = e.target;
  let nowIndex = 0
  if (self.nodeName !== 'BUTTON') return;
  if (self.id === 'AdPrev') {
    nowIndex = index - 1;
  } else {
    nowIndex = index + 1;
  }
  changepgBar(index, nowIndex);
  index = nowIndex;
}

function checker(i) {
  switch (i) {
    case 0:
      elemAdPrev.style.display = 'none';
      elemAdNext.style.display = 'block';
      break;
    case pages - 1:
      elemAdPrev.style.display = 'block';
      elemAdNext.style.display = 'none';
      break;
    default:
      elemAdPrev.style.display = 'block';
      elemAdNext.style.display = 'block';
      break;
  }

}



