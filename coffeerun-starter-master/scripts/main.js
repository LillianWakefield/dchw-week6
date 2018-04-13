$(function () {
    var orders = [];

  function renderCoffeeOrder(order){
    var finalHTML = '<div class="order">'
    finalHTML += '<span>' + order.coffeeOrder+ '</span>';
    finalHTML += '<span>' + order.email+ '</span>';
    finalHTML += '<span>' + order.size+ '</span>';
    finalHTML += '<span>' + order.flavorShot+ '</span>';
    finalHTML += '<span>' + order.strength+ '</span>';
    finalHTML += '<button ctype="button" class="btn btn-danger">'+'Remove Order'+'</button>'
    finalHTML += '<div>'
    return finalHTML;
  };
    
    $('form').submit(function (e){
       e.preventDefault();
var currentOrder = {
    coffeeOrder: $('#coffeeOrder').val(),
    email: $("#emailInput").val(),
    size:$("input:checked").val(),
    flavorShot:$("#flavorShot").val(),
    strength:$("#strengthLevel").val(),   
};
orders.push(currentOrder);
var renderedHTML = renderCoffeeOrder(currentOrder);
$("#orderList").append(renderedHTML);
});

$(document).on('click', '.btn-danger', function() {
    $(this).parent().remove();

});
});
