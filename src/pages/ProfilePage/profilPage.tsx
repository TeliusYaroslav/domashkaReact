import { useUserContext } from "../../context/userContext" 

export function ProfilePage() {
    const { user, logout } = useUserContext() 

    if (!user) {
        return <p>Вы не авторизованы. <a href="/login">Войти</a></p> 
    }

    return (
        <div className="profile-container">
            <h1>Профиль</h1>
            <img src={user.image} alt="Avatar" className="profile-avatar" />
            <p>Имя: {user.username}</p>
            <p>Email:{user.email}</p>
            <button onClick={logout}>Выйти</button>
        </div>
    ) 
}