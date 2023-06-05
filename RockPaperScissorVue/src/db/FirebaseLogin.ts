import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// handles login with email and password through firebase
function login(email: string, password: string) {
    const auth = getAuth()
    const user = signInWithEmailAndPassword(auth, email, password)
    return user
}

// handles logout through firebase
function logout() {
    const auth = getAuth()
    const user = signOut(auth)
    return user
}

export { login, logout }