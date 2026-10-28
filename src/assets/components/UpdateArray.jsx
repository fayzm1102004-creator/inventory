import {useState} from "react";
import {useImmer} from "use-immer";
function Array(){
const [todos, setTodos] = useState([
  { id: 1, title: "مذاكرة React", done: false },
  { id: 2, title: "حل التمارين", done: false }
]);
function ToggleTodo(id){
    setTodos(todos.map((todo)=>{

if(todo.id===id){

return{...todo,done:!todo.done};

}
return todo;

    }))
}

const [todos2,updateTodos]=useTmmer([
{id:1,title:"مذاكرة React",done:false},
{id:2,title:"حل التمارين",done:false}
])

function hanldeAdd(text){

    updateTodos(draft=>{
draft.push({id: Date.now(),title:"fayez",done:false })
    })
}


function handleToggle(id){
updateTodos(draft=>{
    const todo =draft.find(t=>t.id===id);
    if(todo){
todo.done=!todo.done;
    }
})


function handleDelete(id){
updateTodos(draft=>{

const index=draft.findIndex(x=>x.id===id);
draft.splice(index,1)

})
const [cart, setCart] = useState([
  { id: 101, name: "ماوس", quantity: 1 },
  { id: 102, name: "كيبورد", quantity: 2 }
]);

function increaseQuantity(id) {
setCart(cart.map((item)=>{
if(item.id===id){
return({...item,quantity:item.quantity+1})


}


}))

}
}
    return(


        <div>

<ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.title}
          </span>
          <button onClick={() => handleToggle(todo.id)}>
            {todo.done ? "إلغاء الإنجاز" : "إنجاز"}
          </button>
          <button onClick={() => handleDelete(todo.id)}>حذف</button>
        </li>
      ))}
    </ul>
        </div>
    )
}

export default Array