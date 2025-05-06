// icons
import { MdLaptop, MdSportsEsports, MdBusinessCenter, MdDevices } from 'react-icons/md';
import { FaApple } from "react-icons/fa";

// products
import laptop1 from '../assets/laptop2.png'
import laptop2 from '../assets/laptop2.png'
import laptop3 from '../assets/laptop3.png'
import laptop4 from '../assets/laptop4.png'
import laptop5 from '../assets/laptop5.png'
import laptop6 from '../assets/laptop6.png'

import PC1 from '../assets/case5.png'
import PC2 from '../assets/case6.png'
import PC3 from '../assets/case7.png'
import PC4 from '../assets/case8.png'
import PC5 from '../assets/case9.png'
import PC6 from '../assets/case10.png'
import PC7 from '../assets/case11.png'
import PC8 from '../assets/case12.png'

import manitor1 from '../assets/manitor1.png'
import manitor2 from '../assets/manitor2.png'

// banners
import banner1 from '../assets/banner_image_1.png'
import banner2 from '../assets/banner_image_2.png'

export const SuperAdminMenu = [
    {
        id: 8,
        title: 'Brendlar',
        subMenu: [
            {
                id: 801,
                title: "Brendlar ro'yxati",
                link: '/admin/super-admin/brend-list',
            },
            {
                id: 802,
                title: "Brend qo'shish",
                link: '/admin/super-admin/brend-add',
            },
            {
                id: 803,
                title: 'Brendni tahrirlash',
                link: '/admin/super-admin/brend-update',
            },
            {
                id: 804,
                title: "Brendni o'chirish",
                link: '/admin/super-admin/brend-delete'
            }
        ]
    },
    {
        id: 7,
        title: 'Katalog',
        subMenu: [
            {
                id: 701,
                title: "Kataloglar ro'yxati",
                link: '/admin/super-admin/catalog-list'
            },
            {
                id: 702,
                title: "Katalog qushish",
                link: '/admin/super-admin/catalog-add'
            },
            {
                id: 703,
                title: 'Katalogni tahrirlash',
                link: '/admin/super-admin/catalog-update'
            },
            {
                id: 704,
                title: "Katalogni o'chirish",
                link: '/admin/super-admin/catalog-delete'
            },
        ]
    },
    {
        id: 6,
        title: "Kategoriya",
        subMenu: [
            {
                id: 601,
                title: "Kategoriyalar ro'yxati",
                link: '/admin/super-admin/category-list'
            },
            {
                id: 602,
                title: "Kategoriya qushish",
                link: '/admin/super-admin/category-add'
            },
            {
                id: 603,
                title: 'Kategoriyani tahrirlash',
                link: '/admin/super-admin/category-update'
            },
            {
                id: 604,
                title: "Kategoriyani o'chirish",
                link: '/admin/super-admin/category-delete'
            },
        ]
    },
    {
        id: 10,
        title: "Mahsulotlar",
        subMenu: [
            {
                id: 1001,
                title: "Mahsulotlar ro'yxatini ko'rish",
                link: '/admin/super-admin/produtc-list'
            },
            {
                id: 1002,
                title: "Mahsulot qo'shish",
                link: '/admin/super-admin/produtc-add'
            },
            // {
            //     id: 1003,
            //     title: "Mahsulotni tahrirlash",
            //     link: '/admin/super-admin/produtc-update'
            // },
            {
                id: 1004,
                title: "Mahsulotni o'chirish",
                link: '/admin/super-admin/produtc-delete'
            }
        ]
    },
    {
        id: 2,
        title: "Buyurtmalar",
        subMenu: [
            {
                id: 201,
                title: "Buyurtmalarni ro'yxatini ko'rish",
                link: '#'
            },
            {
                id: 202,
                title: "Buyurtma yaratish",
                link: '#'
            },
            {
                id: 203,
                title: "Buyurtmalarni tahrirlash",
                link: '#'
            },
            {
                id: 204,
                title: "Buyurtmalarni o'chirish",
                link: '#'
            }
        ]
    },
    {
        id: 9,
        title: 'Banner',
        subMenu: [
            {
                id: 901,
                title: "Bannerlar ro'yxati",
                link: '/admin/super-admin/banner-list'
            },
            {
                id: 902,
                title: "Banner qo'shish",
                link: '/admin/super-admin/banner-add'
            },
            {
                id: 903,
                title: "Bannerni tahrirlash",
                link: '/admin/super-admin/banner-update',
            },
            {
                id: 904,
                title: "Bannerni o'chirish",
                link: '/admin/super-admin/banner-delete'
            }
        ]
    },
    {
        id: 3,
        title: "Adminlar",
        subMenu: [
            {
                id: 301,
                title: "Adminlar ro'yxatini ko'rish",
                link: '/admin/super-admin/admin-list'
            },
            {
                id: 302,
                title: "Admin qo'shish",
                link: '/admin/super-admin/admin-create'
            },
            {
                id: 303,
                title: "Adminni tahrirlash",
                link: '/admin/super-admin/admin-update'
            },
            {
                id: 304,
                title: "Adminni o'chirish",
                link: '/admin/super-admin/admin-remove'
            }
        ]
    },
    {
        id: 4,
        title: "Foydalanuvchilar",
        subMenu: [
            {
                id: 401,
                title: "Foydalanuvchilar ro'yxatini ko'rish",
                link: '/admin/super-admin/users-list'
            },
            {
                id: 402,
                title: "Foydalanuvchi qo'shish",
                link: '/admin/super-admin/user-create'
            },
            {
                id: 403,
                title: "Foydalanuvchini tahrirlash",
                link: '/admin/super-admin/user-update'
            },
            {
                id: 404,
                title: "Foydalanuvchini o'chirish",
                link: '/admin/super-admin/users-remove'
            },
        ]
    },
    // {
    //     id: 5,
    //     title: "Sozlamalar",
    //     subMenu: [
    //         {
    //             id: 501,
    //             title: "Tizim sozlamalari",
    //             link: '#'
    //         },
    //         {
    //             id: 502,
    //             title: "Xavfsizlik sozlamalari",
    //             link: '#'
    //         },
    //         {
    //             id: 503,
    //             title: "To'lov tizimi sozlamalari",
    //             link: '#'
    //         }
    //     ]
    // }
];

export const AdminMenu = [
    {
        id: 6,
        title: "Mahsulotlar",
        subMenu: [
            {
                id: 601,
                title: "Mahsulotlar ro'yxatini ko'rish",
                link: '#'
            },
            {
                id: 602,
                title: "Mahsulot qo'shish",
                link: '#'
            },
            {
                id: 603,
                title: "Mahsulotni tahrirlash",
                link: '#'
            }
        ]
    },
    {
        id: 7,
        title: "Buyurtmalar",
        subMenu: [
            {
                id: 701,
                title: "Buyurtmalarni ko'rish",
                link: '#'
            },
            {
                id: 702,
                title: "Buyurtma yaratish",
                link: '#'
            }
        ]
    },
    {
        id: 8,
        title: "Foydalanuvchilar",
        subMenu: [
            {
                id: 801,
                title: "Foydalanuvchilar ro'yxatini ko'rish",
                link: '/admin/panel/users-list'
            },
            {
                id: 802,
                title: "Foydalanuvchi qo'shish",
                link: '/admin/panel/user-create'
            },
            {
                id: 803,
                title: "Foydalanuvchini tahrirlash",
                link: '/admin/panel/user-update'
            },
            {
                id: 804,
                title: "Foydalanuvchini o'chirish",
                link: '/admin/panel/users-remove'
            },
        ]
    },
    {
        id: 9,
        title: "Sozlamalar",
        subMenu: [
            {
                id: 901,
                title: "Tizim sozlamalari",
                link: '#'
            }
        ]
    }
];

export const usernav = [
    {
        id: 1,
        title: 'Savat',
        link: '/user-about/cart-item',
        key: 'cart-item'
    },
    {
        id: 2,
        title: "Buyurtmalarim",
        link: '/user-about/orders',
        key: 'orders',
    },
    {
        id: 3,
        title: "Ma'lumotlarim",
        link: '/user-about/settings',
        key: 'settings',
    },
];

export const categories = [
    { name: 'Barchasi', icon: <MdDevices />, path: '/' },
    { name: 'Gaming', icon: <MdSportsEsports />, path: '/category/gaming' },
    { name: 'Business', icon: <MdBusinessCenter />, path: '/category/business' },
    { name: 'Apple', icon: <FaApple />, path: '/category/apple' },
    { name: 'Ultrabook', icon: <MdLaptop />, path: '/category/' },
];


export const Products = [
    {
        id: 1,
        image: laptop1,
        type: 'Laptop',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 2,
        image: laptop2,
        type: 'MSI Laptop',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: false,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 3,
        image: laptop3,
        type: 'MSI Laptop',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 4,
        image: laptop4,
        type: 'MSI Laptop',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 5,
        image: laptop5,
        type: 'MSI Laptop',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 6,
        image: laptop6,
        type: 'MSI Laptop',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 7,
        image: PC1,
        type: 'Custom Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 8,
        image: PC2,
        type: 'Custom Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 9,
        image: PC3,
        type: 'Custom Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 10,
        image: PC4,
        type: 'Custom Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 11,
        image: PC5,
        type: 'Custom Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 12,
        image: PC6,
        type: 'Desktop Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 13,
        image: PC7,
        type: 'Desktop Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 14,
        image: PC8,
        type: 'Desktop Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 15,
        image: PC8,
        type: 'Desktop Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 16,
        image: PC8,
        type: 'Desktop Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 17,
        image: PC8,
        type: 'Desktop Case',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 18,
        image: laptop1,
        type: 'play station',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 19,
        image: laptop2,
        type: 'play station',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 20,
        image: manitor1,
        type: 'Manitor',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 21,
        image: manitor1,
        type: 'Manitor',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 22,
        image: manitor2,
        type: 'Manitor',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 23,
        image: manitor2,
        type: 'Manitor',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 24,
        image: manitor2,
        type: 'Manitor',
        filter: 'celebrities',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
]

export const banners = [
    {
        id: 1,
        img: banner1,
        link: '#'
    },
    {
        id: 2,
        img: banner2,
        link: '#'
    },
    {
        id: 3,
        img: banner1,
        link: '#'
    },
]