import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import Center from "@/Components/Center";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Center />
      </div>
    </div>
  );
}
