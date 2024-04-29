import { SelectField } from '@prismicio/client';

export interface CardProps {
    item: {
        card_icon: SelectField<"first" | "second" | "third">;
        card_image: any;
        card_title: any; // Update to allow null values
        card_content: any;
    };
}