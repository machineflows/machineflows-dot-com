
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  workEmail: z.string().email({ message: "Valid email is required" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  phoneNumber: z.string().optional(),
  message: z.string().optional(),
});

const PricingSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      companyName: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // In a real application, this would send the form data to your backend
    window.open('https://cal.com/danielcoronado/25min?user=danielcoronado', '_blank');
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-accent to-white text-gray-900">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-4xl font-bold mb-4">
            Pricing tailored to your business needs
          </h2>
          <p className="text-lg text-white font-bold max-w-4xl mx-auto mb-8">
            We offer affordable solutions for manufacturing businesses of all sizes. 
            <br />
            Connect with our team today to receive a customized quote that fits your specific requirements.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg border border-gray-200">
          {/* <CardHeader className="bg-gradient-to-r from-primary to-secondary p-6">
            <h3 className="text-xl font-bold text-white">Request a personalized demo</h3>
          </CardHeader> */}
          
          <CardContent className="p-6 bg-white">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-gray-700">Full name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full name"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="workEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Work email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@company.com"
                          type="email"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Company name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company name"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(123) 345-6789"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Tell us anything about your shop</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="..."
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg min-h-[100px] px-4 py-3 focus-visible:ring-primary resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 h-12 text-base font-medium text-white"
                  >
                    Request personalized demo
                  </Button>
                </div>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
