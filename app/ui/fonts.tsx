import { Lusitana, Roboto } from 'next/font/google';

// From: https://fonts.google.com/specimen/Roboto
export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700']
});

// From: https://fonts.google.com/specimen/Lusitana
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
});