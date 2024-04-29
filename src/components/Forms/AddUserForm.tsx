"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(), // add more validation if api only requires email
  role: z.string(),
});

const AddUserForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      role: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-4 !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your event name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-4 !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your event name"
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
                Email Address / Staff ID
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-4 !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your event name"
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
                Assign Role
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="lecturers">Lecturers</SelectItem>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="users">Users</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="!bg-main-blue space-x-[0.625rem] !w-full !py-4 !h-auto !text-white !font-semibold !text-sm"
        >
          <span>Save User</span>
        </Button>
      </form>
    </Form>
  );
};

export default AddUserForm;
