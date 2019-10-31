$(document).ready(function () {
    for (let i = 0; i < 3; i++) {
        var carouselDiv = $('<div class="carousel-item">')
        if (i == 0) {
            carouselDiv.addClass('active')             
        }
        var j = Math.floor(Math.random()*catalog.length)

        var productImg = $('<img class ="d-block w-100">')
        productImg.attr('src', catalog[j].pictures[0])

        var linkProduct = $('<a>', {
            href : "product_sheet.html?product_id="+j+"",
        } )
        
        var carouselCaption = $('<div class="carousel-caption d-none d-md-block">')
        
        var carouselTitle = $('<h5>')
        carouselTitle.html(catalog[j].name)
        carouselCaption.append(carouselTitle)
        
        var carouselDesc = $('<p>')
        carouselDesc.html(catalog[j].description)
        carouselCaption.append(carouselDesc)
        carouselDesc.text(carouselDesc.text().substr(0, 60) + '...');
        
        var carouselPrice = $('<h5>')
        carouselPrice.html(catalog[j].price + "$")
        carouselCaption.append(carouselPrice)
        
        linkProduct.append(carouselCaption)
        carouselDiv.append(productImg, linkProduct)
        $('.carousel-inner').append(carouselDiv)
    }
    carouselCaption.click(function () {
        
    })
})

// id="product'+j+'"         ?product_id='+j+'"