$(document).ready(function(){
    
    var cart = [
    {
        productId : 1,
        quantity : 1
    },
    {
        productId : 42,
        quantity : 2
    },
        {
        productId : 5,
        quantity : 7
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
    // Ajout donné dynamique
    cpt += 1
    $(tableth).html(cpt)
    $(".product_name:eq("+i+")").html(catalog[cartItem.productId].name)
    $(".prod_desc:eq("+i+")").html(catalog[cartItem.productId].description)
    tableDesc.text(tableDesc.text().substr(0, 5) + '...');
    var inputQuantity = $(".quantity:eq("+i+")").val(cartItem.quantity)
    $(".unit_price:eq("+i+")").html(catalog[cartItem.productId].price + "$")
    
    $(inputQuantity.val()).keyup{}
    
    // $(inputQuantity.val()).keyup (function)()({
    //     var result = inputQuantity.val()*catalog[cartItem.productId].price
    //     $(".total_price:eq("+i+")").html(result +"$")
    //     console.log(result)
        
})

    
}

// $(tableTrash).click(function(){
    
// })
})
            // $(".total_price").change(function() {
            
            //     var total = parseInt($(this).val());
            
            //     $(".total_price").not(this).each(function() {
            //         if(parseInt($(this).val()))
            //         {
            //           total += parseInt($(this).val());
            //         }
            //     });
            //     console.log(total);
            //  }); 