import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    
    // Auto-recuperación si un usuario tenía la pestaña abierta durante un nuevo despliegue
    const isChunkLoadFailed = error?.message && (
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed') ||
      error.message.includes('error loading dynamically imported module') ||
      error.message.includes('Loading chunk')
    );

    if (isChunkLoadFailed) {
      const lastReload = sessionStorage.getItem('last_chunk_reload');
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem('last_chunk_reload', now.toString());
        window.location.reload();
        return;
      }
    }

    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy-950 flex items-center justify-center p-6 text-slate-200">
          <div className="bg-red-950/40 border border-red-500/50 rounded-xl p-6 max-w-2xl w-full shadow-2xl">
            <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚠️</span> Algo salió mal en la interfaz
            </h2>
            <p className="text-slate-300 mb-4 text-sm">
              La aplicación encontró un error y no pudo renderizar esta sección. Revisa los detalles abajo:
            </p>
            <div className="bg-navy-900/80 rounded-lg p-4 overflow-auto border border-white/5">
              <pre className="text-red-300 text-xs font-mono whitespace-pre-wrap">
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </div>
            <button
              onClick={() => {
                try { sessionStorage.clear(); } catch(e) {}
                window.location.reload();
              }}
              className="mt-6 bg-red-600/20 hover:bg-red-600/40 text-red-300 border border-red-500/30 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              Recargar página y actualizar versión
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
