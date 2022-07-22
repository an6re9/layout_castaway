window.onload = () => {
  scrollMenu();
};

/*   прокрутка из меню до нужного блока
  и определение активной ссылки при скролле */

function scrollMenu() {
  const menuItems = Array.from(document.querySelectorAll("[data-link]"));
  const blocks = Array.from(document.querySelectorAll("[data-anchor]"));
  const header = document.querySelector(".header");
  const active = "active";
  let isScrolling;

  headerScrolling();

  window.addEventListener("scroll", (e) => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      makeLinkAktiveByScroll();
      headerScrolling();
    }, 100);
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", makeLinkActiveByClick);
    item.addEventListener("click", moveToAnchor);
  });

  function makeLinkActiveByClick(e) {
    menuItems.forEach((item) => item.classList.remove(active));
    e.target.classList.add(active);
  }

  function moveToAnchor(e) {
    const anchor = e.target.dataset.link;
    const anchorTop =
      document.querySelector(`.${anchor}`).getBoundingClientRect().top +
      1 +
      scrollY;

    window.scrollTo({
      top: anchorTop - compHeaderHeight(),
      behavior: "smooth",
    });
  }

  function makeLinkAktiveByScroll() {
    let activeBlock = blocks.find(
      (block) =>
        block.getBoundingClientRect().top - compHeaderHeight() <= 0 &&
        block.getBoundingClientRect().bottom - compHeaderHeight() > 0
    );
    if (activeBlock) {
      let activeItem = menuItems.find(
        (item) => item.dataset.link === activeBlock.dataset.anchor
      );

      menuItems.forEach((item) => item.classList.remove(active));
      if (activeItem) activeItem.classList.add(active);
    } else {
      menuItems.forEach((item) => item.classList.remove(active));
    }
  }

  function compHeaderHeight() {
    return header.getBoundingClientRect().height;
  }
  function headerScrolling() {
    if (window.pageYOffset > compHeaderHeight()) {
      header.classList.add("header_scroll");
      document.body.style.paddingTop = compHeaderHeight() + "px";
    } else {
      header.classList.remove("header_scroll");
      document.body.style.paddingTop = "0";
    }
  }
}
