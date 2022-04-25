import React from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.5,
        }}
      >
        <Header />
        {children}
        <Footer />
      </motion.div>
    </>
  );
};
export default Layout;
