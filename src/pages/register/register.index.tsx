export const RegisterPage = ()=>{
    return(
    <div>
        <h1>Register Page</h1>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
        <p>Don't have an account? <a href="/register">Sign up</a></p>
    </div>)
}
