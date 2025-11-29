import { useState } from "react";


const LearnState = () => {

    const [count, setCount] = useState<number>(0);
    const [email, setEmail] = useState<string>("enter your email");
    const [password, setPassword] = useState<string>("enter your password");

    return (
        <div>
            <h1>Learn State in React</h1>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <div>Count: {count}</div>

            <form>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
            </form>
        </div>
    );

}

export default LearnState;