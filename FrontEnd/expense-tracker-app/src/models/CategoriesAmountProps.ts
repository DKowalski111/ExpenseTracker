class CategoriesAmountProps {
  categoriesAmount: {
    [category:string] : string;
  }
  constructor(categoriesAmount:{[category:string]:string}){
    this.categoriesAmount = categoriesAmount;
  }
}

export default CategoriesAmountProps;