import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const DeveloperLogin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


    const handleLogin = () => {
        // In a real-world scenario, you would send a request to a server for authentication.
        // For simplicity, we'll just check if the username and password are both 'admin'.
        if (username === 'developer' && password === 'developer') {
          // Successful login, you can redirect or perform other actions here.
          alert('Login successful!');
        } else {
          setError('Invalid username or password');
        }
      };
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Developer Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Link to='/DeveloperPortal'><button>Log In</button>
        </Link>
        <div class="social">
          <div className="go"><i class="fab fa-google"></i>  Google</div>
          <div className="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </>
    
  )
}

export default DeveloperLogin