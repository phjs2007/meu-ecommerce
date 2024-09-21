import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full h-12  box-content">
            <div className="flex justify-between items-center">
                <div className="flex space-x-5 md:space-x-20 w-1/2">
                    <div className="flex justify-start items-center  box-border h-full w-full " >
                        <Image
                            className=" "
                            src="/imagens/logo.svg"
                            alt="Logo da Loja"
                            width={50}
                            height={10}
                            priority
                            layout="fixed"
                        />
                    </div>
                    <div className="flex justify-center items-center w-full h-full">
                        <form action="pesquisa" method="get">
                            <input
                                type="search"
                                name="pes"
                                placeholder="Pesquisar"
                                className="border-b-2 bg-transparent px-1 py-1 text-white outline-none focus:outline-none w-auto"
                                aria-label="Pesquisar por jogos"
                            />
                        </form>
                    </div>
                </div>
                <div className="w-2/5 h-auto">
                    <nav className="flex justify-center items-center space-x-5 md:space-x-11 text-white">

                        <a className="hover:border-b-2 delay-100">Home</a>


                        <a className="hover:border-b-2 delay-100">Catálogo</a>


                        <a className="hover:border-b-2 delay-100">Suporte</a>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
