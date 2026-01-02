import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet
} from "@/components/ui/field";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return <>
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
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <FieldSeparator />
              <Field>
                <FieldLabel className="text-neutral-secondary" htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="Enter your email" required />
              </Field>
              <Field>
                <FieldLabel className="text-neutral-secondary" htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </Field>
              <FieldSeparator />
              {/* DOESNT WORK YET */}
              <Button variant="link" className="p-0 h-auto font-medium text-sm w-fit">
                Forgot password?
              </Button>
              <Field>
                <Button type="submit" className="w-full">Sign In</Button>
              </Field>
              <p className="text-center text-sm text-neutral-primary">
                Don't have an account?{' '}
                <Button variant="link" className="p-0 h-auto font-medium" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </p>

            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </Card>
  </>
}
export default Login;