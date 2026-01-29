import styles from "./Header.module.css";

function Header() {
  return (
    <header className="h-[10vh] w-screen bg-white shadow-md flex justify-center items-center sticky top-0 z-50">
      <div className="w-[80vw] flex justify-between items-center">
        <div>
          <h1 className="font-serif text-2xl">Dra. Aline Cristina</h1>
        </div>
        <div></div>
        <div className="absolute left-[50%] translate-x-[-50%]">
          <nav>
            <ul className="flex space-x-4">
              <span className={styles.link}>
                <a
                  href="#servicos"
                  className="text-gray-800 hover:text-[#D4AF37]"
                >
                  Serviços
                </a>
                <div className={styles.barra}></div>
              </span>

              <span className={styles.link}>
                <a href="#sobre" className="text-gray-800 hover:text-[#D4AF37]">
                  Sobre
                </a>
                <div className={styles.barra}></div>
              </span>

              <span className={styles.link}>
                <a
                  href="#contato"
                  className="text-gray-800 hover:text-[#D4AF37]"
                >
                  Contato
                </a>
                <div className={styles.barra}></div>
              </span>
            </ul>
          </nav>
        </div>
        <div>
          <button className="bg-[#D4AF37] text-white p-2 px-4 rounded-4xl hover:cursor-pointer">
            <p className="text-sm">Agendar Agora</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
