import React, {useState, useRef, useEffect} from 'react'

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Mike', age: 15},
    {name: 'Adam', age: 36}
]

const UserSearch: React.FC = () => {
    const inputRef= useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name:string, age: number} | undefined> ()

    useEffect(()=>{
        inputRef.current?.focus()
    }, [])
    const handleClick = ()=>{
        const foundUser = users.find(user=>user.name === name)
        setUser(foundUser)
    }

    return (
        <div>
            <div>User search</div>
            <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleClick}>Find User</button>
            {user && <div><div>user: {user?.name}</div><div>age: {user?.age}</div></div>}
        </div>

    )
}

export default UserSearch