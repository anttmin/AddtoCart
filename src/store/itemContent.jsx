import { createContext, useReducer } from "react";




const itemReducer = (state,action) => {
    if(action.type === 'ADD_ITEM'){
        const updatedItems = state.item.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            item : updatedItems,
            totalAmount : updatedTotalAmount
        };
    }
    return initialState;
}

export const itemContent = createContext({
    items : [],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {}

});



const ItemContentProvider = (props) => {
    const [itemState,dispatchItem] = useReducer(itemReducer,initialState)

    const addItemHandler = (item) => {
     dispatchItem({type:"ADD_ITEM",item})
    }
    
    const removeItemHandler = (id) => {
        dispatchItem({type:"REMOVE_ITEM",id})
    }

    const itemContent = createContext({
        items : itemState.item,
        totalAmount : itemState.totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    
    });


 <itemContent.Provider value={itemContent}>
    {props.children}
 </itemContent.Provider>
}

export default ItemContentProvider