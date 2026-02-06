import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[10vh] w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto h-full px-6 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-serif text-lg sm:text-2xl">
          Dra. Aline Cristina
        </h1>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-6">
          <span className={styles.link}>
            <a href="#servicos" className="hover:text-[#D4AF37]">
              Serviços
            </a>
            <div className={styles.barra}></div>
          </span>

          <span className={styles.link}>
            <a href="#sobre" className="hover:text-[#D4AF37]">
              Sobre
            </a>
            <div className={styles.barra}></div>
          </span>

          <span className={styles.link}>
            <a href="#contato" className="hover:text-[#D4AF37]">
              Contato
            </a>
            <div className={styles.barra}></div>
          </span>
        </nav>

        {/* CTA DESKTOP */}
        <a href="#card-agendamento" className="hidden md:block">
          <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
            Agendar Agora
          </button>
        </a>

        {/* MENU BUTTON MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col items-center py-6 gap-6 text-lg">
            <a onClick={() => setOpen(false)} href="#servicos">
              Serviços
            </a>
            <a onClick={() => setOpen(false)} href="#sobre">
              Sobre
            </a>
            <a onClick={() => setOpen(false)} href="#contato">
              Contato
            </a>

            <a href="#card-agendamento" onClick={() => setOpen(false)}>
              <button className="bg-[#D4AF37] text-white px-6 py-3 rounded-full">
                Agendar Agora
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
