import React, { useState } from 'react';
function Profile(){

const [user, setUser] = useState({

name: "John Doe",age: 30,level:1
});
function changelevel(){
    setUser({...user,level:user.level+1})
} 
function changename(){


    setUser({...user,name:"sara"})
}

    return(


        <div>
<h3>{user.name}</h3>
<p>Age: {user.age}</p>
<p>Level: {user.level}</p>
<button onClick={changelevel}>Change Level</button>
<button onClick={changename}>Change Name</button>
        </div>
    )
}
export default Profile