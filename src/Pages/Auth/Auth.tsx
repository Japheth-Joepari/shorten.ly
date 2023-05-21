import { toast, ToastContainer } from "react-toastify";
import logo from "../../assets/images/url.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "../../assets/styles/Auth.css";

export default function Auth() {
  const { signInWithGoogle, loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  const googleSignin = () => {
    signInWithGoogle();
    console.log(loggedIn);
  };

  const twitterSignIn = () => {
    toast.warning("Twitter not allowed ... Use Google Instead");
  };

  const facebookSignIn = () => {
    toast.warning("Facebook not allowed ... Use Google Instead");
  };
  return (
    <div className="contain">
      <ToastContainer />
      <div className="bts">
        <Link to={"/"} className="img">
          <img src={logo} alt="" />
          <h4>
            <b> 🔗Short.is.gd</b>
          </h4>
        </Link>
        <a href="#" className="gplogin social" onClick={googleSignin}>
          <i className="fa-brands fa-google-plus" />
          <span>continue with Google</span>
        </a>
        <a href="#" className="fblogin social" onClick={facebookSignIn}>
          <i className="fa-brands fa-facebook" />
          <span>continue with Facebook</span>
        </a>
        <a href="#" className="twlogin social" onClick={twitterSignIn}>
          <i className="fa-brands fa-twitter" />
          <span>continue with Twitter</span>
        </a>
      </div>
    </div>
  );
}
