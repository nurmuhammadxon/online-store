import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components 
import { ProductDetail, ProductsAll } from './components';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import ProductsLayouts from './layouts/ProductsLayouts';
import ProductCardLayout from './layouts/ProductCardLayout';

// Pages
import HomePage from './pages/HomePage';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

// super admin
import SuperAdminDashboard from './pages/admin/SuperAdminDashboard';
// admin
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoleChecker from './pages/admin/AdminRoleChecker';
// admin folder
import AdminList from './pages/admin/adminfolder/AdminList';
import CreateAdmin from './pages/admin/adminfolder/CreateAdmin';
import AdminRemove from './pages/admin/adminfolder/AdminRemove';
import AdminUpdate from './pages/admin/adminfolder/AdminUpdate';
// user folder
import UsersRemove from './pages/admin/usersfolder/UsersRemove';
import UsersList from './pages/admin/usersfolder/UsersList';
import UserUpdate from './pages/admin/usersfolder/UserUpdate';
import CreateUser from './pages/admin/usersfolder/CreateUser';
// brends
import BrendList from './pages/brends/BrendList';
import BrendAdd from './pages/brends/BrendAdd';
import BrendUpdate from './pages/brends/BrendUpdate';
import BrendRemove from './pages/brends/BrendRemove';
// catalogs
import CatalogList from './pages/catolog/CatalogList';
import CatalogAdd from './pages/catolog/CatalogAdd';
import CatalogUpdate from './pages/catolog/CatalogUpdate';
import CatalogRemove from './pages/catolog/CatalogRemove';
// categorys
import CategoryList from './pages/category/CategoryList';
import CategoryAdd from './pages/category/CategoryAdd';
import CategoryUpdate from './pages/category/CategoryUpdate';
import CategoryRemove from './pages/category/CategoryRemove';
// user about
import UserAbout from './pages/Users/UserAbout';
import UserSetting from './pages/Users/UserSetting';
import UserOrders from './pages/Users/UserOrders';
import UserCartItems from './pages/Users/UserCartItems';
// prdoucts
import ProductsAdd from './pages/products/ProductsAdd';
import ProductList from './pages/products/ProductList';
import ProductsRemove from './pages/products/ProductsRemove';
import ProductsUpdate from './pages/products/ProductUpdate';

// Routes
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import BannerAdd from './pages/banner/BannerAdd';
import BannerList from './pages/banner/BannerList';
import BannerRemove from './pages/banner/BnnerRemove';
import CategoryPage from './pages/CategoryPage';
import BrandPage from './pages/BrandPage';

function App() {
  const router = createBrowserRouter([
    // main layout
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        // user about
        {
          path: 'user-about',
          element: <UserAbout />,
          children: [
            {
              path: 'cart-item',
              element: <UserCartItems />
            },
            {
              path: 'orders',
              element: <UserOrders />
            },
            {
              path: 'settings',
              element: <UserSetting />
            },
          ],
        },
        // auth
        {
          element: <PublicRoute />,
          children: [
            {
              path: 'signin',
              element: <SignIn />
            },
            {
              path: 'signup',
              element: <SignUp />
            }
          ]
        },
        {
          path: 'products',
          element: <ProductCardLayout />,
          children: [
            {
              path: ':productId',
              element: <ProductDetail />
            }
          ]
        },
        // CATEGORY route
        {
          path: "category",
          element: <ProductsLayouts />,
          children: [
            { index: true, element: <ProductsAll /> },
            { path: ":categoryName", element: <CategoryPage /> }
          ]
        },

        // BRAND route
        {
          path: "brand",
          element: <ProductsLayouts />,
          children: [
            { path: ":brandName", element: <BrandPage /> }
          ]
        }

      ]
    },

    // admin layout
    {
      path: '/admin',
      element: <PrivateRoute />,
      children: [
        {
          index: true,
          element: <AdminRoleChecker />
        },
        {
          element: <AdminLayout />,
          children: [
            {
              path: 'super-admin',
              element: <SuperAdminDashboard />,
              children: [
                // admins
                {
                  path: "admin-list",
                  element: <AdminList />
                },
                {
                  path: 'admin-create',
                  element: <CreateAdmin />
                },
                {
                  path: 'admin-update',
                  element: <AdminUpdate />
                },
                {
                  path: 'admin-remove',
                  element: <AdminRemove />
                },

                // users
                {
                  path: 'users-list',
                  element: <UsersList />
                },
                {
                  path: 'user-create',
                  element: <CreateUser />
                },
                {
                  path: 'user-update',
                  element: <UserUpdate />
                },
                {
                  path: 'users-remove',
                  element: <UsersRemove />
                },

                // products
                {
                  path: 'produtc-list',
                  element: <ProductList />
                },
                {
                  path: 'produtc-add',
                  element: <ProductsAdd />
                },
                {
                  path: 'produtc-delete',
                  element: <ProductsRemove />
                },

                // brends
                {
                  path: 'brend-list',
                  element: <BrendList />
                },
                {
                  path: 'brend-add',
                  element: <BrendAdd />
                },
                {
                  path: 'brend-update',
                  element: <BrendUpdate />
                },
                {
                  path: 'brend-delete',
                  element: <BrendRemove />
                },
                // categorys
                {
                  path: "category-list",
                  element: <CategoryList />,
                },
                {
                  path: 'category-add',
                  element: <CategoryAdd />,
                },
                {
                  path: 'category-update',
                  element: <CategoryUpdate />
                },
                {
                  path: 'category-delete',
                  element: <CategoryRemove />
                },

                // catalog
                {
                  path: 'catalog-list',
                  element: <CatalogList />
                },
                {
                  path: 'catalog-add',
                  element: <CatalogAdd />
                },
                {
                  path: 'catalog-update',
                  element: <CatalogUpdate />
                },
                {
                  path: 'catalog-delete',
                  element: <CatalogRemove />
                },

                // banner
                {
                  path: 'banner-list',
                  element: <BannerList />
                },
                {
                  path: 'banner-add',
                  element: <BannerAdd />
                },
                {
                  path: 'banner-delete',
                  element: <BannerRemove />
                }
              ]
            },
            {
              path: 'panel',
              element: <AdminDashboard />,
              children: [
                // users
                {
                  path: 'users-list',
                  element: <UsersList />
                },
                {
                  path: 'user-create',
                  element: <CreateUser />
                },
                {
                  path: 'user-update',
                  element: <UserUpdate />
                },
                {
                  path: 'users-remove',
                  element: <UsersRemove />
                }
              ]
            },
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
