export default function Mapa({largura, altura}) {
  return (
    <div className={`${largura} ${altura} rounded-xl overflow-hidden`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.55964674181635!2d-46.490046668490564!3d-23.570083036193548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67001ca178a7%3A0xc3d4ad46e594dd4!2sDra.%20Aline%20Cristina!5e0!3m2!1spt-BR!2sbr!4v1768502006344!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa localização"
      />
      
    </div>
  )
}
