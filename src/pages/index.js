import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Layout from "@/layouts/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}
