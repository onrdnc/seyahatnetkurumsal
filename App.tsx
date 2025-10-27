
import React from 'react';

// --- Icon Components ---
const HotelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21a2.25 2.25 0 01-2.25-2.25V15a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 15v3.75a2.25 2.25 0 01-2.25 2.25h-7.5z" />
  </svg>
);

const FlightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
);

const CarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
    </svg>
);

const MiceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
);

const VisaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const TransferIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-11a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v11z" />
        <path d="M3 11h18" />
        <path d="M8 11v-3h8v3" />
        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
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
        Kurumsal seyahatlerinizin her adımında yanınızdayız. Uçak bileti, otel rezervasyonu, araç kiralama, transfer, toplantı ve etkinlik organizasyonları dahil tüm seyahat ihtiyaçlarınız için global iş ortaklarımızla güvenilir ve profesyonel çözümler sağlıyoruz.
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
    <div className="bg-seyahat-blue text-white rounded-full p-4 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-seyahat-blue">{title}</h3>
    <p className="text-slate-600 text-sm flex-grow">{description}</p>
  </div>
);

const Services: React.FC = () => {
    const services = [
        {
            icon: <HotelIcon className="w-8 h-8"/>,
            title: "Otel Rezervasyonları",
            description: "Yurt içi ve yurt dışında, dünyanın en seçkin otellerinden butik konaklamalara kadar binlerce seçenek, iş ortaklarımıza özel fiyatlarla sizi bekliyor."
        },
        {
            icon: <FlightIcon className="w-8 h-8"/>,
            title: "Uçak Biletleri",
            description: "Tüm hava yollarını sizin için karşılaştırıyor, en esnek ve bütçe dostu biletleri bularak seyahat planlarınızı hafifletiyoruz."
        },
        {
            icon: <CarIcon className="w-8 h-8"/>,
            title: "Araç Kiralama",
            description: "Geniş ve güvenilir araç filomuzla, dünyanın her yerinde konforlu bir ulaşım deneyimi sağlıyor, seyahatinizin her anını keyifli kılıyoruz."
        },
        {
            icon: <TransferIcon className="w-8 h-8" />,
            title: "Transfer Hizmetleri",
            description: "Havaalanı-otel veya şehir içi transferlerinizde, size özel araçlarla güvenli ve dakik bir yolculuk deneyimi sunuyoruz."
        },
        {
            icon: <MiceIcon className="w-8 h-8"/>,
            title: "Grup & MICE Organizasyonları",
            description: "Toplantı, teşvik gezileri ve kongreler... Alanında uzman ekibimizle tüm etkinliklerinizi titizlikle planlıyor, unutulmaz anlara imza atıyoruz."
        },
        {
            icon: <VisaIcon className="w-8 h-8"/>,
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
                    <MailIcon className="w-6 h-6"/>
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
