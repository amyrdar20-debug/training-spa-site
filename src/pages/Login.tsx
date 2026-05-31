import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const checkLogin = () => {
        if (username === "admin" && password === "1234") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/panel");
        } else {
            Swal.fire({
                icon: "error",
                title: "اوه اوه...",
                text: "نام کاربری یا رمز عبورت اشتباهه!",
            });
        }
    };
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-center h-screen">
                <div className="bg-white p-8 rounded-md shadow-md text-center border border-gray-300">
                    <div className="flex flex-col gap-4 mb-4">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        onClick={checkLogin}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                    >
                        ورود
                    </button>
                </div>
            </section>
        </>
    );
}
export default Login;
