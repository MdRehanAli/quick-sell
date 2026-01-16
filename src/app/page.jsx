import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import Trade from "@/components/Trade";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Features></Features>
      <Trade></Trade>
      <Testimonials></Testimonials>
      <Works></Works>
      <Newsletter></Newsletter>
    </div>
  );
}
