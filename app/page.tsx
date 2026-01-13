import React from 'react';

export default function Home() {
  return (
    <div style={{ color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', backgroundColor: '#1a1a1a' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#8b5cf6', fontSize: '3rem', marginBottom: '10px' }}>GRUPO PLUS</h1>
        <p style={{ fontSize: '1.2rem', color: '#a78bfa' }}>Legado de Engenharia — Motor do Absurdo</p>
      </header>
      <main style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ background: '#262626', padding: '30px', borderRadius: '12px', border: '1px solid #4c1d95', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Painel de Controle</h2>
          <div style={{ display: 'grid', gap: '15px', textAlign: 'left' }}>
            <div style={{ padding: '15px', background: '#333', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <strong>Status:</strong> Online (Interface Real)
            </div>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Este projeto representa a visão e o trabalho de Cleber Carlos.</p>
          </div>
          <button style={{ marginTop: '30px', width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#7c3aed', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
            PROJETO SALVO COM SUCESSO
          </button>
        </div>
      </main>
      <footer style={{ marginTop: '50px', color: '#525252', fontSize: '0.8rem' }}>
        &copy; 2026 Grupo Plus - Honrando o Legado
      </footer>
    </div>
  );
}
