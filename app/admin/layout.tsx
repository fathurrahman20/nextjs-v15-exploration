import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex p-5">
      <aside className="bg-slate-500 p-5 mr-3">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
