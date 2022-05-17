// alert("is working!");

// перекидываем из одного блока в другой картинку внутри about
/* window.onload = function () {
  function shift(toShift, insertAfter, width) {
    toShift = document.querySelector(toShift);
    insertAfter = document.querySelector(insertAfter);
    const parent = insertAfter.parentNode;
    let currentWidth = parent.clientWidth;

    if (currentWidth < width) {
      insertAfter.after(toShift);
      console.log(parent);
    } else {
      parent.append(toShift);
    }
  }
  shift("._toShift", "._insertAfter", 960);
}; */
/*

/* 
по специальному классу нахожу элемент, в рамках его родителя нахожу

0) если происходит ресайз или экран 960
1) нахожу все элементы с классом _toShift 
2) для каждого из них нахожу родителя
3) в родителе ищу элемент с классом _insertAfter
4)вставляю элемент _toShift 
5) иначе parent.append(_toShift );
*/
/*  
function shift(toShift, insertAfter, width) {
  toShift = document.querySelector(toShift);
  insertAfter = document.querySelector(insertAfter);
  const parent = insertAfter.parentNode;
  let currentWidth = parent.clientWidth;

  if (currentWidth < width) {
    console.log(parent.clientWidth + " " + parent);
    parent.insertBefore(toShift, insertAfter);
  } else {
    parent.append(toShift);
    console.log(parent);
  }
}

window.onresize = function () {
  shift(".about-img", ".about-bottom", 720);
  shift(".footer-column__streaming", ".footer-menu", 960);
}; */
