
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-[#f8f9fc]">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
        {/* Pattern grid effect */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(102, 51, 153, 0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Soft glows */}
        <div className="absolute w-[800px] h-[800px] opacity-10 -top-[400px] -right-[400px] rounded-full bg-purple-400 blur-[120px]"></div>
        <div className="absolute w-[600px] h-[600px] opacity-10 top-[20%] -left-[300px] rounded-full bg-indigo-300 blur-[150px]"></div>
        <div className="absolute w-[400px] h-[400px] opacity-10 bottom-[10%] right-[20%] rounded-full bg-blue-300 blur-[100px]"></div>
      </div>

      <div className="max-container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-4xl md:text-5xl font-bold mb-6">
            Pricing tailored to your business needs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            We offer affordable solutions for manufacturing businesses of all sizes. 
            <br />
            Connect with our team today to receive a customized quote that fits your specific requirements.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg border border-gray-200">
          <CardContent className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a personalized demo</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-gray-700 font-medium">Full name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full name"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-secondary"
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
                      <FormLabel className="text-gray-700 font-medium">Work email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@company.com"
                          type="email"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-secondary"
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
                      <FormLabel className="text-gray-700 font-medium">Company name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company name"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-secondary"
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
                      <FormLabel className="text-gray-700 font-medium">Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(123) 345-6789"
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg h-12 px-4 focus-visible:ring-secondary"
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
                      <FormLabel className="text-gray-700 font-medium">Tell us anything about your shop</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="..."
                          {...field}
                          className="bg-gray-50 text-gray-900 border border-gray-200 rounded-lg min-h-[120px] px-4 py-3 focus-visible:ring-secondary resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-all duration-300 h-12 text-base font-medium text-white"
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
