'use client';
import ContainerWrapper from '@/components/container-wrapper';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  business: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' }),
  phone: z.string().min(1, { message: 'Required' }),
  message: z.string().min(1, { message: 'Required' }),
});

const ContactSection = ({ id }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      business: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <section id={id}>
      <ContainerWrapper className="bg-[#edf2f4] py-28">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-2 2xl:col-span-3"></div>
          <div className="col-span-12 sm:col-span-8 2xl:col-span-6 text-center mb-12">
            <h2 className="text-4xl font-semibold">Contact Us</h2>
            <p className="mt-6 text-lg text-gray-500">
              If you have any questions or comments, feel free to contact us.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-2 2xl:col-span-3"></div>
        </div>
        <div className="grid grid-cols-12 gap-4 mx-auto">
          <div className="col-span-12 md:col-span-12 2xl:col-span-1"></div>
          <div className="col-span-12 md:col-span-6 2xl:col-span-5 mx-auto">
            <div className="bg-gradient-to-r from-cyan-500 to-primary rounded-lg relative p-5 text-white max-w-[400px] mb-3 after:content-[''] after:absolute after:right-[30%] after:w-14 after:bottom-[-39px] after:h-10 after:bg-icon after:bg-cover after:z-10">
              <p className="">
                Do you want to learn more about match3win? Please send us a
                message and we are here to help you as soon as we can. Thank
                you!
              </p>
            </div>
            <div className="relative md:max-w-[180px] md:max-h-[200px] mx-auto h-[300px]">
              <Image src="/user.svg" alt="profile" objectFit="contain" fill />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 2xl:col-span-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="font-light"
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6">
                    <FormField
                      name="name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="h-[54px]"
                              placeholder="Your Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-light text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <FormField
                      name="business"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="h-[54px]"
                              placeholder="Your Business Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-light text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="h-[54px]"
                              placeholder="Your Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-light text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <FormField
                      name="phone"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="h-[54px]"
                              placeholder="Your Mobile Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-light text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-12">
                    <FormField
                      name="message"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Your Message"
                              {...field}
                              rows={8}
                            />
                          </FormControl>
                          <FormMessage className="font-light text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="pt-4 gap-3">
                  <Button className="h-[54px] px-12" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="col-span-12 md:col-span-12 2xl:col-span-1"></div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default ContactSection;
