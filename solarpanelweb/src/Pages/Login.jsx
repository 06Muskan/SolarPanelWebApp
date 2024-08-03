import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import "./Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
    return(
        <div>
         <Header />
         <Navbar/>  
            <div className="signup-container">
               <div className="signup-heading">
                  <h4>Signup to create an account</h4>
               </div>    
                
                
                <div className="login-prompt">
                  <p>
                    Already have an account? <strong>Login</strong>
                  </p>
                </div>
                <div className="placeholder-part">
                   <input type="email" placeholder="username or email address"></input>
                   <input type="password" placeholder="Password"></input>
                </div>
                <div className="confirm-part">
                  {/* <i ></i> */}
                  <input type='checkbox' style={{marginBottom:'21px'}}></input>
                  <p>I would like to receive the latest news about solar panels</p>
                </div>
                <button className="signup-button">Signup</button>
            </div>
           <footer className="footer1">
          <div className="footer-links">
            <a href="terms.html">Terms & Conditions</a>
            <span>|</span>
            <a href="copyright.html">Copyright Policy</a>
            <span>|</span>
            <a href="privacy.html">Privacy Policy</a>
            <span>|</span>
            <a href="hyperlinking.html">Hyperlinking Policy</a>
          </div>
        </footer>
        <footer className="footer2">
           <div className="footer-content">
              <p> copyright &copy; 2024</p>
              <p>Website Content Management By Script Squad</p>
              <p>Last updated - 29/July/2024</p>
              <p className="highlight-red">Total Hits: 19586344</p>
            </div>
        </footer>  
        </div>
    );
}
    
    




export default Login;