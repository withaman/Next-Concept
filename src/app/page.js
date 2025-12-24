import Image from "next/image";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Home />
    </div>
  );
}
