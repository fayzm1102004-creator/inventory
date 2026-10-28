import { useState } from "react";
function TodoList() {
const [todos,settodos]=useState(["learn react","learn nodejs"])
function addtodo(){
    settodos([...todos,"learn express"])
}
return(
<div>
{
todos.map((todo,i)=>{
    return(


        <ul key={i}>
<li>{todo}</li>
</ul>
)
})
}
<button onClick={addtodo}> add </button>
</div>
)
}
export default TodoList;