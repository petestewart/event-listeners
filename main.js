const pies = [{
    type: 'Apple',
    size: 'Large',
    crust: 'Lattice',
    price: 30,
    imageUrl: 'https://vaperztx.com/wp-content/uploads/2016/02/hfsbjvfqnflt18340bfj.jpg',
    owner: 'luke',
    aLaMode: true
}, {
    type: 'Pecan',
    size: 'Personal',
    crust: 'Flaky',
    price: 3,
    imageUrl: 'https://s3.amazonaws.com/cdn.priesters.com/images/large/Mini-Pecan-Pies-Economy-Packaged-min.jpg',
    owner: 'michael',
    aLaMode: false
}, {
    type: 'Blueberry',
    size: 'Regular',
    crust: 'Crumb',
    price: 400,
    imageUrl: 'https://photos.bigoven.com/recipe/hero/blueberry-pie-1c3ff8.jpg?h=500&w=500',
    owner: 'matt',
    aLaMode: true
}, {
    type: 'Meat Pie',
    size: 'Real Big',
    crust: 'Crumb',
    price: 1,
    imageUrl: 'https://i.pinimg.com/564x/98/bb/f2/98bbf291cd146d03b7c99fd711a2e2fa.jpg',
    owner: 'luke',
    aLaMode: false
},
{
    type: 'Pizza Pie',
    size: 'Real Big',
    crust: 'Thin',
    price: 6,
    imageUrl: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG',
    owner: 'luke',
    aLaMode: false
},
{
    type: 'Rhubarb',
    size: 'Pie Sized',
    crust: 'Normal',
    price: 100,
    imageUrl: 'https://photos.bigoven.com/recipe/hero/rhubarb-lemon-pie-2.jpg?h=500&w=500',
    owner: 'matt',
    aLaMode: true
}, {
type: 'Spanakopita',
size: 'Large',
crust: 'Filo',
price: 8,
imageUrl: 'https://photos.bigoven.com/recipe/hero/spanakopita-spinach-pie-06fd43.png?h=500&w=500',
owner: 'nobody',
aLaMode: false
}
];

const buildPies = (pieCollection) => {
    let domString = '';
    for (let i=0;i<pieCollection.length;i++) {
        domString += `
        <div class="pie">
            <h2><${pieCollection[i].type}</h2>
            <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type}">
            <p>This ${pieCollection[i].type} is a ${pieCollection[i].size}, it's owned by ${pieCollection[i].owner}, and has a ${pieCollection[i].crust} crust.</p>
            <h4>Price: ${pieCollection[i].price}</h4>
        </div>
        `;
    };
    printToDom('#pieContainer', domString);
}

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}

const init = () => {
    buildPies(pies);
}

init();