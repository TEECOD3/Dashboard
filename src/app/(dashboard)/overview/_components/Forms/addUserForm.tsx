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
import { SheetClose, SheetFooter } from "@/components/ui/sheet";

const formSchema = z.object({
  firstname: z.string().min(1, { message: "firstname is required" }),
  lastname: z.string().min(1, { message: "firstname is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  role: z.string(),
});

export function AddUserForm() {
  const { push } = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      lastname: "",
      role: "",
      firstname: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-[0.7rem] !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your first name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-[0.7rem] !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your lastname"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  className="!py-[0.7rem] !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Assign role
              </FormLabel>
              <FormControl>
                <PasswordInput
                  className="!py-[0.7rem]  !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter a role for this user"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <SheetFooter> */}
        {/* <SheetClose asChild> */}
        <Button
          type="submit"
          className="!bg-main-blue !w-full !py-[1.075rem] !h-auto !text-white !font-semibold !text-sm !mt-8"
        >
          save user
        </Button>
        {/* </SheetClose> */}
        {/* </SheetFooter> */}
      </form>
    </Form>
  );
}
