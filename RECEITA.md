# 🧬 Receita para recriar: Maikon Caldeira — Aplicativos

_Gerada sem IA, lendo 76 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._

## 1. O que é

- **Nome:** Maikon Caldeira — Aplicativos
- **Partes de código:** 50 (49 tela, 0 logica, 1 servidor, 0 dados, 0 estilo)
- **Tem servidor (rotas /api):** sim — veja o passo do servidor
- **Peças de fora (bibliotecas):** @capacitor/cli, @neondatabase/serverless, @replit/vite-plugin-runtime-error-modal, @vitejs/plugin-react, @workspace/db, electron, express, fs, http, mammoth, path, react, vite

## 2. Estrutura modular proposta

```
index.html            ← a página; chama os módulos NA ORDEM
css/app.css           ← o visual
js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
js/10-27.js           ← Raio-X de Projetos — Raio-X de Projetos (era 27.html)
js/15-1.js            ← 🧹 Faxina de Repetidos — 🧹 Faxina de Repetidos (era 1.html)
js/20-10.js           ← AI Code Studio — 🤖 AI Code Studio (era 10.html)
js/25-11.js           ← Maikon Caldeira — Aplicativos — MAIKON CALDEIRA (era 11.html)
js/30-12.js           ← Raio-X de Pacotes — 🩻 Raio-X de Pacotes (era 12.html)
js/35-13.js           ← Raio-X de Pacotes — 🩻 Raio-X de Pacotes (era 13.html)
js/40-14.js           ← Comparador de Versões — ⚖️ Comparador de Versões (era 14.html)
js/45-15.js           ← Comparador de Versões — ⚖️ Comparador de Versões (era 15.html)
js/50-16.js           ← Laboratório HTML — Advocacia Previdenciária (era 16.html)
js/55-17.js           ← Assistente Jurídico Pro (era 17.html)
js/60-18.js           ← SK Oficina Jurídica v4 - Maikon Caldeira (era 18.html)
js/65-19.js           ← Chat IA Pro — Saulo — Chat IA Pro (era 19.html)
js/70-2.js            ← Numerador de Códigos — 🔢 Numerador de Códigos (era 2.html)
js/75-20.js           ← Manual do Maikon — 📘 Manual do Maikon (era 20.html)
js/80-21.js           ← Comunicações Processuais — ⚖️ Comunicações Processuais (era 21.html)
js/85-22.js           ← Limpador de Processos — Limpador de Processos (era 22.html)
js/90-23.js           ← Guia dos Apps do Maikon — Guia dos seus apps (era 23.html)
js/91-24.js           ← Organizador de Documentos — 📑 Organizador de Documentos (era 24.html)
js/92-25.js           ← Perito de Metadados — Perito de Metadados (era 25.html)
js/93-26.js           ← Triagem de Código — Triagem de Código (era 26.html)
js/94-28.js           ← Extrator de Sites — 🛠️ Extrator de Sites (era 28.html)
js/95-29.js           ← 📱 Gerenciador de PWA — 📱
        Gerenciador de PWA (era 29.html)
js/96-3.js            ← Multi-Projetos PWA — Maikon Caldeira (era 3.html)
js/97-30.js           ← Colecionador de Comandos (era 30.html)
js/98-31.js           ← Instalador · Organizador do Celular (Termux) — 📦 Organizador do Celul (era 31.html)
js/98-32.js           ← Console de Desenvolvimento - Teste de Lógica (era 32.html)
js/98-33.js           ← APK Builder — Iara Suite — 📦 APK Builder (era 33.html)
js/98-34.js           ← Editor Jurídico Pro — Olá! (era 34.html)
js/98-35.js           ← Editor Jurídico — Olá! (era 35.html)
js/98-36.js           ← Robô Jurídico - Núcleo Base — ⚖️ ROBÔ JURÍDICO (era 36.html)
js/98-37.js           ← 🔍 Analisador de Logs ZIP — 🔍 Analisador de Múltiplos Logs ZIP (era 37.html)
js/98-38.js           ← Editor Jurídico - Iara — Bem-vindo! (era 38.html)
js/98-39.js           ← 🔧 PWA Builder — Gerador de Instalação — 🔧 PWA Builder (era 39.html)
js/98-4.js            ← Catalogador de Códigos — 🗂️ Catalogador de Códigos (era 4.html)
js/98-40.js           ← 🔧 ConstruAPK Pro — Analisador e Gerador — ConstruAPK Pro — Analisador (era 40.html)
js/98-41.js           ← Scanner — Detector de Dependências — 🔍 Scanner de Dependências (era 41.html)
js/98-42.js           ← Backup para o HD (era 42.html)
js/98-43.js           ← Numerador de Códigos — 🔢 Numerador de Códigos (era 43.html)
js/98-44.js           ← Preparador Universal — 🧰 Preparador Universal (era 44.html)
js/98-45.js           ← Arrumador de Backups — 🗃 Arrumador de Backups (era 45.html)
js/98-46.js           ← Gerador de Plano de Projeto — 📊 Gerador de Plano de Projeto (era 46.html)
js/98-47.js           ← RECEITA.md — RECEITA.md (era 47.html)
js/98-48.js           ← Juntador de Arquivos — 🧩 Juntador de Arquivos (era 48.html)
js/98-5.js            ← Celular e PC Livres — O que aconteceu com o seu celular (era 5.html)
js/98-6.js            ← Guia do Ollama — 🦙 Guia do Ollama (era 6.html)
js/98-7.js            ← Kit do Replit — 🧰 Kit do Maikon para o Replit (era 7.html)
js/98-8.js            ← Colador de Links — 🔗 Colador de Links (era 8.html)
js/98-9.js            ← Projeto Lab (era 9.html)
js/98-hub.js          ← Teste-1 — Teste-1 (era hub.html)
js/98-inicio.js       ← Maikon Caldeira — Aplicativos — MAIKON CALDEIRA (era index.html)
js/99-app.js          ← o último: monta a tela com o que embarcou
```

## 3. As partes, uma por uma

| # | Era | Vira | Tipo | O que faz | Usa |
|---|---|---|---|---|---|
| 1 | `27.html` | `js/10-27.js` | servidor | Raio-X de Projetos — Raio-X de Projetos | importar, toolbar, chat |
| 2 | `1.html` | `js/15-1.js` | tela | 🧹 Faxina de Repetidos — 🧹 Faxina de Repetidos | — |
| 3 | `10.html` | `js/20-10.js` | tela | AI Code Studio — 🤖 AI Code Studio | — |
| 4 | `11.html` | `js/25-11.js` | tela | Maikon Caldeira — Aplicativos — MAIKON CALDEIRA | manifest.json, icon-192.png |
| 5 | `12.html` | `js/30-12.js` | tela | Raio-X de Pacotes — 🩻 Raio-X de Pacotes | — |
| 6 | `13.html` | `js/35-13.js` | tela | Raio-X de Pacotes — 🩻 Raio-X de Pacotes | — |
| 7 | `14.html` | `js/40-14.js` | tela | Comparador de Versões — ⚖️ Comparador de Versões | — |
| 8 | `15.html` | `js/45-15.js` | tela | Comparador de Versões — ⚖️ Comparador de Versões | — |
| 9 | `16.html` | `js/50-16.js` | tela | Laboratório HTML — Advocacia Previdenciária | — |
| 10 | `17.html` | `js/55-17.js` | tela | Assistente Jurídico Pro | — |
| 11 | `18.html` | `js/60-18.js` | tela | SK Oficina Jurídica v4 - Maikon Caldeira | — |
| 12 | `19.html` | `js/65-19.js` | tela | Chat IA Pro — Saulo — Chat IA Pro | — |
| 13 | `2.html` | `js/70-2.js` | tela | Numerador de Códigos — 🔢 Numerador de Códigos | — |
| 14 | `20.html` | `js/75-20.js` | tela | Manual do Maikon — 📘 Manual do Maikon | — |
| 15 | `21.html` | `js/80-21.js` | tela | Comunicações Processuais — ⚖️ Comunicações Processuais | — |
| 16 | `22.html` | `js/85-22.js` | tela | Limpador de Processos — Limpador de Processos | — |
| 17 | `23.html` | `js/90-23.js` | tela | Guia dos Apps do Maikon — Guia dos seus apps | — |
| 18 | `24.html` | `js/91-24.js` | tela | Organizador de Documentos — 📑 Organizador de Documentos | — |
| 19 | `25.html` | `js/92-25.js` | tela | Perito de Metadados — Perito de Metadados | — |
| 20 | `26.html` | `js/93-26.js` | tela | Triagem de Código — Triagem de Código | main.js |
| 21 | `28.html` | `js/94-28.js` | tela | Extrator de Sites — 🛠️ Extrator de Sites | — |
| 22 | `29.html` | `js/95-29.js` | tela | 📱 Gerenciador de PWA — 📱
        Gerenciador de PWA | — |
| 23 | `3.html` | `js/96-3.js` | tela | Multi-Projetos PWA — Maikon Caldeira | — |
| 24 | `30.html` | `js/97-30.js` | tela | Colecionador de Comandos | — |
| 25 | `31.html` | `js/98-31.js` | tela | Instalador · Organizador do Celular (Termux) — 📦 Organizador do Celular (Termux) | — |
| 26 | `32.html` | `js/98-32.js` | tela | Console de Desenvolvimento - Teste de Lógica | — |
| 27 | `33.html` | `js/98-33.js` | tela | APK Builder — Iara Suite — 📦 APK Builder | — |
| 28 | `34.html` | `js/98-34.js` | tela | Editor Jurídico Pro — Olá! | style.css, app.js |
| 29 | `35.html` | `js/98-35.js` | tela | Editor Jurídico — Olá! | style.css, app.js |
| 30 | `36.html` | `js/98-36.js` | tela | Robô Jurídico - Núcleo Base — ⚖️ ROBÔ JURÍDICO | — |
| 31 | `37.html` | `js/98-37.js` | tela | 🔍 Analisador de Logs ZIP — 🔍 Analisador de Múltiplos Logs ZIP | — |
| 32 | `38.html` | `js/98-38.js` | tela | Editor Jurídico - Iara — Bem-vindo! | — |
| 33 | `39.html` | `js/98-39.js` | tela | 🔧 PWA Builder — Gerador de Instalação — 🔧 PWA Builder | manifest.json, icon-192.png |
| 34 | `4.html` | `js/98-4.js` | tela | Catalogador de Códigos — 🗂️ Catalogador de Códigos | — |
| 35 | `40.html` | `js/98-40.js` | tela | 🔧 ConstruAPK Pro — Analisador e Gerador — ConstruAPK Pro — Analisador & Gerador | — |
| 36 | `41.html` | `js/98-41.js` | tela | Scanner — Detector de Dependências — 🔍 Scanner de Dependências | — |
| 37 | `42.html` | `js/98-42.js` | tela | Backup para o HD | — |
| 38 | `43.html` | `js/98-43.js` | tela | Numerador de Códigos — 🔢 Numerador de Códigos | — |
| 39 | `44.html` | `js/98-44.js` | tela | Preparador Universal — 🧰 Preparador Universal | package.json |
| 40 | `45.html` | `js/98-45.js` | tela | Arrumador de Backups — 🗃 Arrumador de Backups | — |
| 41 | `46.html` | `js/98-46.js` | tela | Gerador de Plano de Projeto — 📊 Gerador de Plano de Projeto | — |
| 42 | `47.html` | `js/98-47.js` | tela | RECEITA.md — RECEITA.md | — |
| 43 | `48.html` | `js/98-48.js` | tela | Juntador de Arquivos — 🧩 Juntador de Arquivos | — |
| 44 | `5.html` | `js/98-5.js` | tela | Celular e PC Livres — O que aconteceu com o seu celular | — |
| 45 | `6.html` | `js/98-6.js` | tela | Guia do Ollama — 🦙 Guia do Ollama | — |
| 46 | `7.html` | `js/98-7.js` | tela | Kit do Replit — 🧰 Kit do Maikon para o Replit | — |
| 47 | `8.html` | `js/98-8.js` | tela | Colador de Links — 🔗 Colador de Links | manifest.json |
| 48 | `9.html` | `js/98-9.js` | tela | Projeto Lab | — |
| 49 | `hub.html` | `js/98-hub.js` | tela | Teste-1 — Teste-1 | hub.webmanifest, favicon.ico, icon.svg, apple-touch-icon.png |
| 50 | `index.html` | `js/98-inicio.js` | tela | Maikon Caldeira — Aplicativos — MAIKON CALDEIRA | manifest.json, favicon.ico, icon.svg, apple-touch-icon.png |

## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)

### Passo 0 — combinar as regras com a IA

```text
Vamos recriar o app "Maikon Caldeira — Aplicativos" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.
Regras: (1) index.html chama os arquivos js/ na ordem, antes do </body>; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.
Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.
```

### Passo 1 — `js/10-27.js` (era `27.html`, 985 linhas)

```text
Crie js/10-27.js. Ele faz: Raio-X de Projetos — Raio-X de Projetos.
No app original ele tinha estas funções/partes: extOf, isTextPath, stripRoot, newProject, addFile, countLines, projectFromZip, projectFromFolder, projectFromObject, isMap, isMinified, isBuildPath, scan, snippetAt, maskSecret, stripJsonComments, parseJsonLoose, dirOf.
O original usava as bibliotecas @neondatabase/serverless, express, @workspace/db, mammoth, react, vite, path, @replit/vite-plugin-runtime-error-modal: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /api/ementas, POST /api/ementas, POST /api/documentos, POST /api/importar, POST /api/ai/stream. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Ele chamava estes endereços: /api/documentos, /api/ementas/${id}, /api/export/docx, /api/ai/stream. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 2 — `js/15-1.js` (era `1.html`, 470 linhas)

```text
Crie js/15-1.js. Ele faz: 🧹 Faxina de Repetidos — 🧹 Faxina de Repetidos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 3 — `js/20-10.js` (era `10.html`, 1721 linhas)

```text
Crie js/20-10.js. Ele faz: AI Code Studio — 🤖 AI Code Studio.
No app original ele tinha estas funções/partes: est, uid, isMobile, escapeHtml, copyText, activeConv, MODULE_Storage, save, saveSoon, load, normMemory, stamp, download, exportAll, importBackup, handleImport, MODULE_Provider, models.
Ele chamava estes endereços: https://api.anthropic.com/v1/messages, https://api.anthropic.com/v1/models?limit=100, https://google.serper.dev/search. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 4 — `js/25-11.js` (era `11.html`, 136 linhas)

```text
Crie js/25-11.js. Ele faz: Maikon Caldeira — Aplicativos — MAIKON CALDEIRA.
No app original ele tinha estas funções/partes: lerInfo, procurar, pintar, abrir, fechar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 5 — `js/30-12.js` (era `12.html`, 206 linhas)

```text
Crie js/30-12.js. Ele faz: Raio-X de Pacotes — 🩻 Raio-X de Pacotes.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 6 — `js/35-13.js` (era `13.html`, 152 linhas)

```text
Crie js/35-13.js. Ele faz: Raio-X de Pacotes — 🩻 Raio-X de Pacotes.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 7 — `js/40-14.js` (era `14.html`, 261 linhas)

```text
Crie js/40-14.js. Ele faz: Comparador de Versões — ⚖️ Comparador de Versões.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 8 — `js/45-15.js` (era `15.html`, 389 linhas)

```text
Crie js/45-15.js. Ele faz: Comparador de Versões — ⚖️ Comparador de Versões.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 9 — `js/50-16.js` (era `16.html`, 823 linhas)

```text
Crie js/50-16.js. Ele faz: Laboratório HTML — Advocacia Previdenciária.
No app original ele tinha estas funções/partes: separar, ler, cssDosAjustes, regra, completo, guardar, caminho, limpo, info, marcar, pagina, quemE, hex, transparente, num, montar, carregar, enviar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 10 — `js/55-17.js` (era `17.html`, 4420 linhas)

```text
Crie js/55-17.js. Ele faz: Assistente Jurídico Pro.
No app original ele tinha estas funções/partes: loadLS, saveLS, detectProvider, getChaveResumo, getChaveGeracao, getModelo, getPromptGlobal, salvarChaves, salvarPromptGlobal, limparChaves, atualizarBadge, testarChaves, atualizarEsforco, atualizarVerbosity, toggleVerbosity, toggleConfig, mudarAba, importarArquivo.
Ele chamava estes endereços: ${baseUrl}/chat/completions, https://api.anthropic.com/v1/messages, https://www.googleapis.com/drive/v3/about?fields=user, https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart, https://google.serper.dev/search, https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=${numResults}, https://api.tavily.com/search. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 11 — `js/60-18.js` (era `18.html`, 867 linhas)

```text
Crie js/60-18.js. Ele faz: SK Oficina Jurídica v4 - Maikon Caldeira.
No app original ele tinha estas funções/partes: showSection, showLoader, hideLoader, processZip, loadFromGitHub, renderFileList, checkSingleFileIsDirty, openFile, filterFiles, saveCurrentFileChanges, downloadModifiedZip, setExtractorUrl, fetchViaProxy, runWebExtractor, showExtSubTab, renderExtractorOverview, renderExtractorScripts, renderExtractorText.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 12 — `js/65-19.js` (era `19.html`, 1096 linhas)

```text
Crie js/65-19.js. Ele faz: Chat IA Pro — Saulo — Chat IA Pro.
No app original ele tinha estas funções/partes: detectProvider, getSysPrompt, applyPreset, saveSystemPrompt, initSysPanel, toggleFeedback, addFeedbackBar, saveFeedback, openDB, dbPut, dbGetAll, dbGet, dbDelete, boot, restoreUI, autoSave, scheduleSave, autoSaveDraft.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 13 — `js/70-2.js` (era `2.html`, 206 linhas)

```text
Crie js/70-2.js. Ele faz: Numerador de Códigos — 🔢 Numerador de Códigos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 14 — `js/75-20.js` (era `20.html`, 245 linhas)

```text
Crie js/75-20.js. Ele faz: Manual do Maikon — 📘 Manual do Maikon.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 15 — `js/80-21.js` (era `21.html`, 287 linhas)

```text
Crie js/80-21.js. Ele faz: Comunicações Processuais — ⚖️ Comunicações Processuais.
No app original ele tinha estas funções/partes: esc, carregarDados, iso, periodo, limpar, fData, parse, chave, status, montarParams, buscar, render, baixar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 16 — `js/85-22.js` (era `22.html`, 654 linhas)

```text
Crie js/85-22.js. Ele faz: Limpador de Processos — Limpador de Processos.
No app original ele tinha estas funções/partes: esc, fmt, linhasDaPagina, lerPdf, lerTxt, progresso, adicionar, regrasAtivas, minhasRegras, normLinha, acharRepetidas, limparPagina, processar, montarRegras, montarRepetidas, aplicar, faixas, verPagina.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 17 — `js/90-23.js` (era `23.html`, 252 linhas)

```text
Crie js/90-23.js. Ele faz: Guia dos Apps do Maikon — Guia dos seus apps.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 18 — `js/91-24.js` (era `24.html`, 558 linhas)

```text
Crie js/91-24.js. Ele faz: Organizador de Documentos — 📑 Organizador de Documentos.
No app original ele tinha estas funções/partes: esc, tipoDe, compDe, numDe, moedaPorData, lerPdf, organizar, deTexto, moldeDe, bate, aplicar, camposUsados, status, tudo, renderLinhas, escolherRegra, renderRegras, fmtComp.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 19 — `js/92-25.js` (era `25.html`, 1123 linhas)

```text
Crie js/92-25.js. Ele faz: Perito de Metadados — Perito de Metadados.
No app original ele tinha estas funções/partes: EMBUTIDO, esc, latin1, deLatin1, juntar, utf8, decTexto, tamanhoTxt, sha256js, sha256, inflar, inflarZlib, mkData, dataPdf, dataExif, dataIso, difTxt, num.
Ele chamava estes endereços: https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 20 — `js/93-26.js` (era `26.html`, 1555 linhas)

```text
Crie js/93-26.js. Ele faz: Triagem de Código — Triagem de Código.
No app original ele tinha estas funções/partes: renderLista, abrirConversa, conversaAtiva, renderMensagens, enviarMensagem, formatarHora, salvar, extOf, normPath, findPaths, compatible, sniffType, looksWindows, extForType, fnNames, computeSig, jaccard, speakerOf.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 21 — `js/94-28.js` (era `28.html`, 265 linhas)

```text
Crie js/94-28.js. Ele faz: Extrator de Sites — 🛠️ Extrator de Sites.
No app original ele tinha estas funções/partes: esc, LEITOR, hist, salvarHist, renderHist, status, buscar, absoluto, analisar, addRec, extrair, realce, conteudoAba, mostrar, copiar, baixar, nomeBase, CRC.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 22 — `js/95-29.js` (era `29.html`, 948 linhas)

```text
Crie js/95-29.js. Ele faz: 📱 Gerenciador de PWA — 📱
        Gerenciador de PWA.
No app original ele tinha estas funções/partes: salvarDados, carregarDados, abrirModalAdicionar, abrirModalEditar, fecharModal, salvarPWA, abrirPWA, deletarPWA, renderizarPWAs, atualizarEstatisticas, alternarModoEscuro, carregarModoEscuro, exportarDados, importarDados, processarImportacao, mostrarAvisoModal.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 23 — `js/96-3.js` (era `3.html`, 1965 linhas)

```text
Crie js/96-3.js. Ele faz: Multi-Projetos PWA — Maikon Caldeira.
No app original ele tinha estas funções/partes: ler, gravar, pintar, fixar, tirar, mover, recarregar, pintarJanela, iniciar, montar, salvar, contar, pintarListas, caixaDe, quadro, mostrar, abrir, fechar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 24 — `js/97-30.js` (era `30.html`, 1672 linhas)

```text
Crie js/97-30.js. Ele faz: Colecionador de Comandos.
No app original ele tinha estas funções/partes: req, QR8bitByte, QRBitBuffer, QRPolynomial, QRRSBlock, QRCode, esc, semAcento, uid, toast, ler, salvar, copiar, adivinhar, desenharFiltros, desenhar, cartao, lembrete.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 25 — `js/98-31.js` (era `31.html`, 54 linhas)

```text
Crie js/98-31.js. Ele faz: Instalador · Organizador do Celular (Termux) — 📦 Organizador do Celular (Termux).
No app original ele tinha estas funções/partes: arquivo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 26 — `js/98-32.js` (era `32.html`, 586 linhas)

```text
Crie js/98-32.js. Ele faz: Console de Desenvolvimento - Teste de Lógica.
No app original ele tinha estas funções/partes: adicionarConsole, limparConsole, executarCodigo, inspecionarVariaveis, analisarCodigo, testarPerformance, limparEditor, salvarCodigo, exportarConsole, mudarTab.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 27 — `js/98-33.js` (era `33.html`, 820 linhas)

```text
Crie js/98-33.js. Ele faz: APK Builder — Iara Suite — 📦 APK Builder.
No app original ele tinha estas funções/partes: log, clearLog, showLog, dragOver, dragLeave, drop, fileSelected, handleFile, autoGenerateId, syncColor, setTarget, build, updateProgress, detectWebDir, generateAndroidStudio, MainActivity, generateEAS, generateElectron.
O original usava as bibliotecas electron, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 28 — `js/98-34.js` (era `34.html`, 196 linhas)

```text
Crie js/98-34.js. Ele faz: Editor Jurídico Pro — Olá!.
No app original ele tinha estas funções/partes: init, renderTree, openFile, saveFile, refreshPreview, setPM, exportZip, doImport.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 29 — `js/98-35.js` (era `35.html`, 731 linhas)

```text
Crie js/98-35.js. Ele faz: Editor Jurídico — Olá!.
No app original ele tinha estas funções/partes: qsa, ext, lsGet, lsSet, esc, toast, dlBlob, ICON, init, buildTree, renderTree, renderKids, toggleDir, openFile, saveFile, saveAll, openModal, closeModal.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 30 — `js/98-36.js` (era `36.html`, 433 linhas)

```text
Crie js/98-36.js. Ele faz: Robô Jurídico - Núcleo Base — ⚖️ ROBÔ JURÍDICO.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 31 — `js/98-37.js` (era `37.html`, 420 linhas)

```text
Crie js/98-37.js. Ele faz: 🔍 Analisador de Logs ZIP — 🔍 Analisador de Múltiplos Logs ZIP.
No app original ele tinha estas funções/partes: addZips, renderZipList, removeZip, limparTudo, analisarTodos, extrairErros, renderResultados, toggleZR, escHtml, loadJSZ.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 32 — `js/98-38.js` (era `38.html`, 1044 linhas)

```text
Crie js/98-38.js. Ele faz: Editor Jurídico - Iara — Bem-vindo!.
No app original ele tinha estas funções/partes: qsa, lsSet, esc, toast, getExt, getIcon, init, toggleSidebar, renderTree, buildTree, renderNode, toggleFolder, newFile, newFileIn, newFolder, openFile, saveFile, saveAll.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 33 — `js/98-39.js` (era `39.html`, 711 linhas)

```text
Crie js/98-39.js. Ele faz: 🔧 PWA Builder — Gerador de Instalação — 🔧 PWA Builder.
No app original ele tinha estas funções/partes: updateIconPreview, generateManifest, generateSW, generateHTML, generateIconBlob, downloadFile, downloadManifest, downloadSW, downloadHTML, generateAll, showOutput, showAlert.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 34 — `js/98-4.js` (era `4.html`, 303 linhas)

```text
Crie js/98-4.js. Ele faz: Catalogador de Códigos — 🗂️ Catalogador de Códigos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 35 — `js/98-40.js` (era `40.html`, 1209 linhas)

```text
Crie js/98-40.js. Ele faz: 🔧 ConstruAPK Pro — Analisador e Gerador — ConstruAPK Pro — Analisador & Gerador.
No app original ele tinha estas funções/partes: importZip, importFolder, afterImport, decodeText, renderTree, buildTree, renderNode, hasProblems, cntF, toggleF, expandAll, collapseAll, toggleSidebar, fIcon, fmtSz, esc, openFile, closeTab.
O original usava as bibliotecas @capacitor/cli, vite, @vitejs/plugin-react, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 36 — `js/98-41.js` (era `41.html`, 243 linhas)

```text
Crie js/98-41.js. Ele faz: Scanner — Detector de Dependências — 🔍 Scanner de Dependências.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 37 — `js/98-42.js` (era `42.html`, 284 linhas)

```text
Crie js/98-42.js. Ele faz: Backup para o HD.
No app original ele tinha estas funções/partes: humano, log, paresTodos, parGuardar, parApagar, permissao, pintarEscolhas, escolher, listar, lerRegistro, gravarRegistro, existeNoDestino, calcular, copiarUm, executar, olhar, mesmaPasta, pintarPares.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 38 — `js/98-43.js` (era `43.html`, 241 linhas)

```text
Crie js/98-43.js. Ele faz: Numerador de Códigos — 🔢 Numerador de Códigos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 39 — `js/98-44.js` (era `44.html`, 833 linhas)

```text
Crie js/98-44.js. Ele faz: Preparador Universal — 🧰 Preparador Universal.
O original usava as bibliotecas electron, path, fs, http: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 40 — `js/98-45.js` (era `45.html`, 404 linhas)

```text
Crie js/98-45.js. Ele faz: Arrumador de Backups — 🗃 Arrumador de Backups.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 41 — `js/98-46.js` (era `46.html`, 796 linhas)

```text
Crie js/98-46.js. Ele faz: Gerador de Plano de Projeto — 📊 Gerador de Plano de Projeto.
No app original ele tinha estas funções/partes: getFileType, getFileIcon, formatFileSize, toast, analyzeFileContent, importZip, renderTree, renderNode, renderFilesList, generatePlan, renderPlan, downloadPlan, copyPlan.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 42 — `js/98-47.js` (era `47.html`, 730 linhas)

```text
Crie js/98-47.js. Ele faz: RECEITA.md — RECEITA.md.
Ele chamava estes endereços: dados.json. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 43 — `js/98-48.js` (era `48.html`, 437 linhas)

```text
Crie js/98-48.js. Ele faz: Juntador de Arquivos — 🧩 Juntador de Arquivos.
No app original ele tinha estas funções/partes: esc, uid, toast, ext, lang, isTexto, bytesFmt, linhas, decode, pareceBinario, b64, unb64, inflate, lerZip, CRC, crc32, escreverZip, textoDocx.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 44 — `js/98-5.js` (era `5.html`, 365 linhas)

```text
Crie js/98-5.js. Ele faz: Celular e PC Livres — O que aconteceu com o seu celular.
No app original ele tinha estas funções/partes: abrir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 45 — `js/98-6.js` (era `6.html`, 133 linhas)

```text
Crie js/98-6.js. Ele faz: Guia do Ollama — 🦙 Guia do Ollama.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 46 — `js/98-7.js` (era `7.html`, 25 linhas)

```text
Crie js/98-7.js. Ele faz: Kit do Replit — 🧰 Kit do Maikon para o Replit.
No app original ele tinha estas funções/partes: bytes, arq.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 47 — `js/98-8.js` (era `8.html`, 776 linhas)

```text
Crie js/98-8.js. Ele faz: Colador de Links — 🔗 Colador de Links.
No app original ele tinha estas funções/partes: uid, ler, gravar, nomeDe, pintar, fixar, tirar, mover, recarregar, pintarJanela, iniciar, montar, salvar, daLista, contar, pintarListas, caixaDe, quadro.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 48 — `js/98-9.js` (era `9.html`, 2006 linhas)

```text
Crie js/98-9.js. Ele faz: Projeto Lab.
No app original ele tinha estas funções/partes: esc, tick, fmtSize, fmtDate, normPath, dirname, basename, extOf, joinPath, hex, inflate, mask, lineFinder, parseLenientJSON, langOf, sniff, zipEntries, parsePax.
Ele chamava estes endereços: https://api.anthropic.com/v1/messages, https://api.anthropic.com/v1/models?limit=100. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 49 — `js/98-hub.js` (era `hub.html`, 81 linhas)

```text
Crie js/98-hub.js. Ele faz: Teste-1 — Teste-1.
No app original ele tinha estas funções/partes: rec, esc, card, show.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 50 — `js/98-inicio.js` (era `index.html`, 148 linhas)

```text
Crie js/98-inicio.js. Ele faz: Maikon Caldeira — Aplicativos — MAIKON CALDEIRA.
No app original ele tinha estas funções/partes: lerInfo, procurar, pintar, abrir, fechar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 51 — `js/99-app.js` e conferir

```text
Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os <script src="js/…"> na ordem certa: js/00-core.js, js/10-27.js, js/15-1.js, js/20-10.js, js/25-11.js, js/30-12.js, js/35-13.js, js/40-14.js, js/45-15.js, js/50-16.js, js/55-17.js, js/60-18.js, js/65-19.js, js/70-2.js, js/75-20.js, js/80-21.js, js/85-22.js, js/90-23.js, js/91-24.js, js/92-25.js, js/93-26.js, js/94-28.js, js/95-29.js, js/96-3.js, js/97-30.js, js/98-31.js, js/98-32.js, js/98-33.js, js/98-34.js, js/98-35.js, js/98-36.js, js/98-37.js, js/98-38.js, js/98-39.js, js/98-4.js, js/98-40.js, js/98-41.js, js/98-42.js, js/98-43.js, js/98-44.js, js/98-45.js, js/98-46.js, js/98-47.js, js/98-48.js, js/98-5.js, js/98-6.js, js/98-7.js, js/98-8.js, js/98-9.js, js/98-hub.js, js/98-inicio.js, js/99-app.js.
```

## 5. Conferir no final

- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?
- [ ] Cada botão abre a sua parte?
- [ ] Fechar e abrir de novo: os dados continuam?
- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).
- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.
