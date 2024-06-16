

function init(){
    let map = new ymaps.Map('map',{
    center: [47.222734777772594,39.72122650297614],
    zoom: 12
    });
//координаты краснодара

let placemark1 = new ymaps.Placemark([47.220792680699496,39.72675690175177],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. имени 40-летия Победы,<br> д. 174, Ростов-на-Дону.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
    
});
let placemark2 = new ymaps.Placemark([47.23484066099739,39.68541869641425],{
     // Зададим содержимое заголовка балуна.
     balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
     // Зададим содержимое основной части балуна.
     balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
     'Ул. им. Артюшкова В.Д., 2<br> г. Ростов-на-Дону.',
     // Зададим содержимое нижней части балуна.
     balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
     // Зададим содержимое всплывающей подсказки.
},{
});
let placemark3 = new ymaps.Placemark([47.251836203751864,39.76629448133804],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Ставропольская, Д. 100,<br> г. Ростов-на-Дону.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark4 = new ymaps.Placemark([47.20345197301739,39.724471839288604],{
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/lenta2.png" height="50" width="165"> <br/>'+
    'Ул. Российская, Д. 257<br> г. Ростов-на-Дону.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "ЛЕНТА"',
},{
});
let placemark5 = new ymaps.Placemark([47.209562126043764,39.666497809429735],{
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/okey.png" height="50" width="165"> <br/>'+
    'Ул. Уральская, Д. 98/11<br> г. Ростов-на-Дону.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "ОКЕЙ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark6 = new ymaps.Placemark([47.226857697307295,39.78231164228101],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Солнечная, Д. 42<br> г. Ростов-на-Дону.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});

map.controls.remove('searchControl');//удаляем поиск
map.controls.remove('geolocationControl');
map.controls.remove('trafficControl');
map.controls.remove('typeSelector');
map.controls.remove('fullscreenControl');
map.controls.remove('rulerControl');
//map.controls.remove(['scrollZoom']);
map.controls.remove('zoomControl');

map.geoObjects.add(placemark1);
map.geoObjects.add(placemark2);
map.geoObjects.add(placemark3);
map.geoObjects.add(placemark4);
map.geoObjects.add(placemark5);
map.geoObjects.add(placemark6);
}


ymaps.ready(init); 