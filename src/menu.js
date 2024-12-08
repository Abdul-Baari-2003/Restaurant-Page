const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = "Our Menu Dishes";

    const menuList = document.createElement('ul');
    const menuListItem1 = document.createElement('li')
    menuListItem1.textContent = 'Pizza';
    const menuListItem2 = document.createElement('li');
    menuListItem2.textContent = 'Noodles';
    const menuListItem3 = document.createElement('li');
    menuListItem3.textContent = 'Spaghatti'
    menuList.appendChild(menuListItem1);
    menuList.appendChild(menuListItem2);
    menuList.appendChild(menuListItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;

