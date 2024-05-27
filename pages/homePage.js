exports.homePage=class homePage{

    constructor(page){
        this.page=page;
        this.allCategories="//li[@class='nav-item dropdown __allCategoriesSTM']";
        this.alcoholicDrinks="//a[contains(@class,'__cumSubNvAw')][normalize-space()='Alcoholic Drinks']";
        this.beer="//ul[@class='submenu dropdown-menu']//a[@class='dropdown-item'][normalize-space()='Beer']";
        this.beerProducts="//div[@id='mydel']//div[3]";
        //this.addToCartBtn1="//div[@class='__proLisVw row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4']//div[1]//div[1]//a[2]//div[1]";
        this.addToCartBtn2="//div[@id='addtocartBtn']";
        this.cartLink="//a[@class='__cartTop']//*[name()='svg']";
    }

    async addProductToCart(productname){
        const product=await this.page.$$(this.beerProduct);
        for(const beerproduct of this.beerProducts){
            if(productname==await beerproduct.textContent()){
                await beerProduct.click()
                break;
            }
        }
        await this.page.locator(this.this.addToCartBtn).click()
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().include("Added to your cart list")){
                await dialog.accept();
            }
        })
       
    }
    async gotoCart(){
        await this.page.locator(this.cartLink).clcick()
    }
}