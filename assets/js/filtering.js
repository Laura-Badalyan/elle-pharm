

function openAndCloseFilters() {
    $(this).next().hasClass("d-none") ? $(this).next().removeClass("d-none") : $(this).next().addClass("d-none")
}
$(".filter-item-name").click(openAndCloseFilters)

function initFilteringItems() {
    let changingItems = [];
    $(data).each((i, item) => {
        changingItems.push(item);
    });
    return changingItems;
}

function insertFilteredData(changingItems) {
    let results_count = changingItems.length;
    if(results_count == 0){
        $(".load_more_current_results").text("No products found")
        $(".load_more_total_results").text("")
    }
    else{
        $(".load_more_current_results").text(results_count)
        $(".load_more_total_results").text("of 20 results")
    }
    $(".shop_products_ajax_content div").addClass("d-none");

    changingItems.map((item) => {
        $(".shop_products_ajax_content").append(`
        <div class="col-12 brand-information-conteiner">
        <div class="brand-information">
            <div class="row">
                <div class="logo_block_parent">
                    <div class="col logo-block">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="150" height="70"
                            viewBox="0 0 99.2 33.2">
                            <path
                                d="M15.1,8.4,7.7,25,.4,41.6H3.8l3.6-8.2H22.8l3.6,8.2h3.4L22.4,25ZM8.8,30.2l.6-1.3L15.1,16l5.7,12.8.6,1.3H8.8Z"
                                transform="translate(-0.4 -8.4)" style="fill: #9e7059;fill-rule: evenodd"></path>
                            <path
                                d="M53.4,21.5a7.094,7.094,0,0,0-6.1,3.4,4.522,4.522,0,0,0-2-2.5,6.4,6.4,0,0,0-3.6-.9,6.756,6.756,0,0,0-3.5.9,7.556,7.556,0,0,0-2.4,2.3V21.9h-3V41.6h3.3V31.4a13.722,13.722,0,0,1,.5-4.1,4.251,4.251,0,0,1,1.7-2.2,4.845,4.845,0,0,1,2.6-.7,3.043,3.043,0,0,1,2.6,1.1,5.94,5.94,0,0,1,.8,3.3V41.6h3.3V30.2A6.1,6.1,0,0,1,49,25.8a4.762,4.762,0,0,1,3.4-1.4,4.228,4.228,0,0,1,2,.5,2.689,2.689,0,0,1,1.2,1.4,9.73,9.73,0,0,1,.3,2.9V41.6h3.3V28.1c0-2.2-.5-3.9-1.6-5C56.8,22,55.3,21.5,53.4,21.5Z"
                                transform="translate(-0.4 -8.4)" style="fill: #9e7059;fill-rule: evenodd"></path>
                            <path
                                d="M84.1,21.5A7.094,7.094,0,0,0,78,24.9a4.522,4.522,0,0,0-2-2.5,6.4,6.4,0,0,0-3.6-.9,6.756,6.756,0,0,0-3.5.9,7.556,7.556,0,0,0-2.4,2.3V21.9h-3V41.6h3.3V31.4a13.722,13.722,0,0,1,.5-4.1A4.251,4.251,0,0,1,69,25.1a4.845,4.845,0,0,1,2.6-.7,3.043,3.043,0,0,1,2.6,1.1,5.94,5.94,0,0,1,.8,3.3V41.6h3.3V30.2a6.1,6.1,0,0,1,1.4-4.4,4.762,4.762,0,0,1,3.4-1.4,4.228,4.228,0,0,1,2,.5,2.689,2.689,0,0,1,1.2,1.4,9.73,9.73,0,0,1,.3,2.9V41.6h3.3V28.1c0-2.2-.5-3.9-1.6-5C87.5,22,86,21.5,84.1,21.5Z"
                                transform="translate(-0.4 -8.4)" style="fill: #9e7059;fill-rule: evenodd"></path>
                            <rect x="94.5" y="13.7" width="3.9" height="19.5" style="fill: #9e7059"></rect>
                            <circle cx="96.6" cy="4.8" r="2.6" style="fill: #9e7059">
                            </circle>
                        </svg>
                    </div>
                </div>
                <div class="col information-block short_information_block">
                    <h2>${item.title}</h2>
                    <div class="description short_description">
                        <p>${item.description}</p>
                    </div>
                    <div class="read_more_parent_section">
                        <span class="read-more gh_link">
                            Learn More
                        </span>
                        <span class="chevron-down">
                            <svg width="7" height="4" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.25052 3.89416L0.117469 0.702602C0.0465201 0.627454 0.00486669 0.528186 0.000400291 0.423602C-0.00406611 0.319018 0.0289648 0.216384 0.0932353 0.135143C0.124419 0.0954055 0.163419 0.0628794 0.207684 0.0396927C0.251949 0.016506 0.300481 0.00318126 0.350105 0.000590334C0.399728 -0.0020006 0.449325 0.00620064 0.495651 0.0246575C0.541976 0.0431143 0.583986 0.0714109 0.618931 0.107696L3.49907 3.04393L6.3817 0.107696C6.41619 0.0714222 6.45779 0.0431008 6.50376 0.024612C6.54972 0.00612317 6.59898 -0.00210997 6.64828 0.000459265C6.69813 0.00311216 6.74689 0.016468 6.79142 0.0396658C6.83594 0.0628635 6.87524 0.0953883 6.90677 0.135143C6.96741 0.211055 7.00037 0.306315 6.99998 0.40451C7.00048 0.45975 6.9903 0.514543 6.97004 0.565713C6.94977 0.616882 6.91982 0.663411 6.88192 0.702602L3.74949 3.89416C3.68323 3.96194 3.59352 4 3.5 4C3.40649 4 3.31678 3.96194 3.25052 3.89416V3.89416Z"
                                    fill="#006FC8"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-sm-4 col-md-6 col-lg-4 col-6 product_inner">
        <div class="o_wsale_product_grid_wrapper o_wsale_product_grid_wrapper_1_1">
            <form method="post" class="card oe_product_cart">
                <div class="card-body p-1 oe_product_image">
                    <input type="hidden" name="csrf_token" value="dbc2a06dc8678a3e8ead897d0c1b09a0e89f5ac5o1730275893"
                        wfd-id="id4">
                    <a class="d-block h-100" itemprop="url" href="#/0001-ammi-aqua-7">
                        <span class="d-flex h-100 justify-content-center align-items-center">
                            <img src="${item.image}" class="img img-fluid" alt="[0001] Ammi Aqua">
                        </span>
                    </a>
                </div>
                <div>
                </div>
                <div class="card-info">
                    <div class="slide_product_add_to_card_section">
                        <h3 class="product_title">${item.title}</h3>
                        <p class="product_short_description" itemprop="description">
                            1 x 1.0 ml
                        </p>
                        <div class="o_wsale_product_btn pl-2">
                            <p class="product-price" itemprop="offers">
                                <span class="d-none">$</span>
                                <span class="d-none" itemprop="price">35.0</span>
                                <span data-oe-type="monetary">$&nbsp;<span
                                        class="currency_value">${item.price}</span></span>
                                <a href="#" role="button" class="a-submit">
                                    <svg width="24" height="15" viewBox="0 0 24 15" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_3226_87354" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="9"
                                            y="0" width="15" height="15">
                                            <rect x="9" width="15" height="15" fill="#C4C4C4"></rect>
                                        </mask>
                                        <path
                                            d="M20.4178 2.57196H19.6137L19.5983 2.48297C19.3537 1.06737 18.022 0 16.5006 0C14.9793 0 13.6475 1.06737 13.4031 2.48297L13.3876 2.57196H12.5829C11.7974 2.57261 11.0442 2.88439 10.4879 3.43913C9.93163 3.99387 9.61756 4.74641 9.61438 5.53219L9.5 10.5815C9.50173 11.7532 9.96785 12.8763 10.7961 13.7046C11.6244 14.5329 12.7472 14.9988 13.9183 15H19.0818C20.2548 14.9983 21.3792 14.5306 22.2077 13.6998C23.0362 12.869 23.501 11.7431 23.5 10.5695L23.3858 5.53907C23.3838 4.75238 23.0704 3.99852 22.5141 3.44246C21.9579 2.8864 21.2041 2.5734 20.4178 2.57196ZM14.6853 2.42833C14.9391 1.72283 15.6856 1.23021 16.5006 1.23021C17.3157 1.23021 18.0621 1.72283 18.3157 2.42833L18.3675 2.57196H14.6334L14.6853 2.42833ZM19.0823 13.7693H13.9189C13.0748 13.7696 12.265 13.4349 11.6672 12.8387C11.0694 12.2424 10.7324 11.4333 10.7301 10.5888L10.8446 5.53938C10.8457 5.07871 11.0292 4.63726 11.3551 4.31173C11.6809 3.98621 12.1224 3.80316 12.5829 3.8027H20.4172C20.8795 3.80449 21.3221 3.98961 21.6481 4.31744C21.9741 4.64528 22.1569 5.08908 22.1563 5.55152L22.2704 10.5767C22.27 11.4228 21.9341 12.2341 21.3364 12.8326C20.7387 13.4312 19.928 13.768 19.0823 13.7693Z"
                                            fill="white"></path>
                                        <path
                                            d="M14.593 5.57604V5.55598C14.5928 5.39821 14.53 5.24696 14.4185 5.1354C14.307 5.02385 14.1558 4.96111 13.9981 4.96094H13.9581C13.8004 4.96114 13.6492 5.0239 13.5377 5.13544C13.4262 5.24699 13.3635 5.39823 13.3633 5.55598V6.01296C13.3633 7.63971 14.7712 8.96322 16.5017 8.96322C18.2323 8.96322 19.64 7.6396 19.64 6.01263V5.55598C19.6398 5.39823 19.577 5.24699 19.4655 5.13544C19.354 5.0239 19.2029 4.96114 19.0452 4.96094H19.0052C18.8475 4.96111 18.6963 5.02385 18.5848 5.1354C18.4732 5.24696 18.4105 5.39821 18.4103 5.55598V6.01296C18.4103 6.96117 17.5541 7.73268 16.5017 7.73268C15.4493 7.73268 14.5931 6.96105 14.5931 6.01263V5.57604H14.593Z"
                                            fill="white"></path>
                                        <path
                                            d="M4.15196 8.27144V8.15354H6.33929C6.42563 8.15471 6.51135 8.13866 6.59146 8.10634C6.67157 8.07402 6.74447 8.02606 6.80594 7.96526C6.86741 7.90446 6.91622 7.83202 6.94953 7.75215C6.98285 7.67228 7 7.58657 7 7.5C7 7.41343 6.98285 7.32772 6.94953 7.24785C6.91622 7.16798 6.86741 7.09553 6.80594 7.03472C6.74447 6.97392 6.67157 6.92597 6.59146 6.89365C6.51135 6.86132 6.42563 6.84528 6.33929 6.84644H4.15196V4.6536C4.15196 4.48025 4.08328 4.31401 3.96101 4.19144C3.83874 4.06886 3.67291 4 3.5 4C3.32709 4 3.16126 4.06886 3.039 4.19144C2.91673 4.31401 2.84804 4.48025 2.84804 4.6536V6.84644H0.66072C0.574374 6.84528 0.488658 6.86132 0.408549 6.89365C0.32844 6.92597 0.255531 6.97392 0.194061 7.03472C0.132591 7.09553 0.0837867 7.16798 0.0504729 7.24785C0.0171591 7.32772 0 7.41343 0 7.5C0 7.58657 0.0171591 7.67228 0.0504729 7.75215C0.0837867 7.83202 0.132591 7.90446 0.194061 7.96526C0.255531 8.02606 0.32844 8.07402 0.408549 8.10634C0.488658 8.13866 0.574374 8.15471 0.66072 8.15354H2.84804V10.3464C2.84804 10.5197 2.91673 10.686 3.039 10.8086C3.16126 10.9311 3.32709 11 3.5 11C3.67291 11 3.83874 10.9311 3.96101 10.8086C4.08328 10.686 4.15196 10.5197 4.15196 10.3464V8.27144Z"
                                            fill="white"></path>
                                    </svg>
                                </a>
                            </p>
                            <span type="button" role="button" title="Add to Wishlist" data-action="o_wishlist"
                                class="o_add_wishlist " data-product-template-id="7" data-product-product-id="7">
                                <svg width="26" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.3349 11.3263L18.3816 11.2707C19.5352 9.90256 20.1106 8.12588 19.9824 6.32789C19.8318 4.77337 19.1282 3.32841 18.0041 2.26479C16.9145 1.19389 15.4734 0.572326 13.9595 0.520363C12.5341 0.513586 11.1529 1.02319 10.0629 1.95799L9.98422 2.02587L9.90284 1.9607C8.82677 1.03991 7.47204 0.524119 6.06632 0.5H5.91291C4.41237 0.567033 2.99267 1.21082 1.94032 2.30145C0.835927 3.40728 0.154083 4.87685 0.0167263 6.44735C-0.0457483 7.33218 0.0671886 8.22077 0.348827 9.06032C0.630464 9.89986 1.07506 10.6732 1.65619 11.3345C1.6922 11.3725 1.94299 11.6481 2.35252 12.096L3.73052 13.607L8.49149 18.8267C8.6846 19.0376 8.91729 19.207 9.17582 19.3249C9.43281 19.4404 9.71064 19.5 9.99155 19.5C10.2725 19.5 10.5503 19.4404 10.8073 19.3249C11.0666 19.2084 11.2999 19.0393 11.4929 18.828L15.3175 14.6333L18.3349 11.3263Z"
                                        fill="white"></path>
                                    <path
                                        d="M18.3313 11.3238L18.3772 11.2671C19.5771 9.74953 20.1297 8.04051 19.9744 6.32606C19.8203 4.76134 19.1169 3.3128 18.0013 2.26244C16.8988 1.18659 15.4615 0.567714 13.9568 0.52093C12.5392 0.510215 11.1624 1.01828 10.0632 1.95773L9.98335 2.02572L9.90252 1.95964C8.73444 1.00472 7.40859 0.5 6.0681 0.5C6.0168 0.5 5.96545 0.500724 5.91407 0.502174C4.42407 0.564785 3.00931 1.20594 1.94414 2.30133C0.846276 3.39275 0.163176 4.86536 0.0217504 6.44558C-0.121522 8.1837 0.445092 9.87355 1.66032 11.3325C1.69543 11.3706 1.94712 11.6463 2.35544 12.0939L3.73168 13.6032L8.49246 18.8265C8.68604 19.0393 8.91868 19.2086 9.17633 19.3243C9.43399 19.4401 9.71131 19.4998 9.99157 19.5C10.2718 19.5002 10.5492 19.4407 10.807 19.3252C11.0647 19.2098 11.2976 19.0407 11.4913 18.8282L15.314 14.6351C16.8641 12.9322 18.2092 11.4567 18.3313 11.3238ZM10.422 17.7543C10.3657 17.8141 10.2987 17.8616 10.2247 17.894C10.1508 17.9264 10.0714 17.9429 9.9913 17.9427C9.91119 17.9426 9.83191 17.9256 9.7581 17.8929C9.68429 17.8602 9.61744 17.8124 9.56144 17.7522L2.74315 10.2723C0.683447 7.79333 1.41665 4.98444 2.96856 3.42173C3.85216 2.53071 4.90313 2.05971 6.00786 2.05971C7.21648 2.05971 8.483 2.63079 9.48255 3.62678C9.62149 3.7675 9.80761 3.84519 10.0007 3.84305C10.1937 3.84091 10.3783 3.75913 10.5143 3.61536C11.4776 2.60918 12.6238 2.07658 13.8287 2.07658C15.0068 2.09383 16.1373 2.56792 17.0024 3.40759C18.6032 4.94664 19.2978 7.6666 17.2413 10.2741L17.2383 10.2779L17.2351 10.2815L10.422 17.7543Z"
                                        fill="#006FC8"></path>
                                    <defs>
                                        <clipPath id="clip0_3198_119168">
                                            <rect width="20" height="20" fill="white">
                                            </rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <span class="o_ribbon "></span>
            </form>
        </div>
        </div>
    `)
    })
}
// filter by category
function filterByCategory() {
    let filteringItems = initFilteringItems();
    let filteredItems = [];
    let category = $(this).find("span>span").text();
    filteringItems.map((item) => {
        if (item.category == category) {
            filteredItems.push(item)
        }
    })
    insertFilteredData(filteredItems)
}
$(".filter_item_link").click(filterByCategory);

// filter by brand letters
let brandClickedLetters = [];
function filterByBrand() {
    let letter = $(this).text();
    if (!($(this).hasClass("selected"))) {
        $(this).addClass("selected");
        brandClickedLetters.push(letter);
    }
    else {
        $(this).removeClass("selected");
        let updateBrandClickedLetters = brandClickedLetters.filter((it) => it != letter);
        brandClickedLetters = updateBrandClickedLetters;
    }

    $(".filer_brand_item").map(function () {

        $(this).parent().parent().hasClass("d-none") ? $(this).parent().parent().removeClass("d-none") : null;
        brandClickedLetters.find((item) => item == $(this).text().slice(0,1)) ? $(this).parent().parent().removeClass("d-none") : $(this).parent().parent().addClass("d-none")

    });

    if(brandClickedLetters.length == 0){
        $(".brand_filter").map(function (i,item) {
            $(this).removeClass("d-none");
        })
    }

}
$(".btn-letter").click(filterByBrand);

// filter by brands
let filteredBrands = [];
let brandFiltersCount = 0;

function showBrandFilters(){
    let filteredBrandName = $(this).children().text().trim();

    if($(this).hasClass("active")){
        $(this).removeClass("active");
        brandFiltersCount--;

        let updateBrandClickedItems = filteredBrands.filter((it) => it != filteredBrandName);
        filteredBrands = updateBrandClickedItems;

        if(brandFiltersCount<=2){
            $(".first_second").removeClass("d-none");
            $("#more_filters").addClass("d-none");
        }
        else{
            $("#more_filters").removeClass("d-none");

        }
        removeBrandFilters()
        filteredBrands.map((item)=>{
            $(".filter_container").append(`
            <div class="js_clean_filter_parent first_second">
                <span class="filter-name">${item}</span>
                <span class="js_clean_filter">
                    <img src="assets/img/Close.svg" alt="close">
                </span>
            </div>
            `);
            $(".sort-items-block").append(`
                <div class="js_clean_filter_parent">
                    <span class="filter-name">${item}</span>
                    <span class="js_clean_filter">
                        <img src="assets/img/Close.svg" alt="close">
                    </span>
                </div>
            `);
        })
    } 
    else{
        $(".all_brands_filter").removeClass("active");
        $(this).addClass("active");
        brandFiltersCount++;
        filteredBrands.push(filteredBrandName)

        if(brandFiltersCount<=2){
            removeBrandFilters()
            filteredBrands.map((item)=>{
                $(".filter_container").append(`
                <div class="js_clean_filter_parent first_second">
                    <span class="filter-name">${item}</span>
                    <span class="js_clean_filter">
                        <img src="assets/img/Close.svg" alt="close">
                    </span>
                </div>
                `);
                $(".sort-items-block").append(`
                    <div class="js_clean_filter_parent">
                        <span class="filter-name">${item}</span>
                        <span class="js_clean_filter">
                            <img src="assets/img/Close.svg" alt="close">
                        </span>
                    </div>
                `);
            })
        }
        else{

            $(".filter_container").html(`
        <div id="more_filters" class="dropdown dropdown_sorty_by dropdown_sorty_by_brand d-none">
            <div style="display: flex;">
                <a role="button" href="#" class="dropdown-toggle filterBrandTwoPlus">
                    <span class="sorting ">
                        <img src="assets/img/filters.svg" alt="filter">
                        <span class="brand_filters_count"></span>
                        Tags
                    </span>
                </a>&nbsp;
                <a class="reset_all" href="#">Reset all </a>
            </div>
        </div>

        <div class="dropdown-menu dropdown_menu_sortItems" role="menu" x-placement="bottom-start"
            style="position: absolute; transform: translate3d(15px, 36px, 0px); top: 0px; left: 0px; will-change: transform;">
            <div class="sort-items-block d-none">
            </div>
        </div>
            `);
            $(".filter-name").text(filteredBrandName);
            $(".sort-items-block").removeClass("d-none");
            $("#more_filters").removeClass("d-none");
            $(".first_second").addClass("d-none");
            
            filteredBrands.map((item)=>{
                $(".sort-items-block").append(`
                    <span class="js_clean_filter_parent">
                        <span class="filter-name"> ${item} </span>
                        <span class="js_clean_filter">
                            <img src="../assets/img/Close.svg" alt="close">
                        </span>
                    </span>
                `)
            })
        }

    } 
    $(".brand_filters_count").text(brandFiltersCount);
    $(".filterBrandTwoPlus").click(showAllFilters)

}

function removeBrandFilters(){

    $(".filter_container").html(`
        <div id="more_filters" class="dropdown dropdown_sorty_by dropdown_sorty_by_brand d-none">
            <div style="display: flex;">
                <a role="button" href="#" class="dropdown-toggle filterBrandTwoPlus">
                    <span class="sorting ">
                        <img src="assets/img/filters.svg" alt="filter">
                        <span class="brand_filters_count"></span>
                        Tags
                    </span>
                </a>&nbsp;
                <a class="reset_all" href="#">Reset all </a>
            </div>
        </div>

        <div class="dropdown-menu dropdown_menu_sortItems" role="menu" x-placement="bottom-start"
            style="position: absolute; transform: translate3d(15px, 36px, 0px); top: 0px; left: 0px; will-change: transform;">
            <div class="sort-items-block d-none">
            </div>
        </div>
    `);
    $(".sort-items-block").html(`
    <div id="more_filters" class="dropdown dropdown_sorty_by dropdown_sorty_by_brand d-none">
            <div style="display: flex;">
                <a role="button" href="#" class="dropdown-toggle filterBrandTwoPlus">
                    <span class="sorting ">
                        <img src="assets/img/filters.svg" alt="filter">
                        <span class="brand_filters_count"></span>
                        Tags
                    </span>
                </a>&nbsp;
                <a class="reset_all" href="#">Reset all </a>
            </div>
        </div>

        <div class="dropdown-menu dropdown_menu_sortItems" role="menu" x-placement="bottom-start"
            style="position: absolute; transform: translate3d(15px, 36px, 0px); top: 0px; left: 0px; will-change: transform;">
            <div class="sort-items-block d-none">
            </div>
        </div>`)
}

function resetAll(){
    console.log("resetAll");
}

function showAllFilters(){
    console.log("click");
    // $(".js-filter-tags-container").removeClass("d-none")
    // $("#more_filters").removeClass("d-none");
    // $(".dropdown_menu_sortItems").removeClass("d-none");
    $(".dropdown_menu_sortItems").hasClass("show") ?
    $(".dropdown_menu_sortItems").removeClass("show") :
    $(".dropdown_menu_sortItems").addClass("show");
    // $(".first_second").addClass("d-none")
    // $(".sort-items-block").addClass("d-block")

}

function allBrandsFilter(){
    $(".all_brands_filter").addClass("active");
    $(".brand_filter").removeClass("active");
}


$(".js_clean_filter").click(removeBrandFilters)
$(".brand_filter").click(showBrandFilters)
$(".all_brands_filter ").click(allBrandsFilter)
// $(".filterBrandTwoPlus").click(showAllFilters)
$(".reset_all").click(resetAll)
$(".reset-all-btn").click(resetAll)


// filter by Manufacturers
// ------------------------------------------------------------------------


// filter by Price
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#one').value=lowerVal
    document.querySelector('#two').value=upperVal
    showFilteredItems();
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=lowerVal
    document.querySelector('#two').value=upperVal
    showFilteredItems();
};

// fiter data prices

function showFilteredItems(){
    let filterItems = initFilteringItems();
    let filteredItems = [];

    filterItems.map((item) => {
        if (item.price >= lowerVal && item.price <= upperVal) {
            filteredItems.push(item)
        }
    })
    insertFilteredData(filteredItems)
}




