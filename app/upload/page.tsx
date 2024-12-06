"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const page = () => {
  return (
    <CldUploadWidget
      uploadPreset="preset"
      onSuccess={(result, widget) => {
        console.log(result);
        console.log(widget);
      }}>
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default page;
