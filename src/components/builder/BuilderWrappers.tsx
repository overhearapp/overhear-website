'use client'

import React from 'react'

// Wrapper components that adapt Builder.io props to Prismic slice props

export const BuilderHero = (props: any) => {
  const mockSlice = {
    slice_type: 'hero',
    variation: 'default',
    primary: {
      title: props.title || 'Discover Hidden Stories Through Sound',
      subtitle: props.subtitle || 'Explore Meaningful Soundscapes',
    },
    items: []
  }

  // Dynamically import the actual Hero component
  const [HeroComponent, setHeroComponent] = React.useState<any>(null)

  React.useEffect(() => {
    import('@/components/Heroslice').then((module) => {
      setHeroComponent(() => module.default)
    })
  }, [])

  if (!HeroComponent) {
    return <div>Loading Hero...</div>
  }

  return (
    <section data-slice-type="hero" data-slice-variation="default">
      <HeroComponent slice={mockSlice} />
    </section>
  )
}

export const BuilderServices = (props: any) => {
  const mockSlice = {
    slice_type: 'services',
    variation: 'default',
    primary: {
      title: props.title || 'Our Services',
      description: props.description || 'Explore our innovative audio delivery technology.',
    },
    items: []
  }

  const [ServicesComponent, setServicesComponent] = React.useState<any>(null)

  React.useEffect(() => {
    import('@/slices/Services').then((module) => {
      setServicesComponent(() => module.default)
    })
  }, [])

  if (!ServicesComponent) {
    return <div>Loading Services...</div>
  }

  return <ServicesComponent slice={mockSlice} />
}

export const BuilderTestimonials = (props: any) => {
  const mockSlice = {
    slice_type: 'testimonials',
    variation: 'default',
    primary: {
      title: props.title || 'What People Say',
      description: props.description || 'Hear from our community.',
    },
    items: []
  }

  const [TestimonialsComponent, setTestimonialsComponent] = React.useState<any>(null)

  React.useEffect(() => {
    import('@/slices/Testimonials').then((module) => {
      setTestimonialsComponent(() => module.default)
    })
  }, [])

  if (!TestimonialsComponent) {
    return <div>Loading Testimonials...</div>
  }

  return <TestimonialsComponent slice={mockSlice} />
}

export const BuilderMobileApp = (props: any) => {
  const mockSlice = {
    slice_type: 'mobile_app_interface_showcase',
    variation: 'default',
    primary: {
      title: props.title || 'App Interface',
      description: props.description || 'See how our app works.',
    },
    items: []
  }

  const [MobileAppComponent, setMobileAppComponent] = React.useState<any>(null)

  React.useEffect(() => {
    import('@/slices/MobileAppInterfaceShowcase').then((module) => {
      setMobileAppComponent(() => module.default)
    })
  }, [])

  if (!MobileAppComponent) {
    return <div>Loading Mobile App Interface...</div>
  }

  return <MobileAppComponent slice={mockSlice} />
}

export const BuilderArtistGallery = (props: any) => {
  const mockSlice = {
    slice_type: 'artist_gallery',
    variation: 'default',
    primary: {
      title: props.title || 'Artist Gallery',
      description: props.description || 'Discover amazing artists.',
    },
    items: []
  }

  const [ArtistGalleryComponent, setArtistGalleryComponent] = React.useState<any>(null)

  React.useEffect(() => {
    import('@/components/ArtistGallery').then((module) => {
      setArtistGalleryComponent(() => module.default)
    })
  }, [])

  if (!ArtistGalleryComponent) {
    return <div>Loading Artist Gallery...</div>
  }

  return <ArtistGalleryComponent title={props.title} subtitle={props.subtitle} backgroundColor={props.backgroundColor} />
}

// Add a simple text component for basic content
export const BuilderText = (props: any) => {
  return (
    <div className="py-8 px-6">
      {props.title && <h2 className="text-3xl font-bold text-white mb-4">{props.title}</h2>}
      {props.content && <p className="text-white opacity-90">{props.content}</p>}
    </div>
  )
}

// Add a simple button component
export const BuilderButton = (props: any) => {
  return (
    <div className="py-4 px-6 text-center">
      <a 
        href={props.url || '#'} 
        className="bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
      >
        {props.text || 'Click Me'}
      </a>
    </div>
  )
}

