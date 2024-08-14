import {create} from "zustand";

// const useCounterStore = create(function(set){
//     return {
//         count: 5,
//         resetCount: function(){
//             return set({count:0});
//         },
//         increaseCount:function(){
//             return set(function(state){
//                 return {
//                     count:state.count+1
//                 };
//             });
//         },
//         decreaseCount:function(){
//             return set(function(state){
//                 return {
//                     count:state.count-1
//                 };
//             });
//         }

//     }
// });

const useCounterStore = create((set) => ({
    count: 0,
    resetCount: () => set({ count: 0 }),
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));


export default useCounterStore;