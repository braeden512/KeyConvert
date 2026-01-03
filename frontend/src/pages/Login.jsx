import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/authService";
import { useState } from "react";
import ErrorMessage from "@/components/common/ErrorMessage";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login({
        userEmail: email,
        userPassword: password,
      });
      login(
        {
          userID: response.userID,
          userEmail: response.userEmail,
          userGivenName: response.userGivenName,
          userFamilyName: response.userFamilyName,
        },
        response.token
      );
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError(null);
  };

  return (
    <>
      <Card className="max-w-sm mx-auto mt-10 p-8 border-0 shadow-lg bg-gradient-card">
        <img
          src="/android-chrome-512x512.png"
          alt="Piano Icon"
          className="w-40 h-40 mx-auto"
        />
        <h1 className="text-secondary text-3xl font-bold text-center">
          Welcome back
        </h1>
        <h2 className="text-neutral-primary text-center mb-6">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet disabled={loading}>
              <FieldGroup>
                <FieldSeparator />
                {error && <ErrorMessage message={error} />}
                <Field>
                  <FieldLabel
                    className="text-neutral-secondary"
                    htmlFor="email"
                  >
                    Email
                  </FieldLabel>
                  <Input
                    onChange={onEmailChange}
                    value={email}
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    autoComplete="true"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel
                    className="text-neutral-secondary"
                    htmlFor="password"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    onChange={onPasswordChange}
                    value={password}
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    required
                  />
                </Field>
                <FieldSeparator />
                {/* DOESNT WORK YET */}
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-2 font-medium text-sm"
                >
                  Forgot password?
                </Button>
                <Field>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <>
                        <Spinner /> Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Field>
                <p className="text-center text-sm text-neutral-primary">
                  Don't have an account?{" "}
                  <Button
                    variant="link"
                    type="button"
                    className="p-0 h-auto font-medium"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </p>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </Card>
    </>
  );
}
export default Login;
