function showBasketList() {
    let basketListModal = $(".basket_list_modal")
    basketListModal.hasClass("d-none") ? basketListModal.removeClass("d-none") : basketListModal.addClass("d-none")
}
function openOrCloseModal() {
    let basketModal = $("#basket_modal")
    basketModal.hasClass("d-block") ? basketModal.removeClass("d-block") : basketModal.addClass("d-block")
}
function addToBasket() {

    openOrCloseModal()
}
function showingItem() {
    let thisClosestBLock = this.closest(".product_short_description");
    $(".product_display_name").innerText = this.closest(".product_inner")
    let img = this.index;
    console.log(img);
    openOrCloseModal()
}

$(".a-submit").click(showingItem)
// let basketButtons = $(".a-submit");
// basketButtons[0].click(showingItem)

$(".close_basket_modal").click(openOrCloseModal)
$(".continue-shopping").click(openOrCloseModal)
$(".confirm-button").click(addToBasket)
$(".basket_icon").click(showBasketList)
$(".close-cart").click(showBasketList)
$(".remove_from_cart").click(openOrCloseModal)

let products = [];

function toShort(str, max = 50) {

    if (str.length > max) {
        return str.substring(0, max) + "....."
    }

    return str;

}

function toShow(prod) {
    $("#shop_products_ajax_content").empty();
    prod.map(product => {
        $("#shop_products_ajax_content").append(`

        <div class="cart_line cart_item">
        <div class="td-img">
            <span>
            <img src="assets/img/${product.image}" class="img rounded o_image_64_max">
            </span>
        </div>
        <div class="cart_item_info_block">
            <div class="cart_item_info">
                <div class="td-product_name">
                    <h6>
                        <a href="#">
                            <span>${product.title}</span>
                        </a>
                    </h6>
                    <div class="products_info">
                        <p class="sales_description">
                            <span>1 box x ${product.price} pcs.</span>,
                        </p>
                        <p class="product_qty">
                            <span>Qty:</span>
                            <span>
                                1
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="td-price td-qty">
                <div class="product_price">
                    <span style="white-space: nowrap;">$&nbsp;<span class="oe_currency_value">40.00</span></span>
                </div>
            </div>
        </div>
    </div>
        `)
    })
}

function cartTotal() {

    let count = $(".item-in-cart-cost").length;

    $(".my_cart_quantity").html(count);


    if (count > 0) {
        let totalCost = $(".item-in-cart-cost").toArray().map(el => el.innerHTML).reduce((x, y) => Number(x) + Number(y));
        // console.log(typeof totalCost);
        $(".total_value").html(`

            <div class="d-flex justify-content-between font-weight-bold px-3">
                <h4>Total</h4>
                <h4>$ <span class="cart-cost-total">${Number(totalCost).toFixed(2)}</span></h4>
            </div>

        `)
    } else {
        $(".total_value").html("empty cart")
    }

}


$("#shop_products_ajax_content").delegate(".add-to-cart", "click", function () {
    let currentItemId = $(this).attr("data-id");

    let productInfo = products.filter(el => el.id == currentItemId)[0];

    if ($(".item-in-cart").toArray().map(el => el.getAttribute("data-id")).includes(currentItemId)) {

        alert("Already Added")

    } else {

        $("#cart_content").append(`
    <div class="card border-0 item-in-cart" data-id="${productInfo.id}">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-end">
                <img src="${productInfo.image}" class="img-in-cart" alt="">
                <button class="btn btn-outline-danger remove-from-cart">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <p class="mt-3">
                ${productInfo.title}
            </p>
            <div class="d-flex justify-content-between align-items-end">
                <div class="form-row">
                    <button class="btn btn-outline-primary quantity-minus">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="form-control w-25 mx-2 quantity" unitPrice="${productInfo.price}" value="1" min="1">
                    <button class="btn btn-outline-primary quantity-plus">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <p class="mb-0">$ <span class="item-in-cart-cost">${productInfo.price}</span></p>
            </div>
            <hr>
        </div>
    </div>
    `);

    }

    cartTotal();

})

$("#cart_content").delegate(".remove-from-cart", "click", function () {

    $(this).parentsUntil("#cart_content").remove();
    cartTotal();

})

$("#cart_content").delegate(".quantity-plus", "click", function () {

    let q = $(this).siblings(".quantity").val();
    let p = $(this).siblings(".quantity").attr("unitPrice");
    let newQ = Number(q) + 1;
    let newCost = p * newQ;
    // console.log(p);
    $(this).siblings(".quantity").val(newQ);
    $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
    cartTotal();
})

$("#cart_content").delegate(".quantity-minus", "click", function () {

    let q = $(this).siblings(".quantity").val();
    let p = $(this).siblings(".quantity").attr("unitPrice");
    if (q > 1) {

        let newQ = Number(q) - 1;
        let newCost = p * newQ;
        // console.log(p);
        $(this).siblings(".quantity").val(newQ);
        $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
        cartTotal();

    }

})

$("#cart_content").delegate(".quantity", "keyup change", function () {

    let q = $(this).val();
    let p = $(this).attr("unitPrice");
    if (q > 1) {

        let newQ = Number(q);
        let newCost = p * newQ;
        // console.log(p);
        $(this).val(newQ);
        $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
        cartTotal();

    } else {
        alert("more than one");
    }

})


