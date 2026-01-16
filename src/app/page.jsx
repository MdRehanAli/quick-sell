import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Features></Features>
      <Works></Works>
    </div>
  );
}
