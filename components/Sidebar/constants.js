import {
    ChartPieIcon,
    PlusIcon,
    ViewListIcon,
    ColorSwatchIcon,
    LoginIcon,
    UserGroupIcon
} from '@heroicons/react/solid';

export const LIST_MENU = [
    { url: '/admin', text: 'Dashboard', icon: <ChartPieIcon /> },
    { url: '/admin/buyer', text: 'List Pembeli', icon: <UserGroupIcon /> },
    { url: '/admin/qurban/create', text: 'Add Qurban', icon: <PlusIcon /> },
    { url: '/admin/qurban', text: 'List Qurban', icon: <ViewListIcon /> },
    { url: '/admin/qurban/type', text: 'Tipe Sapi Qurban', icon: <ColorSwatchIcon /> },
    { url: '/sign-in', text: 'Sign In', icon: <LoginIcon /> }
];
