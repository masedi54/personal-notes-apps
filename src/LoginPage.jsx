import { Link, useNavigate } from "react-router-dom";
import { login } from "./utils/api";
import { useState } from "react";
import PropTypes from "prop-types";

const LoginPage = ({ loginSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { error, data } = await login({ email, password });
          if (!error) {
            loginSuccess(data);
            navigate("/");
          }
        }}
        className="bg-gray-100 p-6 rounded-md shadow-md" // add the bg-gray-100 class here
      >
        <h1 className="text-center text-xl font-semibold mb-4">Masuk</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Email Kamu"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password Kamu"
            type="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <Link
          to="/register"
          className="text-blue-500 hover:text-blue-800 block mb-4"
        >
          Daftar disini
        </Link>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
};
