import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const people = [
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ratione in, totam quibusdam ad natus molestias repellendus! Nobis, reiciendis perspiciatis!',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="text-center space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">

              <p className="inline-block mb-2 rounded-full bg-white
               px-3 py-1 text-sm font-semibold leading-6 text-primary  ring-1 ring-inset ring-indigo-600/10">
                {slice.primary.eyebrow}
              </p>
              <div className=" text-centre text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <PrismicRichText field={slice.primary.heading} />
              </div>
              <div className="text-center text-xl text-gray-300">
                <PrismicRichText field={slice.primary.subtext} />
              </div>
            </div>
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {slice.items.map((person, index: number) => (
                <li key={index} className="rounded-lg bg-white shadow-lg py-10 px-6 text-center xl:px-10 xl:text-left">
                  <div className="space-y-6">
                    <ul role="list" className="flex justify-end space-x-5">
                      <li>
                        <PrismicNextLink field={person.twitter_url} className="text-gray-400 hover:text-orange-400">
                          <span className="sr-only">Twitter</span>

                          <svg className="h-5 w-5" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.14 8.84506L6.4443 3.67383H4.47314L9.05123 10.0792L9.62751 10.885L13.5461 16.3724H15.5172L10.7139 9.65083L10.14 8.84506Z" fill="currentColor" fillOpacity="0.5" />
                            <path d="M18.3271 0H1.67292C0.748957 0 0 0.748957 0 1.67292V18.3271C0 19.251 0.748957 20 1.67292 20H18.3271C19.251 20 20 19.251 20 18.3271V1.67292C20 0.748957 19.251 0 18.3271 0ZM12.9412 17.2727L8.97528 11.6245L4.0104 17.2727H2.72727L8.40626 10.8139L2.72727 2.72727H7.05877L10.8134 8.07451L15.5178 2.72727H16.8009L11.3854 8.88694L17.2727 17.2727H12.9412Z" fill="currentColor" fillOpacity="0.5" />
                          </svg>

                        </PrismicNextLink>
                      </li>
                      <li>
                        <PrismicNextLink field={person.linkedin_url} className="text-gray-400 hover:text-orange-400">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </PrismicNextLink>
                      </li>
                    </ul>

                    <PrismicNextImage field={person.profile_image}
                      className="mx-auto h-40 w-40 rounded-full" />


                    <div className="flex flex-col xl:items-center xl:justify-center">
                      <h3 className="font-bold text-lg text-center text-primary">{person.full_name}</h3>
                      <p className="text-sm text-gray-500">{person.role}</p>

                      <div className="mt-4 text-center text-gray-600 text-md ">
                        <PrismicRichText field={person.bio} />
                      </div>
                    </div>



                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
