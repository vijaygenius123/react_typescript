import React, {useState} from 'react';

interface IState {
  user: {
    firstname: string
    lastname: string
    age: number
    address? : string
  }[]
}

function App(){

  const [users, setUsers] = useState<IState["user"]>([])

  return (
    <div>

    </div>
  );
}

export default App;
