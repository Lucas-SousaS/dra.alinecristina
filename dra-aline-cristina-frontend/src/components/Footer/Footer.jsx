import { Instagram, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1F2A24] text-white/90 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">

        {/* Marca */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium tracking-wide">
            Dra. Aline Cristina – Biomédica Esteta | CRBM 50224
          </h3>
          <p className="text-sm text-white/70 max-w-xs leading-relaxed">
            Obcecada em te transformar na sua melhor versão
          </p>
        </div>

        {/* Contato com ícones */}
        <div className="flex flex-col gap-5  text-white/70">

          <a
            href="https://instagram.com/suamarca"
            target="_blank"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Instagram size={18} />
            <span>
                dra.alinecristinasouza
            </span>
          </a>

          <a
            href="mailto:contato@suamarca.com"
            className="hover:text-white transition"
          >
            <Mail size={18} />
          </a>


          <a
            href="https://wa.me/5511951173391?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%2C%20por%20favor%20%F0%9F%98%8A"
            target="_blank"
            className="hover:text-white transition flex items-center gap-2"
          >
          <Phone size={18} />
            <span>
                11 98327-4488
            </span>
          </a>

{/*  */}
        </div>
      </div>

      {/* Linha inferior */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
        © 2026 Dra. Aline Cristina — Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
