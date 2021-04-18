import React, {useState} from 'react';

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: {count: number }) => {
    return <div>{props.count}</div>
}


const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['raz', 'dva', 'tri', 'che'])

    const addUsers = () => {
        const newUsers = [...users, 'piat' + new Date().getTime() ]
        setUsers(newUsers)
    }

    return  <div>
        <button onClick={() => setCounter(counter + 1)}>+++</button>
        <NewMessagesCounter count={counter}/>
        <button onClick={addUsers}>add</button>
        <Users users={users}/>
    </div>

}

















// export default {
//     title: 'React.memo demo'
// }
//
// const NewMessagesCounter = (props: {count: number}) => {
//     return <div>{props.count}</div>
// }
//
// const UsersSecret = (props: {users: Array<string>}) => {
//     return <div>{
//         props.users.map((u, i) => <div key={i}>{u}</div> )
//     }</div>
// }
//
// const Users = React.memo(UsersSecret)
//
//
// const Example1 = () => {
//     const [counter, setCounter] = useState(0)
//     const [users, setUsers] = useState(['raz', 'dva', 'tri', 'four'])
//     const addUser = () => {
//         const newUser = [...users, 'sveta' + new Date().getTime()]
//         setUsers(newUser)
//     }
//
//     return <>
//         <button onClick={() => {setCounter(counter + 1)}}>+</button>
//         <button onClick={addUser}>add user</button>
//         <NewMessagesCounter count={counter}/>
//         <Users users={users}/>
//     </>
// }
//
// console.log(Example1)