import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/authService";
import ErrorMessage from "@/components/common/ErrorMessage";
import { Spinner } from "@/components/ui/spinner";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await authService.register({
        userGivenName: formData.fname,
        userFamilyName: formData.lname,
        userEmail: formData.email,
        userPassword: formData.password,
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
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (error) setError(null);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Card className="max-w-sm mx-auto mt-10 p-8 border-0 shadow-lg bg-gradient-card">
        <h1 className="text-secondary text-3xl font-bold text-center">
          Create an account
        </h1>
        <h2 className="text-neutral-primary text-center mb-6">
          Register to use our service
        </h2>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet disabled={loading}>
              <FieldGroup className="gap-5">
                <FieldSeparator />
                {error && <ErrorMessage message={error} />}
                <Field>
                  <FieldLabel
                    className="text-neutral-secondary"
                    htmlFor="fname"
                  >
                    First Name
                  </FieldLabel>
                  <Input
                    onChange={handleChange}
                    id="fname"
                    value={formData.fname}
                    placeholder="Enter your first name"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel
                    className="text-neutral-secondary"
                    htmlFor="lname"
                  >
                    Last Name
                  </FieldLabel>
                  <Input
                    onChange={handleChange}
                    id="lname"
                    value={formData.lname}
                    placeholder="Enter your last name"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel
                    className="text-neutral-secondary"
                    htmlFor="email"
                  >
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    autoComplete="true"
                    onChange={handleChange}
                    placeholder="Enter your email"
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
                    onChange={handleChange}
                    value={formData.password}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel
                    className="text-neutral-secondary"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </FieldLabel>
                  <Input
                    onChange={handleChange}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />
                </Field>
                <FieldDescription className="text-xs text-neutral-primary opacity-50 text-center">
                  Your information is completely confidential and will never be
                  shared with third parties.
                </FieldDescription>
                <FieldSeparator />
                <Field>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <>
                        <Spinner /> Registering...
                      </>
                    ) : (
                      "Register"
                    )}
                  </Button>
                </Field>
                <p className="text-center text-sm text-neutral-primary">
                  Already have an account?{" "}
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto font-medium"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
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
export default Register;
