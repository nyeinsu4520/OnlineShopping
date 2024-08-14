import {create} from "zustand";

const useCategoryStore = create((set)=>({
     categories : [
        { id: 0, name: "all", isActive: true },
        { id: 1, name: "electronics", isActive: false },
        { id: 2, name: "jewellery", isActive: false },
        { id: 3, name: "men's clothing", isActive: false },
        { id: 4, name: "women's clothing", isActive: false }
    ],

    activeCategory: (categoryId) => set((state)=> ({categories : state.categories.map((el) => el.id === categoryId ? {...el, isActive : true} : {...el, isActive : false}),})),


})
    
);

export default useCategoryStore;