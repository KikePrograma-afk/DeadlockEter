import React, { useState, useEffect } from 'react';
import { Gamepad2, Users, Wallet, ArrowRight, Shield, Database, ExternalLink, AlertCircle } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [onlineTime, setOnlineTime] = useState(0);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setOnlineTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasAcceptedTerms) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-24 relative">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-[#39FF14]">Deadlock</span> Valve 2025
          </h1>
          <p className="text-2xl mb-8 max-w-2xl">
            La primera plataforma descentralizada para validación de equipos profesionales y pagos en cripto
          </p>
          <div className="flex gap-4">
            <a href="https://kikeprograma-afk.github.io/deadlockID/estado.html" 
               className="bg-[#39FF14] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#32DB12] transition-colors"
               onClick={handleButtonClick}
               target="_blank"
               rel="noopener noreferrer">
              Obtener ID Único
            </a>
            <a href="https://kikeprograma-afk.github.io/challenge/" 
               className="bg-black border-2 border-[#39FF14] px-8 py-3 rounded-lg font-bold hover:bg-[#39FF14] hover:text-black transition-colors"
               onClick={handleButtonClick}
               target="_blank"
               rel="noopener noreferrer">
              Conectar Equipo
            </a>
          </div>
        </div>
      </div>

      {/* TestNet Banner */}
      <div className="bg-[#39FF14]/10 border-y border-[#39FF14] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-[#39FF14] font-bold">FASE TESTNET</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Tiempo Online:</span>
              <span className="font-mono">{formatTime(onlineTime)}</span>
            </div>
          </div>
          {isLive && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500">EN VIVO</span>
            </div>
          )}
        </div>
      </div>

      {/* Social Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          <a
            href="https://kick.com/supradevs"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonClick}
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#39FF14] to-[#32DB12] text-black px-8 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative z-10 flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
              <span>Kick.com/supradevs</span>
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="absolute -inset-1 bg-[#39FF14] opacity-0 group-hover:opacity-30 animate-ping duration-1000 rounded-xl"></div>
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black border border-[#39FF14] p-8 rounded-xl">
            <Shield className="w-12 h-12 text-[#39FF14] mb-4" />
            <h3 className="text-xl font-bold mb-4">Validación Segura</h3>
            <p className="text-gray-400">Sistema de verificación único para equipos profesionales mediante ID Deadlock.</p>
          </div>
          <div className="bg-black border border-[#39FF14] p-8 rounded-xl">
            <Wallet className="w-12 h-12 text-[#39FF14] mb-4" />
            <h3 className="text-xl font-bold mb-4">Pagos en Cripto</h3>
            <p className="text-gray-400">Transacciones seguras y rápidas utilizando criptomonedas para premios y pagos.</p>
          </div>
          <div className="bg-black border border-[#39FF14] p-8 rounded-xl">
            <Users className="w-12 h-12 text-[#39FF14] mb-4" />
            <h3 className="text-xl font-bold mb-4">Gestión de Equipos</h3>
            <p className="text-gray-400">Administra tu equipo de 6 jugadores de forma eficiente y segura.</p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Cómo Funciona</h2>
        <div className="space-y-8">
          <div className="flex items-center gap-8">
            <div className="bg-[#39FF14] rounded-full p-4">
              <Database className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">1. Obtén tu ID Único</h3>
              <p className="text-gray-400">Conecta con la API de Deadlock para obtener tu identificador único.</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="bg-[#39FF14] rounded-full p-4">
              <Users className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2. Forma tu Equipo</h3>
              <p className="text-gray-400">Reúne a tus 6 jugadores y regístralos en la plataforma.</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="bg-[#39FF14] rounded-full p-4">
              <Gamepad2 className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. ¡Comienza a Jugar!</h3>
              <p className="text-gray-400">Participa en torneos y recibe pagos en cripto de forma segura.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-[#39FF14] rounded-2xl p-12 text-black text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8">Únete a la revolución de los esports profesionales</p>
          <a href="https://kikeprograma-afk.github.io/deadlockID/estado.html" 
             className="inline-flex items-center gap-2 bg-black text-[#39FF14] px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors"
             onClick={handleButtonClick}
             target="_blank"
             rel="noopener noreferrer">
            Comenzar Ahora <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Terms Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-6 h-6 text-[#39FF14]" />
              <h3 className="text-2xl font-bold">Términos y Condiciones</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p><strong>Estado Beta del Servicio:</strong> Deadlock Valve 2025 se encuentra actualmente en fase TestNet. Las funcionalidades pueden estar sujetas a cambios y mejoras.</p>
              <p><strong>Interrupciones Técnicas:</strong> Durante esta fase, pueden ocurrir interrupciones temporales del servicio para mantenimiento y actualizaciones.</p>
              <p><strong>Política de Uso Responsable:</strong> Los usuarios se comprometen a utilizar la plataforma de manera ética y responsable, respetando las normas de la comunidad.</p>
              <p><strong>Descargo de Responsabilidad:</strong> La plataforma puede experimentar cambios significativos en futuras actualizaciones. No nos hacemos responsables por pérdidas derivadas de estos cambios.</p>
            </div>
            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setHasAcceptedTerms(true);
                  setShowModal(false);
                }}
                className="px-6 py-2 rounded-lg bg-[#39FF14] text-black font-bold hover:bg-[#32DB12] transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;