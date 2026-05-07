import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone,
  LayoutGrid,
  Box,
  Rows,
  Maximize
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      title: "Box de Banheiro",
      description: "Elegância e segurança para o seu banheiro com vidros temperados de alta resistência.",
      icon: <Box className="w-8 h-8 text-brand-purple" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Espelhos sob Medida",
      description: "Espelhos decorativos e funcionais que ampliam e iluminam qualquer ambiente.",
      icon: <Maximize className="w-8 h-8 text-brand-purple" />,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sacadas e Varandas",
      description: "Fechamento de sacadas com tecnologia que garante vedação e isolamento acústico.",
      icon: <LayoutGrid className="w-8 h-8 text-brand-purple" />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Portas e Janelas",
      description: "Soluções em vidro para integrar ambientes com máxima claridade e proteção.",
      icon: <Rows className="w-8 h-8 text-brand-purple" />,
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-purple selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900 uppercase">
                Transparência
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-slate-600 hover:text-brand-purple font-medium transition-colors">Início</a>
              <a href="#produtos" className="text-slate-600 hover:text-brand-purple font-medium transition-colors">Produtos</a>
              <a href="#contato" className="bg-brand-purple text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-purple-dark transition-all shadow-lg shadow-brand-purple/20">
                Orçamento Grátis
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 px-4 py-6"
            >
              <div className="flex flex-col gap-4">
                <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Início</a>
                <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Produtos</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="bg-brand-purple text-white text-center py-3 rounded-xl font-bold">Solicitar Orçamento</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-brand-purple/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-bold mb-6">
                <Clock className="w-4 h-4" />
                Atendimento Rápido em 24h
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900 mb-8">
                Transformamos Ambientes através da <span className="text-brand-purple">Transparência</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Vidraçaria de alto padrão com tecnologia de ponta. Qualidade, segurança e o 
                melhor acabamento para sua casa ou empresa.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-brand-purple text-white rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-brand-purple/25">
                  Falar no WhatsApp <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-slate-200">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img 
                          src={`https://i.pravatar.cc/150?u=glass${i}`} 
                          alt="Cliente"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="block text-slate-900 font-bold">500+ Projetos</span>
                    <span className="text-slate-500">concluídos com sucesso</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Vidraçaria Moderna"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                    <p className="text-sm font-medium uppercase tracking-widest mb-1 opacity-80">Destaque do Mês</p>
                    <p className="text-xl font-bold font-display">Fechamento de Sacada SkyView</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-purple rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500 rounded-full blur-[100px] opacity-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Portfólio & Serviços</h2>
            <p className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">Soluções Premium em Vidro</p>
            <p className="text-lg text-slate-500">Escolha a melhor solução para o seu ambiente com a garantia de qualidade de quem entende do assunto.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-brand-purple/50 transition-all hover:shadow-2xl hover:shadow-brand-purple/10">
                  <div className="mb-8 relative z-10">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-purple transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="rounded-xl overflow-hidden aspect-square mb-2 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section id="contato" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center lg:text-left">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
                  Pronto para transformar seu projeto?
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-xl">
                  Nossa equipe de especialistas está pronta para te atender e oferecer 
                  o melhor orçamento para sua necessidade.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <div className="flex items-center gap-3 text-white">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-brand-purple" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Ligue agora</p>
                        <p className="text-lg font-bold">(11) 99999-9999</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 text-white">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-brand-purple" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Localização</p>
                        <p className="text-lg font-bold">São Paulo, SP</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="shrink-0 w-full lg:w-auto">
                <button className="w-full lg:w-auto px-12 py-6 bg-white text-brand-purple rounded-2xl font-bold text-xl hover:bg-brand-purple hover:text-white transition-all shadow-2xl">
                  Solicitar Orçamento
                </button>
              </div>
            </div>

            {/* Background design */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/20 to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-purple/30 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-purple/10 rounded flex items-center justify-center">
                <ShieldCheck className="text-brand-purple w-5 h-5" />
              </div>
              <span className="text-sm font-display font-bold tracking-widest text-slate-900 uppercase">
                Transparência
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Vidraçaria Transparência. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-brand-purple">Privacidade</a>
              <a href="#" className="hover:text-brand-purple">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
