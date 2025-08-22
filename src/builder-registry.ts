import { Builder } from "@builder.io/react";
import { 
  BuilderHero, 
  BuilderServices, 
  BuilderTestimonials, 
  BuilderMobileApp, 
  BuilderArtistGallery,
  BuilderText,
  BuilderButton
} from "./components/builder/BuilderWrappers";

// Register working Builder.io components
Builder.registerComponent(BuilderHero, {
  name: "Hero Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Discover Hidden Stories Through Sound",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Explore Meaningful Soundscapes",
    },
  ],
});

Builder.registerComponent(BuilderServices, {
  name: "Services Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Our Services",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Explore our innovative audio delivery technology.",
    },
  ],
});

Builder.registerComponent(BuilderTestimonials, {
  name: "Testimonials Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "What People Say",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Hear from our community.",
    },
  ],
});

Builder.registerComponent(BuilderMobileApp, {
  name: "Mobile App Interface",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "App Interface",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "See how our app works.",
    },
  ],
});

Builder.registerComponent(BuilderArtistGallery, {
  name: "Artist Gallery",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Artist Gallery",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Discover amazing artists.",
    },
    {
      name: "backgroundColor",
      type: "string",
      defaultValue: "#214176FF",
    },
  ],
});

Builder.registerComponent(BuilderText, {
  name: "Text Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Section Title",
    },
    {
      name: "content",
      type: "string",
      defaultValue: "Add your content here.",
    },
  ],
});

Builder.registerComponent(BuilderButton, {
  name: "Button",
  inputs: [
    {
      name: "text",
      type: "string",
      defaultValue: "Click Me",
    },
    {
      name: "url",
      type: "string",
      defaultValue: "#",
    },
  ],
});
