function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener("DOMContentLoaded", function (event) {
    sleep(2500).then(() => { 
    $(".product__detail").html($(".product__detail").html().replace(/&nbsp;/g,''));
    var btn_cart = document.querySelector('#product .product__cart');
    if(btn_cart != null)
    {
      const text = document.createTextNode('Đặt hàng');
      btn_cart.appendChild(text);
    }  
});
});