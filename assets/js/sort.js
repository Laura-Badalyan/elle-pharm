function toggleSortingBlock() {
    let filterDropdown = $(".shop-filter-dropdown")
    filterDropdown.hasClass("show") ? filterDropdown.removeClass("show") : filterDropdown.addClass("show")
}
$("#dropdown_sorty_by").click(toggleSortingBlock)


function initChangingItems() {
    let changingItems = {
        titles: [],
        prices: []
    }
    $(data).each((i, item) => {
        changingItems.prices.push(item.id);
        changingItems.titles.push(item.title);
    });
    return changingItems;
}

function sortBy(priceortitle) {
    let changingItems = initChangingItems();
    let arg = changingItems.prices
    if (priceortitle === "title") {
        arg = changingItems.titles
    }
    for (let i = 1; i < arg.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (arg[j + 1] < arg[j]) {
                [changingItems.prices[j + 1], changingItems.prices[j]] = [changingItems.prices[j], changingItems.prices[j + 1]];
                [changingItems.titles[j + 1], changingItems.titles[j]] = [changingItems.titles[j], changingItems.titles[j + 1]];
            }
        }
    }
    return changingItems
}
function sortByHighToLow() {
    let changingItems = sortBy("price")
    changingItems.prices.reverse();
    changingItems.titles.reverse();
    console.log(changingItems);
    insertData(changingItems)
    return changingItems
}
function sortByLowToHigh() {
    let changingItems = sortBy("price")
    insertData(changingItems)
    console.log(changingItems);
    return changingItems
}
function sortByAToZ() {
    let changingItems = sortBy("title")
    console.log(changingItems);
    insertData(changingItems)
    return changingItems;
}
function sortByZToA() {
    let changingItems = sortBy("title")
    changingItems.titles.reverse();
    changingItems.prices.reverse();
    console.log(changingItems);
    insertData(changingItems)
    return changingItems;
}
function insertData(changingItems) {
    $(".short_information_block>h2").each((i, item) => {
        let title = changingItems.titles[i];
        title = title.substring(0, 1).toUpperCase() + title.substring(1)
        console.log(title);
        item.innerText = title;

    })
    $(".currency_value").each((i, item) => {
        let price = changingItems.prices[i];
        console.log(changingItems.prices[i]);
        console.log(item.innerText);
        item.innerText = price;
    })
}

let sortItemLinks = $(".sort_filter_link");
$(sortItemLinks[0]).click(sortByHighToLow);
$(sortItemLinks[1]).click(sortByLowToHigh);
$(sortItemLinks[2]).click(sortByAToZ);
$(sortItemLinks[3]).click(sortByZToA);


// burger menu show and hide in media
function toggleBurgerMenuBlock() {
    let burgerMenuBlock = $("#top_menu_collapse")
    burgerMenuBlock.hasClass("show") ? burgerMenuBlock.removeClass("show") : burgerMenuBlock.addClass("show")
}
$(".navbar-toggler").click(toggleBurgerMenuBlock)
$(".close-btn").click(toggleBurgerMenuBlock)