import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    GithubAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState, useEffect } from "react";

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setSigned(true);
            } else {
                setUser(null);
                setSigned(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setSigned(true);
            })
            .catch((error) => {
                console.log("Error is:", error);
                setUser(null);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign Out Successfully");
                setUser(null);
                setSigned(false);
            })
            .catch((error) => {
                console.log("Error is:", error);
            });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
                setSigned(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <button
                    onClick={handleGoogleAuth}
                    className={`btn bg-[#7b3aec] text-white ${
                        signed ? "hidden" : "block"
                    }`}
                >
                    Login With Google <i className="fa-brands fa-google"></i>
                </button>
                <button
                    onClick={handleGithubSignIn}
                    className={`btn border border-[#7b3aec] text-[#7b3aec] ${
                        signed ? "hidden" : "block"
                    }`}
                >
                    Login With Github <i className="fa-brands fa-github"></i>
                </button>
            </div>

            {user && (
                <div className=" bg-[#7b3aec] text-white my-5 p-4 md:p-8 rounded-lg flex justify-between flex-col items-center gap-5 w-max mx-auto text-center">
                    <img
                        className="w-[80px] h-[80px] rounded-full border p-2 border-white"
                        src={user.photoURL}
                        alt=""
                    />
                    <div>
                        <h1 className="text-2xl font-bold">
                            {user.displayName}
                        </h1>
                        <h1 className="font-semibold">{user.email}</h1>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="btn btn-error text-white"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
