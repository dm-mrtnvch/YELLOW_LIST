import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}


export const Example1 = () => {

    const [a, setA] = useState(4)
    const [b, setB] = useState(4)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 1
            while (fake < 100000000) {
                fake++
                const fakeTemp = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <div>
            <div>result for A: {resultA}</div>
            <div>result for B: {resultB}</div>
        </div>
    </>

}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['raz', 'dva', 'tri', 'che'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUsers = () => {
        const newUsers = [...users, 'piat' + new Date().getTime()]
        setUsers(newUsers)
    }



    return <div>
        <button onClick={() => setCounter(counter + 1)}>+++</button>
        <button onClick={() => addUsers()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </div>

}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js', 'css', 'html'])

    // const newArray = useMemo(() => {
    //     return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    // }, [books])

    const addBook = () => {
        console.log(books)
        const newBook = [...books, 'angular' + new Date().getTime()]
        setBooks(newBook)
    }

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBook = [...books, 'angular' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            const newBook = [...books, 'angular' + new Date().getTime()]
            setBooks(newBook)

    }, [books])


    return <div>
        <button onClick={() => setCounter(counter + 1)}>+++</button>
        {/*<button onClick={() => addBook()}>add book</button>*/}
        {counter}
        <Book  addBook={memoizedAddBook}/>
        {books}
        {/*books={newArray} */}
    </div>

}

type BookSecretType = {
    // books: Array<string>
    addBook: () => void
}
// можно типизировать и так:
// (props: {books: Array<string>, addBook: () => void}

const BookSecret = (props: BookSecretType) => {
    console.log('Books')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
    </div>
}

const Book = React.memo(BookSecret)


// import React, {useMemo, useState} from 'react';
//
// export default {
//     title: 'useMemo'
// }
//
// export const DifficultCountExample = () => {
//
//     const [a, setA] = useState(5)
//     const [b, setB] = useState(5)
//
//     let resultA = 1
//     let resultB = 1
//
//     resultA = useMemo(() => {
//         let tempResultA = 1
//         for(let i = 1; i <= a; i++){
//             let fake = 0
//             while(fake < 10000000){
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempResultA = resultA * i
//         }
//         return resultA
//     },[a])
//
//
//
//     for(let i = 1; i <= b; i++){
//         resultB *= i
//     }
//
//     return <>
//         <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
//         <input value={a} onChange={(e) => setA(+(e.currentTarget.value))}/>
//
//         <div>
//             Result fpr a: {resultA}
//         </div>
//         <div>
//             Result fpr b: {resultB}
//         </div>
//         </>
// }
//
//
//
// export const HelpsForReactMemoExample = () => {
//
//
//     const UsersSecret = (props: { users: Array<string> }) => {
//         return <div>{
//             props.users.map((u, i) => <div key={i}>{u}</div>)
//         }</div>
//     }
//
//     const Users = React.memo(UsersSecret)
//
//
//     const HelpsToReactMemo = () => {
//         const [counter, setCounter] = useState(0)
//         const [users, setUsers] = useState(['raz', 'dva', 'tri', 'four'])
//
//         const newArray = useMemo(()=>{
//             const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
//             return newArray
//         },[users])
//
//         const addUser = () => {
//             const newUser = [...users, 'sveta' + new Date().getTime()]
//             setUsers(newUser)
//         }
//
//         return <>
//             <button onClick={() => {
//                 setCounter(counter + 1)
//             }}>+</button>
//             <button onClick={() => addUser()}>add user</button>
//             {counter}
//             <Users users={newArray}/>
//         </>
//     }
// }
//
//
//
//
