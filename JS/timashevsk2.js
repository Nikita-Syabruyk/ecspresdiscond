

function init(){
    let map = new ymaps.Map('map',{
    center: [45.61118640954301,38.94813778094389],
    zoom: 13
    });
//координаты краснодара

let placemark1 = new ymaps.Placemark([45.6066871673983,38.957243318419486],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. имени 40-летия Победы,<br> д. 174, Тимашевск.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
    
});
let placemark2 = new ymaps.Placemark([45.611706889444044,38.936847223840054],{
     // Зададим содержимое заголовка балуна.
     balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
     // Зададим содержимое основной части балуна.
     balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
     'Ул. им. Артюшкова В.Д., 2<br> г. Тимашевск.',
     // Зададим содержимое нижней части балуна.
     balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
     // Зададим содержимое всплывающей подсказки.
},{
});
let placemark3 = new ymaps.Placemark([45.63689112919677,38.939935460695935],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Ставропольская, Д. 100,<br> г. Тимашевск.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark4 = new ymaps.Placemark([45.60410525056728,38.92610477017415],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Симиренко, Д. 14/1,<br> г. Тимашевск.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark5 = new ymaps.Placemark([45.61451503435352,38.92307188352209],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Тургеневское Ш.,Д. 17,<br> Тимашевск,',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark6 = new ymaps.Placemark([45.6266849365875,38.95962626766028],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Солнечная, Д. 42<br> г. Краснодар.',
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