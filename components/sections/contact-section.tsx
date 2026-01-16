"use client";

import { useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "sonner";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

import { CONTACT, SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please enter a brief message (min 10 characters).")
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const serviceOptions = useMemo(() => SERVICES.map((s) => s.title), []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    }
  });

  function onSubmit(values: FormValues) {
    // no backend required
    toast.success("Message prepared successfully. Our team will contact you soon.", {
      description: `${values.service} • ${values.phone}`
    });
    form.reset();
  }

  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="rounded-3xl border-none shadow-xl shadow-brand-red/5 lg:col-span-2">
          <CardHeader className="border-b bg-gray-50/50 p-6">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-brand-black">
              <MessageCircle className="h-5 w-5 text-brand-red" />
              Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-brand-black">Name</label>
                  <Input
                    className="mt-1"
                    placeholder="Your full name"
                    {...form.register("name")}
                    aria-invalid={!!form.formState.errors.name}
                  />
                  {form.formState.errors.name ? (
                    <p className="mt-1 text-xs text-brand-red">
                      {form.formState.errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="text-sm font-medium text-brand-black">Phone</label>
                  <Input
                    className="mt-1"
                    placeholder="+971 ..."
                    {...form.register("phone")}
                    aria-invalid={!!form.formState.errors.phone}
                  />
                  {form.formState.errors.phone ? (
                    <p className="mt-1 text-xs text-brand-red">
                      {form.formState.errors.phone.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-brand-black">Email</label>
                  <Input
                    className="mt-1"
                    placeholder="you@example.com"
                    {...form.register("email")}
                    aria-invalid={!!form.formState.errors.email}
                  />
                  {form.formState.errors.email ? (
                    <p className="mt-1 text-xs text-brand-red">
                      {form.formState.errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="text-sm font-medium text-brand-black">Service Needed</label>
                  <Select
                    value={form.watch("service")}
                    onValueChange={(v: string) => form.setValue("service", v, { shouldValidate: true })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.service ? (
                    <p className="mt-1 text-xs text-brand-red">
                      {form.formState.errors.service.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-brand-black">Message</label>
                <Textarea
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell us about your requirement..."
                  {...form.register("message")}
                  aria-invalid={!!form.formState.errors.message}
                />
                {form.formState.errors.message ? (
                  <p className="mt-1 text-xs text-brand-red">
                    {form.formState.errors.message.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit">Submit</Button>
                <Button asChild variant="outline" className="border-black/15">
                  <a
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 text-brand-red" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-xs text-brand-text">
                By submitting this form, you agree to be contacted by our team regarding your request.
              </p>
            </form>
          </CardContent>
        </Card>

        <Card className="h-fit rounded-3xl border-none shadow-xl shadow-brand-red/5">
          <CardHeader className="border-b bg-gray-50/50 p-6">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-brand-black">
              <Phone className="h-5 w-5 text-brand-red" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-brand-text">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-red" aria-hidden="true" />
              <div>
                <div>{CONTACT.addressLines[0]}</div>
                <div>{CONTACT.addressLines[1]}</div>
              </div>
            </div>

            <Separator className="bg-black/10" />

            <div className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-brand-red" aria-hidden="true" />
              <div className="space-y-1">
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:underline">
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <Separator className="bg-black/10" />

            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand-red" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                {CONTACT.email}
              </a>
            </div>

            <Separator className="bg-black/10" />

            <div className="rounded-2xl bg-black/[0.02] p-4">
              <div className="text-sm font-semibold text-brand-black">Get a Quote</div>
              <p className="mt-1 text-sm text-brand-text">
                Prefer a quick call? Reach us directly for scheduling.
              </p>
              <div className="mt-3">
                <Button asChild className="w-full">
                  <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}>Call Now</a>
                </Button>
              </div>
              <div className="mt-3 text-center text-xs text-brand-text">
                Or <Link className="text-brand-red hover:underline" href="/services">view services</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
