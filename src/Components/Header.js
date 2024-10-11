import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
const Header = () => {
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

  const user = useSelector((store) => store.user);
  return (
    <div className="absolute w-screen bg-gradient-to-br from-black z-10 flex justify-between">
      <img
        className="w-48 px-4 mx-3 my-2"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      />
      {user && (
        <div className="flex p-4 gap-2">
          <img src="profile.png" alt="profile" className="w-12 h-12 " />
          <button
            onClick={handleSignout}
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
