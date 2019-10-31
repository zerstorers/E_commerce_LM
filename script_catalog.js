$(document).ready(function () {
    for (let i = 0; i < catalog.length; i++) {


        var product = $('<div class="card col-12 col-md-6 col-lg-3 p-2" >')
        var productThumb = $('<img class="card-img-top" id="thumb" >')

        productThumb.attr('src', catalog[i].thumb)

        var cardBody = $('<div class="card-body">')
        var productName = $("<div class ='card-title'>")

        productName.css("text-align", "center")
        productName.css("font-weight", "bold")
        productName.html(catalog[i].name)

        var productDesc = $("<p class ='card-text'>")
        productDesc.html(catalog[i].description)
        productDesc.text(productDesc.text().substr(0, 60) + '...');

        var productPrice = $("<p class='card-text mt-3 font-weight-bold'>")
        productPrice.html(catalog[i].price + "$")
        productPrice.css("text-align", "center")

        var productSheet = $('<a class="btn btn-success col-5 mr-3" href="product_sheet.html?product_id=' + i + '">')
        productSheet.html("more info")

        var cart = $('<button type="button" class="btn btn-primary col-5">')
        cart.html("Add to Cart")

        cardBody.append(productName, productDesc, productSheet, cart, productPrice)
        product.append(productThumb, cardBody)
        $(".catalog").append(product)


    }

    var navPagination = $('<nav class="paginationNav">')
    $('#pagin').append(navPagination)

    var ulPagination = $('<ul class="pagination pagination-sm">')
    navPagination.append(ulPagination)

    for (let i = 1; i < 14; i++) {
        
        var liPagination = $('<li class="page-item" aria-current="page">')
        ulPagination.append(liPagination)
    
        var aPagination = $('<a class="page-link" href="#">')
        aPagination.html([i])
        liPagination.append(aPagination)
        
    }


    pageSize = 8

    showPage = function (page) {
        $(".card").hide();
        $(".card").each(function (n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
        });
    }
    showPage(1)

    $("#pagin li a").click(function () {
        $("#pagin li a").removeClass("current");
        $(this).addClass("current");
        showPage(parseInt($(this).text()))
    });

    // var priceSlider = $('input[type="range"]').rangeslider({

    //     // Feature detection the default is `true`.
    //     // Set this to `false` if you want to use
    //     // the polyfill also in Browsers which support
    //     // the native <input type="range"> element.
    //     polyfill: true,

    //     // Default CSS classes
    //     rangeClass: 'rangeslider',
    //     disabledClass: 'rangeslider--disabled',
    //     horizontalClass: 'rangeslider--horizontal',
    //     verticalClass: 'rangeslider--vertical',
    //     fillClass: 'rangeslider__fill',
    //     handleClass: 'rangeslider__handle',

    //     // Callback function
    //     onInit: function() {},

    //     // Callback function
    //     onSlide: function(position, value) {},

    //     // Callback function
    //     onSlideEnd: function(position, value) {}
    // });

    // $('.form-group').append(priceSlider)


})