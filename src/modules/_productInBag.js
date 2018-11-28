let _bagProduct = ({
                       id,
                       name,
                       image_url,
                       description,
                       price,
                       special_price,
                   }) => {
    let $product = $(` <div class="bagProd" data-product-id="${id}" id="inB+${id}">`);
    // $product = $(`<a href="" class="single-view" data-product-id="${id}">`);
    // $product.append($(`<img src="${image_url}" alt="${name}" class="">`));
    $product.append($(`<span class="name">`).text(name));
    $product.append($(`<br>`));
    if(special_price!=null){
        // $product.append($(`<span class="price-no">`).text(price));
        $product.append($(`<span class="d-inline price">`).text(special_price));
    }
    else {
        $product.append($(`<span class="d-inline price">`).text(price));
    }
    var q=0;
    $product.append($(`<div class="float-right d-inline"><button class="plus+${id} d-inline text-lg-right"  onclick="plus(${id})">+</button>
<p id="quan+${id}" class="d-inline text-lg-right" data-count=${q}>${q}</p>
<button class="minus+${id} d-inline text-lg-right" onclick="minus(${id})">-</button></div> <hr>`));


    // $product.append($(`<button class="plus+${id} d-inline text-lg-right"  onclick="plus(${id})">+</button>`));
    // var q=0;
    // $product.append($(`<p id="quan+${id}" class="d-inline text-lg-right" data-count=${q}>${q}</p>`));
    // $product.append($(`<button class="minus+${id} d-inline text-lg-right" onclick="minus(${id})">-</button>`));
    return $product;
};

module.exports = _bagProduct;