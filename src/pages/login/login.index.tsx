import React = require("react");
import { Input } from "@/components/ui/input";

export const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <Input />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
};
