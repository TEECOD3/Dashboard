import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SendIcon from "@/components/custom_icons/SendIcon";
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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string(),
  audience: z.string(),
  message: z.string(),
});

const BroadcastMessageForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      audience: "",
      message: "",
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Message Title
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-4 !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your message title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="audience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Select Audience
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an audience" />
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

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Type your message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a message to send"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="!bg-main-blue space-x-[0.625rem] !w-full !py-4 !h-auto !text-white !font-semibold !text-sm"
        >
          <SendIcon />
          <span>Send Broadcast Message</span>
        </Button>
      </form>
    </Form>
  );
};

export default BroadcastMessageForm;
