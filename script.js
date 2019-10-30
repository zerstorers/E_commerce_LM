$(document).ready(function () {

    for (let i = 0; i < catalog.length; i++) {

        var product = $('<div class="card col-12 col-md-6 col-lg-3 p-2" >')
        var productImg = $('<img class="card-img-top" id="thumb" >')

        productImg.attr('src', catalog[i].thumb)

        var cardBody = $('<div class="card-body">')
        var productName = $("<div class ='card-title'>")

        productName.css("text-align", "center" )
        productName.css("font-weight","bold")
        productName.html(catalog[i].name)

        var productDesc = $("<p class ='card-text'>")
        productDesc.html(catalog[i].description)
        productDesc.text(productDesc.text().substr(0, 60)+'...');

        var productPrice = $("<p class='card-text mt-3 font-weight-bold'>")
        productPrice.html(catalog[i].price +"$")
        productPrice.css("text-align", "center")

        var productSheet = $('<a class="btn btn-success col-5 mr-3" href="product_sheet.html">')
        productSheet.html("more info")

        var cart = $('<button type="button" class="btn btn-primary col-5">')
        cart.html("Add to Cart")
        
        cardBody.append(productName, productDesc, productSheet, cart, productPrice)
        product.append(productImg, cardBody)
        $(".catalog").append(product)


    }


})