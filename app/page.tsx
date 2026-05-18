"use client";

import UserList from "./users/list";

export default function Page() {


  return (
    <div className="h-[calc(100vh - 3rem)] w-screen flex justify-center items-center p-20 gap-10 mt-10">
      <UserList />
    </div>
  );
}