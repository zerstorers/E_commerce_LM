$(document).ready(function () {

    // var cart = [
    //     {
    //         productId: 1,
    //         quantity: 1
    //     },
    //     {
    //         productId: 42,
    //         quantity: 2
    //     },
    //     {
    //         productId: 5,
    //         quantity: 7
    //     },
    // ]
// récupération session Storage


var cart = sessionStorage.getItem(cart);
cart =JSON.parse(cart)
console.log(cart);

var cart = sessionStorage.getItem("cart");

    if(cart == null) {
        cart = []
    } else {
        cart = JSON.parse(cart)
    }
    // génération ligne de panier

    //  
    cpt = 0
    for (let i = 0; i < cart.length; i++) {

        // Génération des lignes panier
        var cartItem = cart[i]
        var tableRow = $('<tr id="rowProduct-' + cartItem.productId + '">')
        $("#basket").append(tableRow)
        var tableth = $('<th scope="row" id="productNum-'+ cartItem.productId +'" class="d-none d-md-block">')
        tableRow.append(tableth)
        var tableProductName = $('<td id="productName-' + cartItem.productId + '"class="product_name">')
        var tableDesc = $('<td id="prodDesc-' + cartItem.productId + '"class="d-none d-md-block prod_desc">')
        tableRow.append(tableProductName)
        tableRow.append(tableDesc)
        var tableinput = $('<td> <input type="number" id="input-' + cartItem.productId + '" class="quantity" value="0" min="0" max="1000" step="1" /> ')
        tableRow.append(tableinput)
        var unitPrice = ('<td id="unitPrice-' + cartItem.productId + '"class=" d-none d-md-block unit_price">')
        tableRow.append(unitPrice)
        var totalPrice = ('<td id="totalPrice-' + cartItem.productId + '"class="total_price">')
        tableRow.append(totalPrice)
        var tableTrash = $('<td><i id="trash-' + cartItem.productId + '"class="far fa-trash-alt pr-5">')
        tableRow.append(tableTrash)
        // 


        // Compteur
        cpt += 1
        $(tableth).html(cpt)
        // 

        // Ajout des donné dynamique name/description/quantité/prix
        $(".product_name:eq(" + i + ")").html(catalog[cartItem.productId].name)
        $(".prod_desc:eq(" + i + ")").html(catalog[cartItem.productId].description)
        tableDesc.text(tableDesc.text().substr(0, 30) + '...');
        var inputQuantity = $(".quantity:eq(" + i + ")").val(cartItem.quantity)
        $(".unit_price:eq(" + i + ")").html(catalog[cartItem.productId].price)
        var result = inputQuantity.val() * catalog[cartItem.productId].price
        $(".total_price:eq(" + i + ")").html(result)



    }
    // Generation du grand Total
    var sum = 0
    $(".total_price").each(function () {
        sum += parseInt($(this).html())
        $(".grandTotal").html(sum)
        // génération TVA
        var tva = (sum / 120) * 20
        var tvafixed = tva.toFixed(2);
        $(".tva").html(tvafixed)
        // génération HT
        var ht = sum - tvafixed
        var htfixed = ht.toFixed(2);
        $(".prixHT").html(htfixed)



    })

    // modifiction en temps réel du prix total

    $(".quantity").change(function () {
        var idQuant = $(this).attr("id")
        cartItem.quantity = idQuant.val(cartItem.quantity)
        cart.push(cartItem.quantity)
        var cart_json = JSON.stringify(cart);
        sessionStorage.setItem("cart", cart_json);

        var idUP = idQuant.replace("input", "unitPrice")
        var idTotalPrice = idUP.replace("unitPrice", "totalPrice")
        var UP = $("#" + idUP)
        var TP = $("#" + idTotalPrice)
        var result = parseInt($(this).val()) * parseInt(UP.html())
        TP.html(result)
        

        
        // Generation du grand Total
        var sum = 0
        $(".total_price").each(function () {
            sum += parseInt($(this).html())
            $(".grandTotal").html(sum)
            // génération TVA
            var tva = (sum / 120) * 20
            var tvafixed = tva.toFixed(2);
            $(".tva").html(tvafixed)
            // génération HT
            var ht = sum - tvafixed
            var htfixed = ht.toFixed(2);
            $(".prixHT").html(htfixed)



        })
    })
    $(".far").click(function () {
        var idTrash = $(this).attr("id")
        console.log(idTrash)

        var idRow = idTrash.replace("trash-", "rowProduct-")
        console.log(idRow)
        var row = $("#" + idRow)
        row.remove()

        var idCart = idTrash.replace("trash-", "")
        for (let i = 0; i < cart.length; i++) {
            if(idCart == cart[i].productId){
                cart.splice(i,1)
                var cart_json = JSON.stringify(cart);
                sessionStorage.setItem("cart", cart_json);
                
            }

            
            
        }
        console.log(cart)
        


    })


    
})





