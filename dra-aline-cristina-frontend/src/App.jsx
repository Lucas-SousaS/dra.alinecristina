import "./App.css";
import Header from "./components/Header/Header";
import fotoDra from "./assets/foto.jpg";
import fotoDra2 from "./assets/fotoDra2.jpg";
import fotoBotox from "./assets/Botox.jpeg";
import fotoSkinbooster from "./assets/skinbooster.jpg";
import fotopreenchimento from "../src/assets/preenchimento.jpg";
import fotoBioestimulador from "../src/assets/bioestimulador-de-colageno.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CardServico from "./components/CardServico/CardServico";
import "leaflet/dist/leaflet.css";
import Mapa from "./components/Mapa/Mapa";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden px-6">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]"
          style={{ backgroundImage: "url('/background.jpeg')" }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/60 to-white/80" />

        <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#1F2A24]">
              Biomédica Esteta
              <br />
              com segurança
            </h1>

            <p className="text-base md:text-lg text-[#1F2A24]/70 leading-relaxed max-w-md mx-auto md:mx-0">
              Obcecada em te transformar na sua melhor versão
            </p>

            <a href="#card-agendamento">
              <button className="mt-4 w-full md:w-fit px-6 py-3 rounded-full border border-[#1F2A24]/30 hover:bg-[#1F2A24] hover:text-white transition">
                Agendar consulta
              </button>
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={fotoDra}
                alt="Foto da Dra. Aline Cristina"
                className="h-[38vh] sm:h-[45vh] md:h-[55vh] w-full max-w-sm object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -inset-4 bg-white/40 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>

        <button className="absolute bottom-6 text-[#1F2A24]/60 text-2xl animate-bounce">
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="relative min-h-[90vh] w-full bg-[#FAF9F7] flex flex-col items-center py-20 px-6"
      >
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-2xl md:text-4xl font-serif text-[#1F2A24]">
            Serviços
          </h2>

          <div className="w-16 h-px bg-[#1F2A24]/30 mx-auto" />

          <p className="text-[#1F2A24]/60 text-sm md:text-base max-w-md">
            Procedimentos estéticos realizados com técnica, segurança e foco em
            resultados naturais.
          </p>
        </div>

        <div className="w-full max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          <CardServico
            ulrFoto={fotoBotox}
            titulo="Toxina Botulínica (Botox)"
            descricao="Suaviza rugas e linhas de expressão na testa e olhos."
          />

          <CardServico
            ulrFoto={fotopreenchimento}
            titulo="Preenchimento"
            descricao="Devolve volume e harmoniza traços faciais."
          />

          <CardServico
            ulrFoto={fotoBioestimulador}
            titulo="Bioestimuladores"
            descricao="Estimula colágeno e melhora firmeza."
          />

          <CardServico
            ulrFoto={fotoSkinbooster}
            titulo="Skinbooster"
            descricao="Hidratação profunda e melhora de textura."
          />
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="relative min-h-[90vh] w-full bg-[#F1F1F1] flex justify-center items-center py-16"
      >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 px-6">
          <img
            src={fotoDra2}
            alt="Foto da Dra"
            className="w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-xl object-cover"
          />

          <div className="w-full lg:w-[40%] flex flex-col gap-6 justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
              Sobre a Profissional
            </h1>

            <h3 className="text-gray-600 leading-relaxed text-sm md:text-base">
              A Dra. Aline Cristina é uma biomédica esteta dedicada a
              proporcionar tratamentos seguros e eficazes. Com vasta experiência
              na área, ela combina conhecimento técnico com um olhar artístico
              para realçar a beleza natural de cada paciente.
            </h3>

            {/* Formação */}
            <div className="bg-white rounded-xl p-4 md:p-5 flex items-start gap-4 md:gap-6 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l9-4 9 4-9 4-9-4Z" />
                  <path d="M7 10v4c0 2 3 3 5 3s5-1 5-3v-4" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-base md:text-lg">
                  Formação Profissional
                </h2>
                <p className="text-sm text-gray-600">
                  Graduação em Biomedicina com foco em estética.
                </p>
              </div>
            </div>

            {/* Registro */}
            <div className="bg-white rounded-xl p-4 md:p-5 flex items-start gap-4 md:gap-6 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-base md:text-lg">
                  Registro Profissional
                </h2>
                <p className="text-sm text-gray-600">
                  Profissional registrada e habilitada para atuação.
                </p>
              </div>
            </div>

            {/* Experiência */}
            <div className="bg-white rounded-xl p-4 md:p-5 flex items-start gap-4 md:gap-6 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-base md:text-lg">Experiência</h2>
                <p className="text-sm text-gray-600">
                  Atendimento estético com foco em resultados naturais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="relative min-h-[90vh] w-full bg-white flex justify-center items-center"
      >
        <div
          id="card-agendamento"
          className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-6 py-16"
        >
          <div className="bg-[#1F2A24] text-white rounded-2xl w-full max-w-md lg:w-125 lg:h-125 flex flex-col justify-between p-6 md:p-10 shadow-lg">
            <h1 className="text-2xl md:text-3xl font-serif">
              Agende sua consulta
            </h1>

            <div className="flex flex-col gap-6 text-center">
              <p className="text-sm md:text-base text-white/80">
                Atendimento humano e personalizado para resultados naturais.
              </p>

              <a
                href="https://wa.me/5511984274488?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento.%0APoderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%2C%20por%20favor%3F"
                target="_blank"
                className="bg-[#D4AF37] text-[#1F2A24] px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                Agendar pelo WhatsApp
              </a>
            </div>

            <h4 className="text-xs text-white/60 text-center">
              Atendimento direto pelo WhatsApp
            </h4>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md w-full lg:w-auto">
            <Mapa
              largura={"w-full lg:w-[500px]"}
              altura={"h-[350px] lg:h-[500px]"}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
