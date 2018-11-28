let _bigProduct = ({
                 id,
                 name,
                 image_url,
                 description,
                 price,
                 special_price,
             }) => {
    let $product = $(`<div class="bigProd" data-product-id="${id}" id="b+${id}">`);
    $product.append($(`<button class="back" onclick="back(${id})">Back</button>`));
    $product.append($(`<br>`));
    // $product = $(`<a href="" class="single-view" data-product-id="${id}">`);
    $product.append($(`<img src="${image_url}" alt="${name}" class="bImg">`));
    $product.append($(`<span class="product-titleB">`).text(name));
    $product.append($(`<br>`));
    if(special_price!=null){
        $product.append($(`<span class="price-no">`).text(price));
        $product.append($(`<br>`));
        $product.append($(`<span class="price">`).text(special_price));
    }
    else {
        $product.append($(`<span>`).text(price));
    }
    $product.append($(`<br>`));
    $product.append($(`<button class="prod+${id}" id="buyBot" onclick="buy(${id})">Buy</button>`));
    $product.append($(`<br>`));
    $product.append($(`<span>`).text(description));


    return $product;
};

module.exports = _bigProduct;

