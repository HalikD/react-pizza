import React from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";

import styles from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <React.Suspense fallback={<Loader />}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
}

export default MainLayout;
