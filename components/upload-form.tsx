"use client";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import { useState } from "react";
import Uppy from "@uppy/core";
import Dashboard from "@uppy/react/lib/Dashboard";
import Tus from "@uppy/tus";

function createUppy() {
  return new Uppy().use(Tus, { endpoint: "/api/upload" });
}

export function UploadForm() {
  const [uppy] = useState(createUppy);

  return <Dashboard uppy={uppy} />;
}