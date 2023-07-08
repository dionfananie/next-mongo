interface PhotoData {
    ext: '.jpeg';
    url: 'https://res.cloudinary.com/dioncloudinary/image/upload/v1688807482/medium_Whats_App_Image_2023_06_26_at_14_34_48_e873b6e097.jpg';
    hash: 'medium_Whats_App_Image_2023_06_26_at_14_34_48_e873b6e097';
    mime: 'image/jpeg';
    name: 'medium_WhatsApp Image 2023-06-26 at 14.34.48.jpeg';
    path: string;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
        public_id: 'medium_Whats_App_Image_2023_06_26_at_14_34_48_e873b6e097';
        resource_type: 'image';
    };
}
interface ListData {
    id: number;
    attributes: {
        name: string;
        berat: number;
        harga: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        tipe_qurban: {
            data: {
                id: number;
                attributes: {
                    type_qurban: string;
                    type: number;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                };
            };
        };
        photo: {
            data: {
                id: 4;
                attributes: {
                    name: string;
                    alternativeText: null;
                    caption: null;
                    width: number;
                    height: number;
                    formats: {
                        large: PhotoData;
                        small: PhotoData;
                        medium: PhotoData;
                        thumbnail: PhotoData;
                    };
                    hash: string;
                    ext: string;
                    mime: string;
                    size: 209.57;
                    url: string;
                    previewUrl: null;
                    provider: string;
                    provider_metadata: {
                        public_id: string;
                        resource_type: string;
                    };
                    createdAt: string;
                    updatedAt: string;
                    blurhash: string;
                };
            };
        };
    };
}

export interface ListQurban {
    list: ListData[];
}
