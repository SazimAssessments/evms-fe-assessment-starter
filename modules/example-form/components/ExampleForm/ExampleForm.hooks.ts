"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must not exceed 500 characters.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export const useExampleForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    try {
      console.log("Form values", values);

      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
