"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  passkey: z.string(),
});

function LoginForm() {
  const { push } = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      passkey: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    push("/welcome");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Email address/Staff ID
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-[1.1875rem] !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passkey"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                PassKey
              </FormLabel>
              <FormControl>
                <PasswordInput
                  className="!py-[1.1875rem] !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Type out your passkey"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="!bg-main-blue !w-full !py-[1.4375rem] !h-auto !text-white !font-semibold !text-sm"
        >
          Log In
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
