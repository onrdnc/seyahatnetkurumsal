
import React from 'react';

// --- Icon Components ---
const HotelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <i className={`fa-solid fa-hotel ${className}`}></i>
);

const FlightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-plane-departure ${className}`}></i>
);

const CarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-car-side ${className}`}></i>
);

const MiceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-users ${className}`}></i>
);

const VisaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-passport ${className}`}></i>
);

const TransferIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-van-shuttle ${className}`}></i>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-phone ${className}`}></i>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-envelope ${className}`}></i>
);


// --- Page Components ---

const Header: React.FC = () => (
  <header className="absolute top-0 left-0 right-0 z-20 py-6 px-4 md:px-8">
    <div className="container mx-auto flex justify-center items-center">
      <img
        src="https://www.seyahat.net/wp-content/uploads/2025/10/Seyahatnet-Kurumsal-Logo.png"
        alt="Seyahat.net Logo"
        className="h-24 md:h-28 w-auto"
      />
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white bg-hero-pattern bg-cover bg-center">
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
        Kurumsal Seyahat Çözümleri
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200">
        Kurumsal seyahatlerinizin her adımında yanınızdayız. Uçak, otel, araç kiralama, transfer, toplantı ve etkinlik organizasyonları dahil tüm seyahat ihtiyaçlarınız için global iş ortaklarımızla güvenilir ve profesyonel çözümler sağlıyoruz.
        Siz sadece işinize odaklanın, gerisini biz planlayalım.
      </p>
      <a
        href="mailto:talep@seyahat.net"
        className="mt-8 inline-block bg-white text-seyahat-blue font-bold py-2 px-6 rounded-full text-base hover:bg-slate-200 transition-colors transform hover:scale-105 shadow-lg"
      >
        Talep Gönder
      </a>
    </div>
  </section>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="card-glass flex flex-col items-center text-center w-full rounded-xl p-6 transition-all duration-300 ease-in-out border border-seyahat-blue/30 bg-white/50 shadow-lg hover:bg-white/80 hover:shadow-xl hover:scale-105">
    <div className="bg-seyahat-blue text-white rounded-full p-4 mb-4 flex items-center justify-center w-20 h-20">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-seyahat-blue">{title}</h3>
    <p className="text-slate-600 text-sm flex-grow">{description}</p>
  </div>
);

const Services: React.FC = () => {
    const services = [
        {
            icon: <HotelIcon className="text-3xl"/>,
            title: "Otel Rezervasyonları",
            description: "Yurt içi ve yurt dışında, dünyanın en seçkin otellerinden butik konaklamalara kadar binlerce seçenek, iş ortaklarımıza özel fiyatlarla sizi bekliyor."
        },
        {
            icon: <FlightIcon className="text-3xl"/>,
            title: "Uçak Biletleri",
            description: "Tüm hava yollarını sizin için karşılaştırıyor, en esnek ve bütçe dostu biletleri bularak seyahat planlarınızı hafifletiyoruz."
        },
        {
            icon: <CarIcon className="text-3xl"/>,
            title: "Araç Kiralama",
            description: "Geniş ve güvenilir araç filomuzla, dünyanın her yerinde konforlu bir ulaşım deneyimi sağlıyor, seyahatinizin her anını keyifli kılıyoruz."
        },
        {
            icon: <TransferIcon className="text-3xl" />,
            title: "Transfer Hizmetleri",
            description: "Havaalanı-otel veya şehir içi transferlerinizde, size özel araçlarla güvenli ve dakik bir yolculuk deneyimi sunuyoruz."
        },
        {
            icon: <MiceIcon className="text-3xl"/>,
            title: "Grup & MICE Organizasyonları",
            description: "Toplantı, teşvik gezileri ve kongreler... Alanında uzman ekibimizle tüm etkinliklerinizi titizlikle planlıyor, unutulmaz anlara imza atıyoruz."
        },
        {
            icon: <VisaIcon className="text-3xl"/>,
            title: "Vize Danışmanlığı",
            description: "Vize süreçlerinin karmaşasını ortadan kaldırıyoruz. Uzman danışmanlarımızla başvurularınızı hızlı ve sorunsuz bir şekilde yöneterek size zaman kazandırıyoruz."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-seyahat-blue mb-2">Hizmetlerimiz</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">Sadece bir seyahat acentesi değil, yolculuğunuzun her adımında yanınızda olan bir çözüm ortağıyız. İşte size sunduğumuz ayrıcalıklar:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => <ServiceCard key={service.title} {...service} />)}
                </div>
            </div>
        </section>
    );
};

const CTA: React.FC = () => (
    <section className="bg-seyahat-blue text-white py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seyahat Talebinizi Hemen İletin</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-slate-200">
                Otel, uçak, araç kiralama ve transfer dahil tüm kurumsal seyahat ihtiyaçlarınız için talebinizi hemen paylaşın. Uzman ekibimiz, bütçenize ve planınıza en uygun teklifi en kısa sürede hazırlasın.
            </p>
            <div className="flex justify-center items-center">
                <a href="mailto:talep@seyahat.net" className="flex items-center justify-center gap-3 bg-white text-seyahat-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-slate-200 transition-colors transform hover:scale-105 shadow-lg">
                    <MailIcon className="text-2xl"/>
                    talep@seyahat.net
                </a>
            </div>
        </div>
    </section>
);


const Footer: React.FC = () => (
    <footer className="text-center py-6 text-slate-500 text-sm bg-slate-200">
        <div className="mb-2">
            <a href="https://seyahat.net" className="mx-2 hover:text-seyahat-blue transition-colors">Bireysel</a> | 
            <span className="mx-2 font-semibold text-seyahat-blue">Kurumsal</span>
        </div>
        <p>{`© ${new Date().getFullYear()} Seyahat.net. Tüm hakları saklıdır.`}</p>
    </footer>
);


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
