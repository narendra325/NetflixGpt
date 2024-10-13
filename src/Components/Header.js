import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeuser } from "../Utils/UserSlice";
import { LOGO } from "../Utils/Constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
     const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          }),
          navigate("/browse")
        );
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });

    return ()=> {
      unsubscribe()
    }
  }, []);

  const user = useSelector((store) => store.user);
  return (
    <div className="absolute w-screen bg-gradient-to-br from-black z-10 flex justify-between px-5">
      <img
        className="w-48 px-4 mx-3 my-2"
        src={LOGO}
        alt="Netflix-logo"
      />
      {user && (
        <div className="flex p-4 gap-2">
          <img src="profile.png" alt="profile" className="w-12 h-12 " />
          <button
            onClick={handleSignout}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
