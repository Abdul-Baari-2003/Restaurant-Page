const createRestaurantPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append img element
    const image = document.createElement('img');
    image.src = 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg';
    image.height = '300';
    pageContent.appendChild(image);

    //Create and append h1 element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Chung-FA';
    pageContent.appendChild(headline);

    //Create and append paragraph element
    const copy = document.createElement('p');
    copy.textContent = 'Fulfill Your Deepest Crave For Your Favorite Food';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantPage;