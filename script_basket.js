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
    
    var tabbleRow = $("<tr>")
    $("#basket").append(tabbleRow)
    var tabbleth = $('<th scope="row" class="d-none d-md-block">')
    tabbleRow.append(tabbleth)
    var tabbletd = $('<td class="d-none d-md-block product_name">')
    tabbleRow.append(tabbletd)
    var tabbleinput = $('<td> <input type="number" value="0" min="0" max="1000" step="1" /> ')
    tabbleRow.append(tabbleinput)
    tabbleRow.append(tabbletd)
    tabbleRow.append(tabbletd)
    var tabbleTrash = $('<td><i class="far fa-trash-alt">')
    tabbleRow.append(tabbleTrash)
    tabbletd.html("test")
    // 
    // Ajout donné dynamique
    cpt += 1
    $(".product_name:eq("+i+")").html(catalog[cartItem.productId].name)
    $(tabbleth).html(cpt)
    
}

    $(tabbleTrash).click(function(){

    })
})