export interface ConfigItem {
    id: number;
    name: string;
    data: {
        title?: string;
        description?: string;
        detail?: string;
        url?: string;
        developer?: string;
        buttontext?: string;
        iconBlocks?: {
            id: number;
            icon: string;
            title: string;
            description: string;
        }[];
        companyBlocks?: {
            id: number;
            image: string;
            name: string;
        }[];
        galleryBlocks?: {
            id: number;
            url: string;
            name: string;
        }[];
        feedbackBlock?: {
            id: number;
            image: string;
            quote: string;
            author: string;
        }[];
        pricingPlans?: {
            id: number;
            title: string;
            subtitle: string;
            description: string;
            currency: string;
            price: number;
            featured: boolean;
            downloads: string;
            extensions: string;
            tutorials: string;
            support: string;
            updates: string;
            buttontext: string;
        }[];
        socialBlocks?: {
            id: number;
            title: string;
            target: string;
            username: string;
            url: string;
            icon: string;
        }[];
        navBlocks?: {
            name: string;
            routerLink: string;
        }[];
    };
} 
