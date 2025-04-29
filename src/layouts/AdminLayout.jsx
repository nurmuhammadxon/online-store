import { Outlet } from 'react-router-dom';

function AdminLayout() {

  return (
    <>
      <div className="flex font-Display">
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminLayout;
