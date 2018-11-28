let _makeHtml;
_makeHtml = ({
                 id,
                 name,
                 image_url,
                 description,
                 price,
                 special_price,
             }) => {
    let $product = $(`<li class="card col-xs-12 col-sm-4 col-md-3" data-product-id="${id}" id="${id}">`);
    // $product = $(`<a href="" class="single-view" data-product-id="${id}">`);
    $product.append($(`<img src="${image_url}" alt="${name}" class="img-fluid product-image mt-5">`));
    $product.append($(`<span class="product-title">`).text(name));
    if(special_price!=null){
        $product.append($(`<span class="price-no">`).text(price));
        $product.append($(`<span class="price">`).text(special_price));
	}
	else {
        $product.append($(`<span class="price">`).text(price));
    }
    // $product.append($(`<span>`).text(description));
    $product.append($(`<button class="prod" id="more" onclick="single(${id})">More</button> <button class="position-absolute align-bottom d-inline" id="buyBot" onclick="buy(${id})">Buy</button>`));
    return $product;
};

module.exports = _makeHtml;

