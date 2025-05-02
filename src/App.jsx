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
// user about
import UserAbout from './pages/Users/UserAbout';
import UserSetting from './pages/Users/UserSetting';
import UserOrders from './pages/Users/UserOrders';
// prdoucts
import ProductsAdd from './pages/products/ProductsAdd';
import ProductCategory from './pages/products/ProductCategory';

// Routes
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import UserCartItems from './pages/Users/UserCartItems';

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
        // product category layout
        {
          path: "category",
          element: <ProductsLayouts />,
          children: [
            {
              index: true,
              element: <ProductsAll />
            },
            {
              path: "celebrities",
              element: <ProductCategory />
            },
          ]
        },
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
                  path: 'produtc-add',
                  element: <ProductsAdd />
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
            {
              path: '*',
              element: <div>Page not found</div>
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
