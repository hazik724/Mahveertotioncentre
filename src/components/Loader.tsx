"use client";

import { SyncLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <SyncLoader color="#dc2626" size={15} />
    </div>
  );
}
