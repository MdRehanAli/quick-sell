import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Works></Works>
    </div>
  );
}
