let data = [];
$.ajax({
  url: "https://fakestoreapi.com/products/",
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
