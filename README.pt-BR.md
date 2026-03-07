# TideX

Marés em tempo real e previsão para qualquer litoral do mundo

Aplicativo ao vivo: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Visão geral

TideX agora é um único aplicativo web de marés implantado a partir da raiz do repositório. Para usuários do GitHub, isso significa uma única base de código para desktop, navegador móvel e instalação na tela inicial.

## Destaques

- Selecione qualquer ponto costeiro no mapa ou vá direto para sua localização atual.
- Encontre praias nomeadas próximas com dados do OpenStreetMap.
- Veja uma curva de maré de 24 horas com horários de maré alta e linhas de referência de 15 dias.
- Compare altura da maré, rajadas e direção do vento na mesma visualização.
- Navegue por datas passadas, atuais e futuras com fallback harmônico fora da janela de dados diretos.
- Use a mesma PWA responsiva em desktop, web móvel e tela inicial.

## Fontes de dados gratuitas

- Open-Meteo Marine: séries de maré / nível do mar
- Open-Meteo Forecast: velocidade de rajada e direção do vento
- Tiles do OpenStreetMap: mapa base
- Overpass API: busca de praias próximas
- Nominatim: geocodificação reversa de pontos selecionados

## Abordagem de previsão

1. Usa a série direta de maré quando ela existe para o ponto e a data selecionados.
1. Suaviza a curva diária com interpolação cúbica monotônica.
1. Preenche lacunas parciais com completamento harmônico.
1. Recorre a um modelo harmônico quando os dados diretos não estão disponíveis.
1. Refina os horários de maré alta com detecção de extremos locais e interpolação quadrática.

## Instalar como app

1. Abra [https://tide-x.vercel.app](https://tide-x.vercel.app) no Safari, Chrome ou outro navegador moderno.
1. Use `Adicionar à tela inicial` ou `Instalar aplicativo` no menu do navegador.
1. Inicie o TideX como um app normal mantendo o mesmo deploy web.

## Internacionalização

- Os pacotes de idioma em tempo de execução ficam em `locales/` e são carregados via JSON.
- O repositório inclui 42 idiomas, com suporte RTL para árabe, hebraico e urdu.
- Depois de editar os arquivos de idioma, execute `node scripts/generate-locales.mjs` para recriar `locales/index.json`.

## Estrutura do projeto

```text
TideX/
├─ index.html
├─ styles.css
├─ app.js
├─ locales/
├─ icons/
├─ manifest.webmanifest
├─ service-worker.js
├─ offline.html
├─ scripts/
│  ├─ generate-locales.mjs
│  └─ generate-readmes.mjs
├─ README.md
└─ README.<locale>.md
```

## Desenvolvimento local

Sirva a raiz do repositório com qualquer servidor estático:

```bash
cd TideX
python3 -m http.server 5173
```

Depois abra `http://localhost:5173`.

## Implantação

- Implante a raiz do repositório na Vercel, Netlify, Cloudflare Pages ou qualquer host estático.
- Nenhuma etapa de build é necessária.
- O app raiz já inclui manifesto PWA, ícones e service worker.

## Aviso

- O TideX é para planejamento de viagem e contexto costeiro, não para navegação certificada.
- As condições reais podem variar por pressão, ondulação, fluxo de rios, batimetria local e clima.
