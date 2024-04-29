'use client';

import { useState } from 'react';

import { PrismicNextLink } from '@prismicio/next';
import { Content, KeyTextField, asLink } from "@prismicio/client";

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar({
  settings,
}: {
  settings: Content.SettingsDocument;
}) {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cta_label, cta_link, navitems
  } = settings.data;


  return (
    <>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">

          <Link href={'/'} className="-m-1.5 p-1.5 text-white">
            < Image
              className="h-8 w-auto"
              src={'/logo-dark.svg'}
              alt={'overhear logo'}
              width={200} height={200}
            />
          </Link>

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="text-white h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navitems.map(({ nav_link, nav_label }) => {

            return (
              <PrismicNextLink key={nav_label} field={nav_link} className="text-sm font-semibold leading-6 text-white" >
                {nav_label}
              </PrismicNextLink>)
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <PrismicNextLink field={cta_link} className="bg-white hover:bg-primary-700 text-primary font-bold py-2 px-4 rounded-full">
            {cta_label}
          </PrismicNextLink>
        </div>
      </nav >
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 text-white">
              <Image
                className="h-8 w-auto"
                src={'/logo.svg'}
                alt={'overhear logo'}
                width={200} height={200}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navitems.map((item: any) => {

                  return (
                    <PrismicNextLink
                      key={item.nav_label}
                      field={item.nav_link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-50"
                    >
                      {item.nav_label}
                    </PrismicNextLink>
                  )
                })}
              </div>
              <div className="py-6">
                <PrismicNextLink
                  field={cta_link}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-gray-50
                    "
                >
                  {settings.data.cta_label}
                </PrismicNextLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
