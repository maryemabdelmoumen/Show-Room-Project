function makeCar(productName, productPrice, productImages, productCategory, productDescription, id) {
    return {
        productName: productName,
        productPrice: productPrice,
        productImages: productImages,
        productCategory: productCategory,
        productDescription: productDescription,
        list: [],
        add: add,
        post: post,

        counter: 0,
        id: id
    };
}

var car1 = makeCar('G class Pink', 99000, [".././images/roseBb.jpg", ".././images/pinkGclassIn.jpg"], "Marcadess", "Pink G class 2022", 1);
var car2 = makeCar(' Pink Porsh ', 99000, [".././images/porshe.webp", ".././images/porshIn.jpg"], "Porsh", "Pink porsh ", 2);
var car4 = makeCar(' G classRoo', 99000, [".././images/GclassRoo.jpg", ".././images/GlassRooIN.jpg"], "Marcades G class", "G class vernis", 3);
var car5 = makeCar('fuchia G class', 99000, [".././images/FuchiaEx.jpg", ".././images/FuchiaIn.jpg"], "Marcades G class", "fuchia G class", 4); 
// var car6 = makeCar()

var data = [car1, car2, car4, car5];

function add(productName, productPrice, productImages, productCategory, productDescription, id) {
    $('#add').on('click', function() {
        var car = makeCar(name, parseInt(price), [image], category, 'New Description', 5);
        data.push(car);
        render(data);
    });
} 



var each = function(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    } else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function(array, predicate) {
    var acc = [];
    each(array, function(e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}

var name = $('#name').val();
var price = $('#price').val();
var category = $('#category').val();
var image = $('#image').val();

function post() {

}

function render(data) {
    each(data, function(element, i) {
        $(".grid-container").append(`<div >
            <div class="grid-item">
              <img class="images" id="${element.id}"src=${element.productImages[0]} />
              <h1> ${element.productName}</h1> 
              <h1> ${element.productCategory}</h1>
              <h1> ${element.productDescription}</h1>
            </div>
          </div>`)
    })
}

render(data);

function searchThis(query) {
    var filtered = [];
    if (query !== "") {
        filtered = data.filter(function(car) {
            return car.productName.toLowerCase().includes(query.toLowerCase()) ||
                car.productCategory.toLowerCase().includes(query.toLowerCase());
        });
    } else {
        filtered = data;
    }
    return filtered;
}

var button = $(".searchButton");

button.on("click", function() {
    $(".grid-container").empty();
    var searchQuery = $('.searchTerm').val();
    var filteredData = searchThis(searchQuery);
    render(filteredData);
});

$(".images").click(function(event) {
    var car;
    var id = event.target.id
    console.log(event.target.id)
    var idOfCar = (Number(event.target.id));
    for (var i = 0; i < data.length; i++) {
        if (idOfCar === data[i].id) {
            idOfCar = data[i].productImages
            car = data[i]
        }
    }
    if (car.counter === 1) {
        car.counter = 0
    } else {
        car.counter = 1
    }
    $(`#${id}`).attr("src", idOfCar[car.counter])
});

$("#add").on("click", function() {
    add()
});