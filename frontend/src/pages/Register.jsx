import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet
} from "@/components/ui/field";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return <>
    <Card className="max-w-sm mx-auto mt-10 p-8 border-0 shadow-lg bg-gradient-card">
      <h1 className="text-secondary text-3xl font-bold text-center">
        Create an account
      </h1>
      <h2 className="text-neutral-primary text-center mb-6">
        Register to use our service
      </h2>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <FieldSeparator />
              <Field>
                <FieldLabel className="text-neutral-secondary" htmlFor="fname">First Name</FieldLabel>
                <Input id="fname" placeholder="Enter your first name" required />
              </Field>
              <Field>
                <FieldLabel className="text-neutral-secondary" htmlFor="lname">Last Name</FieldLabel>
                <Input id="lname" placeholder="Enter your last name" required />
              </Field>
              <Field>
                <FieldLabel className="text-neutral-secondary" htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="Enter your email" required />
              </Field>
              <Field>
                <FieldLabel className="text-neutral-secondary" htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </Field>
              <Field>
                <FieldLabel className="text-neutral-secondary" htmlFor="confirm-password">Confirm Password</FieldLabel>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
              </Field>
              <FieldSeparator />
              <Field>
                <Button type="submit" className="w-full">Register</Button>
              </Field>
              <p className="text-center text-sm text-neutral-primary">
                Already have an account?{' '}
                <Button variant="link" className="p-0 h-auto font-medium" onClick={() => navigate("/login")}>
                  Sign In
                </Button>
              </p>

            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </Card>
  </>
}
export default Register;