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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SheetClose } from "../ui/sheet";

const WarningComponent = () => {
  return (
    <div className="bg-cosmic-latte border-ucla border p-4 mb-4 flex items-start space-x-3">
      <span>
        <CircleAlert size={16} className="text-ucla" />
      </span>
      <div>
        <span className="block text-xs mb-4 text-black">
          Add new members by importing a CSV containing{" "}
          <span className="font-bold">
            First Name, Last Name, Email, Faculty
          </span>{" "}
          and <span className="font-bold">Department</span> Columns
        </span>
        <Link
          href="#"
          className="block border-t hover:underline border-ucla pt-3 text-xs font-bold text-black"
        >
          Download Sample here
        </Link>
      </div>
    </div>
  );
};

const formSchema = z.object({
  email: z.string(),
});

const SendInvite = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!font-semibold !text-space-cadet !text-xs !leading-[-0.3px]">
                Email(s) to send
              </FormLabel>
              <FormControl>
                <Input
                  className="!py-4 !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Email, Comma separated"
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
          <span>Send Invite Link</span>
        </Button>
        <SheetClose asChild>
          <Button
            type="button"
            className="!bg-transparent !w-full !h-auto !text-main-blue !font-semibold !text-sm"
          >
            Cancel
          </Button>
        </SheetClose>
      </form>
    </Form>
  );
};

const csvSchema = z.object({
  csv: z.string(),
});

const ImportCSV = () => {
  const form = useForm<z.infer<typeof csvSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      csv: "",
    },
  });

  const onSubmit = (values: z.infer<typeof csvSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FormField
          control={form.control}
          name="csv"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  accept=".csv"
                  type="file"
                  className="!py-4 !h-auto !px-4 !text-space-cadet !text-sm !border-grey-white !rounded-[0.3125rem]"
                  placeholder="Click or drag-and drop to upload CSV"
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
          <span>Import Lecturer CSV</span>
        </Button>
        <SheetClose asChild>
          <Button
            type="button"
            className="!bg-transparent !w-full !h-auto !text-main-blue !font-semibold !text-sm"
          >
            Cancel
          </Button>
        </SheetClose>
      </form>
    </Form>
  );
};

const AddLecturerForm = () => {
  return (
    <div>
      <Tabs defaultValue="send_invite" className="w-full">
        <TabsList className="w-full bg-transparent mb-8">
          <TabsTrigger
            className="w-full font-semibold text-xs border-b-2 border-black/20 data-[state=active]:border-black"
            value="send_invite"
          >
            Send Invite
          </TabsTrigger>
          <TabsTrigger
            className="w-full font-semibold text-xs border-b-2 border-black/20 data-[state=active]:border-black"
            value="import_csv"
          >
            Import CSV
          </TabsTrigger>
        </TabsList>
        <WarningComponent />
        <TabsContent value="send_invite">
          <SendInvite />
        </TabsContent>
        <TabsContent value="import_csv">
          <ImportCSV />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AddLecturerForm;
