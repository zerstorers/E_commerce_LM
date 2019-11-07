
$(document).ready(function () {
    var GET_PARAM = function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };





    var productImg = $('<img class ="d-block w-100">')
    productImg.attr('src', catalog[GET_PARAM("product_id")].pictures[0])

    var productInfo = $('.card-body')

    var productTitle = $('.card-title')
    productTitle.html(catalog[GET_PARAM("product_id")].name)


    var productDesc = $('.card-text')
    productDesc.html(catalog[GET_PARAM("product_id")].description)


    var productPrice = $('.quantity')
    productPrice.html(catalog[GET_PARAM("product_id")].quantity)


    var productPrice = $('.price')
    productPrice.html(catalog[GET_PARAM("product_id")].price)


    var linkBasket = $('.btn-success')

    linkBasket.append("Add to Basket")
    productInfo.append(linkBasket)




    $('.previous').attr("href", "product_sheet.html?product_id=" + (GET_PARAM("product_id") - 1))

    $('.next').attr("href", "product_sheet.html?product_id=" + (GET_PARAM("product_id") + 1))


    //  ?product_id=" + GET_PARAM("product_id") + ""

    // Creation var cart
    var cart = []
    $('.btn-success').click(function () {
        var cartItem = {
            productId: GET_PARAM("product_id"),
                quantity: 1
        }
        cart.push(cartItem)


        // session storage
        var cart_json = JSON.stringify(cart);
        sessionStorage.setItem("cart", cart_json);

        
        var cart_str = sessionStorage.getItem(cart);
        var cartNew = JSON.parse(cart_str)
        
        
            if (cartNew == null) {
                cart.push(cartItem)
                
                

                var incr_quant = cart.quantity + 1
                var cartItem = {
                    productId: GET_PARAM("product_id"),
                    quantity: incr_quant
                }
                sessionStorage.clear()
                var cart_json = JSON.stringify(cart);
                sessionStorage.setItem("cart", cart_json);
                
                

            

        }


    })

})