import Header from "./components/header";
import Image from "next/image";

export default function Home() {
  return (
    < div className="bg-[url('/imagens/back.jpg)]">
      <Header />
      <section>
        <div>
          <div>
          <Image
                            className=" "
                            src="/imagens/Frostpunk2.webp"
                            alt="Logo da Loja"
                            width={400}
                            height={200}
                            priority
                            layout="fixed"/>
          </div>
        </div>
      </section>
    </div >
  );
}
