# UMAD Web — Instrucciones de Setup

## Requisitos
- Node.js 18+ (https://nodejs.org)

## Levantar localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo (http://localhost:5173)
npm run dev

# 3. Build de producción
npm run build
```

## Deploy en Vercel

1. Sube este proyecto a GitHub
2. Ve a https://vercel.com → New Project → Import desde GitHub
3. Vercel detecta Vite automáticamente
4. Haz clic en **Deploy**
5. Copia la URL generada (ej: `https://umad-web.vercel.app`)
6. Genera el QR en: https://qr-code-generator.com (pega la URL)

### O via CLI:
```bash
npm install -g vercel
vercel
```

## Páginas del prototipo

| Ruta | Descripción |
|---|---|
| `/` | Inicio — Hero, estadísticas, carreras, becas, noticias |
| `/carreras` | Oferta educativa con flip cards |
| `/becas` | Calculadora interactiva de becas |
| `/admisiones` | Timeline del proceso de admisión |
| `/costos` | Tabulador de colegiaturas por nivel |
| `/institucion` | Misión, visión, valores, historia |
| `/contacto` | Formulario, mapa y redes sociales |
