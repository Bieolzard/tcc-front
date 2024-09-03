"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { FaUpload, FaFolderOpen, FaPen, FaUser, FaSignOutAlt } from "react-icons/fa"; // Importando os ícones do React Icons

export default function Home() {
    const router = useRouter();

    // Função para lidar com o logout
    const handleLogout = () => {
        // Adicione sua lógica de logout aqui

        // Simulando o logout e redirecionamento para a página de login
        router.push("/login");
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
            {/* Cabeçalho */}
            <div className="w-full max-w-md bg-blue-500 p-6 rounded-b-lg text-white text-center">
                <h1 className="text-xl font-bold">Bem vindo, Hugo</h1>
                <p className="text-sm">Seu app de assinaturas</p>
                <Input
                    type="text"
                    placeholder="Pesquisar documento"
                    className="mt-4 w-full bg-white text-black"
                />
            </div>

            {/* Ícones e Funções */}
            <div className="flex flex-wrap justify-center mt-8 max-w-md w-full gap-4">
                <Button className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg w-36 h-36">
                    <FaUpload className="text-4xl text-black" />  {/* Aumentando o tamanho dos ícones */}
                    <span className="mt-2 text-[#666]">UPLOAD</span>
                </Button>
                <Button className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg w-36 h-36">
                    <FaFolderOpen className="text-4xl text-black" />  {/* Aumentando o tamanho dos ícones */}
                    <span className="mt-2 text-[#666]">DOCUMENTOS</span>
                </Button>
                <Button className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg w-36 h-36">
                    <FaPen className="text-4xl text-black" />  {/* Aumentando o tamanho dos ícones */}
                    <span className="mt-2 text-[#666]">ASSINATURA</span>
                </Button>
                <Button className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg w-36 h-36">
                    <FaUser className="text-4xl text-black" />  {/* Aumentando o tamanho dos ícones */}
                    <span className="mt-2 text-[#666]">PERFIL</span>
                </Button>
            </div>

            {/* Botão de Sair */}
            <Button onClick={handleLogout} className="mt-8 flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg w-36 h-36">
                <FaSignOutAlt className="text-3xl text-black" />  {/* Aumentando o tamanho dos ícones */}
                <span className="mt-2 text-[#666]">SAIR</span>
            </Button>

            {/* Versão do App */}
            <p className="text-gray-500 mt-4">V 0.0.1</p>
        </div>
    );
}
