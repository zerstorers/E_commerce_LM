$(document).ready(function () {

    var cart = [
        {
            productId: 1,
            quantity: 1
        },
        {
            productId: 42,
            quantity: 2
        },
        {
            productId: 5,
            quantity: 7
        },
    ]

    // génération ligne de panier

    //  
    cpt = 0
    for (let i = 0; i < cart.length; i++) {

        // Génération des lignes panier
        var cartItem = cart[i]
        console.log(cartItem.productId);
        console.log(catalog[cartItem.productId]);

        var tableRow = $("<tr>")
        $("#basket").append(tableRow)
        var tableth = $('<th scope="row" class="d-none d-md-block">')
        tableRow.append(tableth)
        var tableProductName = $('<td class="d-none d-md-block product_name">')
        var tableDesc = $('<td class="d-none d-md-block prod_desc">')
        tableRow.append(tableProductName)
        tableRow.append(tableDesc)
        var tableinput = $('<td> <input type="number" class="quantity" value="0" min="0" max="1000" step="1" /> ')
        tableRow.append(tableinput)
        var unitPrice = ('<td class=" d-none d-md-block unit_price">')
        tableRow.append(unitPrice)
        var totalPrice = ('<td class=" d-none d-md-block total_price">')
        tableRow.append(totalPrice)
        var tableTrash = $('<td><i class="far fa-trash-alt">')
        tableRow.append(tableTrash)
        // 


        // Compteur
        cpt += 1
        $(tableth).html(cpt)
        // 


        // Ajout des donné dynamique name/description/quantité/prix
        $(".product_name:eq(" + i + ")").html(catalog[cartItem.productId].name)
        $(".prod_desc:eq(" + i + ")").html(catalog[cartItem.productId].description)
        tableDesc.text(tableDesc.text().substr(0, 5) + '...');
        var inputQuantity = $(".quantity:eq(" + i + ")").val(cartItem.quantity)
        $(".unit_price:eq(" + i + ")").html(catalog[cartItem.productId].price)
        // 

        var result = inputQuantity.val() * catalog[cartItem.productId].price
        $(".total_price:eq(" + i + ")").html(result)



    }
    // Generation du grand Total
    var sum = 0
    $(".total_price").each(function () {
        sum += parseInt($(this).html())
        $(".grandTotal").html(sum)

    })
    // 

    // $(".total_price").change(function() {
    //     $(this).attr("class").replace("quantity", "total_price")
    // })


    $(".quantity").change(function(){
        var result = inputQuantity.val() * catalog[cartItem.productId].price
        $(".total_price:eq(" + i + ")").html(result)
        $(this).attr("class").replace("")
    })
})





