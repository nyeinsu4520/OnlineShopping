import {create} from "zustand";


const useTaskStore = create((set)=>({
  
        tasks: [
            { id: 1, task: "Complete JavaScript assignment", isDone: true },
            { id: 2, task: "Prepare for the meeting", isDone: false },
            { id: 3, task: "Buy groceries", isDone: false },
            { id: 4, task: "Read a chapter of the book", isDone: false },
            { id: 5, task: "Go for a run", isDone: false }
        ],
        addTask:(newTask)=>set((state)=>({tasks:[...state.tasks,newTask]})),
        removeTask:(taskId)=> set((state) => ({tasks:state.tasks.filter((el)=>el.id !== taskId)})),
        doneTask:(taskId)=>set((state) => ({tasks : state.tasks.map(el => el.id === taskId ? { ...el, isDone: !el.isDone } : el) })),
    
}));

export default useTaskStore;