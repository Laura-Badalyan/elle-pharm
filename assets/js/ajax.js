let data = [];
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/albums',
  method: "GET",
  dataType: 'json',
  data: {
    testData: 'testdata'
  },
  success: function (result) {
    data = result;
    // console.log(data);
  }
});

// $.get("https://fakestoreapi.com/products/",function (data) {
//     products = data;
//     toShow(products);
// })
