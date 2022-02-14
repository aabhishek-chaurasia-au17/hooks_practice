import React, {useState, useEffect}from 'react'
import Loading from './github/loading'
import GitHubusers from './github/gitHubusers'

const UseEffectAPI = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUser = async () => {
        try {
            setLoading(false)
            const response = await fetch('https://api.github.com/users')
            setUsers(await response.json());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser()
    },[])

    if(loading){
        return <Loading/>
    }

  return (
    <>
        <GitHubusers user={users}/>
    </>
  )
}

export default UseEffectAPI