import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import { Model } from "../../Scene";
import photo from "../assets/dp.jpg";

const House = () => {
  return (
    <>
      <img src={photo} alt="photo" className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg" />
    </>
  );
};

export default House;
