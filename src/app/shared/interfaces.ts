export interface User{
    email: string
    password: string
    role: string
    token: string
}

export interface Todo{
    title: string
    isCompleted:  boolean
    list: string
}