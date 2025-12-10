import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let res;

      if (isRegister) {
        res = await API.post("/auth/register", form);
      } else {
        res = await API.post("/auth/login", {
          email: form.email,
          password: form.password
        });
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      nav("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>{isRegister ? "Register" : "Login"}</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={submitHandler}>
        {isRegister && (
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        )}
        <br /><br />

        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br /><br />

        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <br /><br />

        <button type="submit">
          {isRegister ? "Register" : "Login"}
        </button>

        <br /><br />

        <button type="button" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Already have an account?" : "Create an account"}
        </button>
      </form>
    </div>
  );
}
