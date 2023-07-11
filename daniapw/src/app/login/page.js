import "./login.css"

export default function Login() {

    return (
        <div className="container">
            <input 
            placeholder="email" 
            type="text" />
            <input 
            placeholder="123456" 
            type="password" />
            <button>Login</button>
        </div>
    )

}