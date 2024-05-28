exports.cartPage=class cartPage{

    constructor(page){
        this.page=page;
        this.numberOfbeerProducts="//div[@id='mydel']//div[3]";
    }
    async checkProductInCart(productname){
        const product=await this.page.$$(this.beerProduct);
        for(const beerproduct of this.beerProducts){
            console.log(await beerproduct.textContent())
            if(productname==await beerproduct.textContent()){
                return true;
                break;
            }
        }
    }
}