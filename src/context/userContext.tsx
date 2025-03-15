import { createContext, useContext, useEffect, useState, ReactNode } from "react" 

interface IUser {
	id: number 
	username: string 
	email: string 
	image: string 
}

interface IUserContext {
    user: IUser | null 
    login: (email: string, password: string) => Promise<boolean>   
    register: (username: string, email: string, password: string) => Promise<boolean>   
    logout: () => void 
    isAuthenticated: () => boolean 
}

const UserContext = createContext<IUserContext | undefined>(undefined) 

export function useUserContext() {
	const context = useContext(UserContext) 
	if (!context) {
		throw new Error("error") 
	}
	return context 
}

interface IUserContextProvider {
	children: ReactNode 
}

export function UserContextProvider({ children }: IUserContextProvider) {
    const [user, setUser] = useState<IUser | null>(null) 

    async function getUser() {
        const token = localStorage.getItem("token") 
        if (!token) return 

        try {
            const res = await fetch("http://localhost:8000/api/user/me", {
                headers: { Authorization: `Bearer ${token}` },
            }) 
            if (res.ok) {
                const data = await res.json() 
                setUser(data) 
            }
        } catch (error) {
            console.error("Ошибка", error) 
        }
    }

    async function login(email: string, password: string): Promise<boolean> {
        try {
            const res = await fetch("http://localhost:8000/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }) 
            const data = await res.json() 

            if (res.ok) {
                localStorage.setItem("token", data.token) 
                await getUser() 
                return true 
            } else {
                console.error("Ошибка", data.message) 
                return false 
            }
        } catch (error) {
            console.error("Ошибка ", error) 
            return false 
        }
    }

    async function register(username: string, email: string, password: string): Promise<boolean> {
        try {
            const res = await fetch("http://localhost:8000/api/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            }) 
            const data = await res.json() 
            if (res.ok) {
                localStorage.setItem("token", data.token) 
                await getUser() 
                return true 
            } else {
                console.error("Ошибка", data.message) 
                return false 
            }
        } catch (error) {
            console.error("Ошибка", error) 
            return false 
        }
    }

    function logout() {
        localStorage.removeItem("token") 
        setUser(null) 
    }

    function isAuthenticated(): boolean {
        return !!user 
    }

    useEffect(() => {
        getUser() 
    }, []) 

    return (
        <UserContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    ) 
}