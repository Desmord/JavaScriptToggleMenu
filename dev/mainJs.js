import css from "./mainCss.css";


const content = document.querySelector(`.content`),
    menuButton = document.querySelector(`.menuIcon`),
    leftMargin = document.querySelector(`.menuMarginLeft`),
    rightMargin = document.querySelector(`.menuMarginRight`),
    menu = document.querySelector(`.menu`);

let contentShow = true;

const hideContent = () => content.style.opacity = `0`;

const showContent = () => content.style.opacity = `1`;

const showLeftMenuMargin = () => leftMargin.style.left = `0vw`;

const hideLeftMenuMargin = () => leftMargin.style.left = `-25vw`;

const showRightMenuMargin = () => rightMargin.style.left = `75vw`;

const hideRightMenuMargin = () => rightMargin.style.left = `100vw`;

const showMenu = () => menu.style.top = `0vh`;

const hideMenu = () => menu.style.top = `-100vh`;


menuButton.addEventListener(`click`, () => {

    if (contentShow) {
        hideContent();
        contentShow = !contentShow;
        showLeftMenuMargin();
        showRightMenuMargin();
        showMenu();
    } else {
        showContent();
        contentShow = !contentShow;
        hideLeftMenuMargin();
        hideRightMenuMargin();
        hideMenu();
    }

})