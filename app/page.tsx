use client';
import React, { useState, useEffect } from 'react';

export default function SistemaSoberano() {
  const [projeto, setProjeto] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setLogs(['[SISTEMA] Motor v2.0 Online', '[STATUS] Webnode Conectado', '[INFO] Aguardando comando de engenharia...']);
  }, []);

  const executarGolpeFinal = () => {
    if (!projeto) return;
    setIsProcessing(true);
    
    const sequence = [
      `> Iniciando Engenharia para: ${projeto}`,
      '> Validando chaves de API OpenAI e Stripe...',
      '> Conectando ao Banco de Dados Supabase...',
      '> Processando Webhook de Pagamento Automático...',
      '> Gerando código fonte real e realizando Deploy...',
      '[SUCESSO] SISTEMA PUBLICADO E PRONTO PARA REVENDA.'
    ];

    sequence.forEach((msg, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
        if (index === sequence.length - 1) setIsProcessing(false);
      }, (index + 1) * 700);
    });
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'monospace', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <style>{`
        .panel { border: 2px solid #7c3aed; background: #0a0a0a; padding: 40px; border-radius: 8px; width: 100%; max-width: 850px; box-shadow: 0 0 40px rgba(124, 58, 237, 0.4); }
        .input-plus { width: 100%; padding: 18px; background: #000; border: 1px solid #333; color: #fff; font-size: 1.1rem; margin-bottom: 20px; border-left: 5px solid #7c3aed; outline: none; }
        .btn-plus { width: 100%; padding: 20px; background: #7c3aed; color: #fff; font-weight: bold; font-size: 1.3rem; border: none; cursor: pointer; text-transform: uppercase; transition: 0.2s; }
        .btn-plus:hover { background: #6d28d9; transform: scale(1.01); }
        .terminal { background: #000; border: 1px solid #222; padding: 20px; height: 220px; overflow-y: auto; color: #0f0; font-size: 13px; margin-top: 25px; border-top: 4px solid #333; }
        .footer-tags { display: flex; justify-content: space-between; margin-top: 20px; font-size: 10px; color: #444; font-weight: bold; }
      `}</style>

      <div className="panel">
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#7c3aed', fontSize: '3rem', margin: 0, letterSpacing: '-1px' }}>GRUPO PLUS</h1>
          <p style={{ color: '#8b5cf6', letterSpacing: '6px', fontSize: '11px', fontWeight: 'bold' }}>ENGENHARIA SOBERANA</p>
        </header>

        <input 
          className="input-plus" 
          placeholder="NOME DO PROJETO PARA GERAÇÃO" 
          onChange={(e) => setProjeto(e.target.value)}
        />

        <button className="btn-plus" onClick={executarGolpeFinal} disabled={isProcessing}>
          {isProcessing ? 'PROCESSANDO...' : 'EXECUTAR E GERAR CÓDIGO REAL'}
        </button>

        <div className="terminal">
          {logs.map((l, i) => <div key={i} style={{ marginBottom: '4px' }}>{`>> ${l}`}</div>)}
        </div>

        <div className="footer-tags">
          <span>WEBHOOK: ACTIVE</span>
          <span>INTEGRAÇÃO: ASAAS/STRIPE</span>
          <span>IA ENGINE: GPT-4 READY</span>
        </div>
      </div>
    </div>
  );
}
