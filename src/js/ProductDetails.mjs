export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    addProductToCart(product) {
        setLocalStorage(generateKey(), product);
    }
    renderProductDetails(){
        
    }

    init() {
        
    }

  }

