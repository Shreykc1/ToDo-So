"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInValidation } from "@validations"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useUserContext } from "@context/AuthContext"
import { deleteAllActiveSessions, signInAccount } from "@utils/userActions"



const SignInForm = () => {
    const router = useRouter();
    const { checkAuthUser, isLoading } = useUserContext();


  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password:""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignInValidation>) {
    try {
        const session = await signInAccount(
            values.email,
            values.password
        );

        const isLoggedIn = await checkAuthUser();

        if(isLoggedIn){
            // form.reset();
            router.push("/");
        } else{
            deleteAllActiveSessions();
            // TODO: Return toast ....
        }

    } catch (error) {
        console.log(error);
    }
  }

  return (
    <section className="w-full flex-center">
       <div className="w-[30%] gap-14 h-[60vh] flex-center flex-col rounded-lg shadow-lg bg-light-2">
        <h1 className="font-bold text-xl">TODO - 草加</h1>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full px-16">
        <FormField
          control={form.control}
          name="email"

          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                className="shad-input"
                placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                type="password"
                className="shad-input"
                placeholder="Enter a valid password" {...field}

                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
       </div>
    </section>
  )
}

export default SignInForm
function checkAuthUser() {
    throw new Error("Function not implemented.")
}
