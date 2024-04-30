"use client";
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
  name: z.string(),
  audience: z.string(),
  description: z.string(),
  start_time: z.string(),
  duration: z.string(),
  mode_of_delivery: z.string(),
  location: z.string(),
});

const CreateEventForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      audience: "",
      description: "",
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Event Name
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Add Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your event"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="start_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                  Start Time
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a start time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="physical">Physical Class</SelectItem>
                    <SelectItem value="virtual">Virtual Class</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                  Duration
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="physical">Physical Class</SelectItem>
                    <SelectItem value="virtual">Virtual Class</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="mode_of_delivery"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Mode of Delivery
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a mode of delivery" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="physical">Physical Class</SelectItem>
                  <SelectItem value="virtual">Virtual Class</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Location
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-4 !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Enter your event location"
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
          <span>Create and Send Broadcast Message</span>
        </Button>
      </form>
    </Form>
  );
};

export default CreateEventForm;
