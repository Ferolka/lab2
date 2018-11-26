let _bigProduct = ({
                 id,
                 name,
                 image_url,
                 description,
                 price,
                 special_price,
             }) => {
    let $product = $(`<div class="bigProd" data-product-id="${id}" id="b+${id}">`);
    // $product = $(`<a href="" class="single-view" data-product-id="${id}">`);
    $product.append($(`<img src="${image_url}" alt="${name}" class="">`));
    $product.append($(`<span class="product-title">`).text(name));
    if(special_price!=null){
        $product.append($(`<span class="price-no">`).text(price));
        $product.append($(`<span>`).text(special_price));
    }
    else {
        $product.append($(`<span>`).text(price));
    }
    $product.append($(`<span>`).text(description));
    $product.append($(`<button class="prod+${id}" id="buyBot" onclick="buy(${id})">Buy</button>`));
    $product.append($(`<button class="back" onclick="back(${id})">Back</button>`));
    return $product;
};

module.exports = _bigProduct;

