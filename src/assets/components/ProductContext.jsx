import { createContext ,useReducer} from "react";
export const ProductContext=createContext([])
export const ProductDispatchContext=createContext(null)

function ProductReducer(produts, action) {
  switch (action.type) {
    case "deleted": {
      return produts.filter((item) => item.id !== action.id);
    }
    case "added": {
      return [...produts, action.newproduct];
    }
    case "increase": {
      return produts.map((item) => {
        if (item.id === action.id) {
          return { ...item, price: Number(item.price) + 100 };
        }
        return item;
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
const intial=[
{ id: 1, title: "Laptop Dell", price: 15000 },
  { id: 2, title: "Wireless Mouse", price: 300 },
];

export function ProductsProvider({children}){
const[product,dispatch]=useReducer(ProductReducer,intial)

return(


    <ProductContext.Provider value={product}>

        <ProductDispatchContext.Provider value={dispatch}>
            {children}
        </ProductDispatchContext.Provider>

    </ProductContext.Provider>
)

}
