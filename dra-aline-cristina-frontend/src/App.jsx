import "./App.css";
import Header from "./components/Header/Header";
import fotoDra from "./assets/foto.jpg";
import fotoDra2 from "./assets/fotoDra2.jpg";
import fotoBotox from "./assets/Botox.jpeg";
import fotopreenchimento from "../src/assets/preenchimento.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CardServico from "./components/CardServico/CardServico";
import "leaflet/dist/leaflet.css";
import Mapa from "./components/Mapa/Mapa";

function App() {
  return (
    <>
      <Header />

      <section className="flex justify-around items-center h-[90vh] w-screen relative">
        <div className="w-[80vw] flex justify-between items-center">
          <div className="flex flex-col gap-6 justify-center max-w-xl">
            <h1 className="font-serif text-5xl leading-tight">
              Biomédica Esteta com segurança
            </h1>

            <h3 className="text-2xl text-gray-600">
              Obcecada em te transformar na sua melhor versão
            </h3>
          </div>

          <div>
            <img
              src={fotoDra}
              alt="Foto da Dra. Aline Cristina"
              className="h-[60vh] rounded-xl object-cover"
            />
          </div>
        </div>

        <button className="absolute bottom-[5%] left-[50%] translate-[-50%] text-primary text-2xl animate-bounce">
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </section>

      <section
        className="relative min-h-[90vh] w-screen bg-white flex justify-center items-center"
        id="servicos"
      >
        <h1 className="absolute left-[50%] translate-[-50%] top-20 text-4xl font-serif">
          Serviços
        </h1>

        <div className="flex justify-center gap-30 w-[80vw] flex-wrap ">
          {/* Cards de serviços*/}

          <CardServico
            ulrFoto={fotoBotox}
            titulo={"Toxina Botulínica (Botox)"}
            descricao={`Utilizada para suavizar rugas e linhas de expressão, especialmente
              na testa, entre as sobrancelhas e ao redor dos olhos. Também ajuda
              na prevenção do envelhecimento precoce.`}
          />

          <CardServico
            ulrFoto={fotopreenchimento}
            titulo={"Preenchimento com Ácido Hialurônico"}
            descricao={`Indicado para devolver volume, melhorar contornos faciais e
              harmonizar traços, como lábios, olheiras e mandíbula, mantendo um
              aspecto natural.`}
          />

          <CardServico
            ulrFoto={fotoBotox}
            titulo={"Bioestimuladores de Colágeno"}
            descricao={`Tratamento que estimula a produção natural de colágeno, melhorando
              a firmeza e a qualidade da pele ao longo do tempo.`}
          />

          <CardServico
            ulrFoto={fotoBotox}
            titulo={"Skinbooster"}
            descricao={`Procedimento que promove hidratação profunda da pele, melhora
              textura, viço e elasticidade, deixando a pele mais saudável e
              iluminada.`}
          />
        </div>
      </section>

      <section
        className="relative min-h-[90vh] w-screen bg-[#F1F1F1] flex justify-center items-center"
        id="sobre"
      >
        <div className="w-[80vw] flex justify-between items-center gap-10">
          <img
            src={fotoDra2}
            alt="Foto da Dra. Aline Cristina"
            className="h-[60vh] rounded-xl object-cover"
          />

          <div className="w-[40%] flex flex-col gap-6 justify-center">
            <h1 className="text-5xl font-serif">Sobre a Profissional</h1>
            <h3 className="text-gray-600">
              A Dra. Aline Cristina é uma biomédica esteta dedicada a
              proporcionar tratamentos seguros e eficazes. Com vasta experiência
              na área, ela combina conhecimento técnico com um olhar artístico
              para realçar a beleza natural de cada paciente.
            </h3>

            <div className="bg-white rounded-xl p-4 flex items-center  gap-10">
              <div>
                <img src={fotoDra} alt="" className="h-15 rounded-full" />
              </div>
              <div>
                <h1 className="font-serif">Formação Profissional</h1>
                <h3>Formada na universidade x aosjfndgjoqwsnfpog</h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 flex items-center  gap-10">
              <div>
                <img src={fotoDra} alt="" className="h-15 rounded-full" />
              </div>
              <div>
                <h1 className="font-serif">Registro Profissional</h1>
                <h3>Formada na universidade x aosjfndgjoqwsnfpog</h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 flex items-center gap-10">
              <div>
                <img src={fotoDra} alt="" className="h-15 rounded-full" />
              </div>
              <div>
                <h1 className="font-serif">Experiência</h1>
                <h3>Formada na universidade x aosjfndgjoqwsnfpog</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[90vh] w-screen bg-white flex justify-center items-center"
        id="contato"
      >
       <div className="w-[80vw] mx-auto flex items-center justify-center gap-12 py-20">
  {/* Card Agendamento */}
  <div className="bg-[#1F2A24] text-white rounded-2xl w-125 h-125 flex flex-col items-center justify-between p-12 shadow-lg">
    
    <h1 className="text-3xl font-serif tracking-wide">
      Agende sua consulta
    </h1>

    <div className="flex flex-col items-center gap-6 text-center">
      <h2 className="text-base text-white/80 leading-relaxed max-w-90">
        Atendimento humano e personalizado, pensado para realçar sua beleza com
        naturalidade e segurança.
      </h2>

      <a
        href="https://wa.me/5511951173391?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%2C%20por%20favor%20%F0%9F%98%8A"
        target="_blank"
        className="bg-[#D4AF37] text-[#1F2A24] px-8 py-3 rounded-full font-medium tracking-wide hover:opacity-90 transition"
      >
        Agendar pelo WhatsApp
      </a>
    </div>

    <h4 className="text-sm text-white/60">
      Atendimento realizado diretamente pelo WhatsApp
    </h4>
  </div>

  {/* Mapa */}
  <div className="rounded-2xl overflow-hidden shadow-md">
    <Mapa largura={"w-[500px]"} altura={"h-[500px]"} />
  </div>
</div>

      </section>
    </>
  );
}

export default App;
