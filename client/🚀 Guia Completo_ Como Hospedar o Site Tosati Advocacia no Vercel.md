# 🚀 Guia Completo: Como Hospedar o Site Tosati Advocacia no Vercel

## Passo 1: Preparar o Repositório GitHub

### 1.1 Criar conta no GitHub (se não tiver)
- Acesse: https://github.com
- Clique em "Sign up"
- Complete o cadastro com seu e-mail

### 1.2 Criar um novo repositório
- Acesse: https://github.com/new
- Nome do repositório: `tosati-advocacia`
- Descrição: "Site da Tosati Advocacia"
- Deixe como "Public"
- Clique em "Create repository"

### 1.3 Fazer upload dos arquivos
Você tem duas opções:

**Opção A: Usando Git (Recomendado)**
```bash
# Abra o terminal/cmd e execute:
cd tosati_advocacia_completo
git init
git add .
git commit -m "Initial commit - Tosati Advocacia website"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/tosati-advocacia.git
git push -u origin main
```

**Opção B: Upload direto no GitHub**
- Vá para seu repositório criado
- Clique em "Add file" → "Upload files"
- Arraste os arquivos da pasta `client/` para a página
- Clique em "Commit changes"

---

## Passo 2: Conectar ao Vercel

### 2.1 Criar conta no Vercel
- Acesse: https://vercel.com
- Clique em "Sign Up"
- Escolha "Continue with GitHub"
- Autorize o Vercel a acessar seus repositórios

### 2.2 Importar o projeto
- No painel do Vercel, clique em "New Project"
- Selecione o repositório `tosati-advocacia`
- Clique em "Import"

### 2.3 Configurar o projeto
**Framework Preset:** Vite
**Root Directory:** ./
**Build Command:** `npm run build`
**Output Directory:** `dist`

Clique em "Deploy"

---

## Passo 3: Aguardar o Deploy

O Vercel vai:
1. ✅ Instalar dependências
2. ✅ Compilar o projeto
3. ✅ Fazer upload para os servidores

Isso leva cerca de **2-5 minutos**.

Quando terminar, você verá:
- ✅ "Deployment successful"
- 🔗 Um link como: `https://tosati-advocacia.vercel.app`

---

## Passo 4: Acessar seu site

Seu site estará disponível em:
```
https://tosati-advocacia.vercel.app
```

**Pronto! Seu site está online! 🎉**

---

## Passo 5: Conectar um Domínio Personalizado (Opcional)

Se você quiser usar seu domínio `tosatiadvocacia.com.br`:

### 5.1 No Vercel
- Vá para "Settings" do seu projeto
- Clique em "Domains"
- Adicione seu domínio: `tosatiadvocacia.com.br`

### 5.2 No Locaweb/Registro.br
- Acesse o painel de controle
- Vá para "DNS"
- Adicione os registros que o Vercel mostrar
- Aguarde 24-48 horas para propagação

---

## Estrutura de Arquivos Necessários

```
tosati-advocacia/
├── client/
│   ├── public/
│   │   ├── logo.png
│   │   ├── hero-image.jpg
│   │   ├── noticias_juridicas.json
│   │   └── ... (outras imagens)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── package.json
└── vercel.json (opcional)
```

---

## Troubleshooting

### ❌ "Build failed"
**Solução:** Verifique se todos os arquivos foram enviados corretamente, especialmente `package.json` e `vite.config.ts`

### ❌ "404 - Not Found"
**Solução:** Certifique-se que o `vite.config.ts` tem a configuração correta para SPA

### ❌ "Imagens não aparecem"
**Solução:** Verifique se as imagens estão na pasta `public/` e os caminhos estão corretos

---

## Próximos Passos

1. **Monitorar o site:** Use o painel do Vercel para ver analytics
2. **Atualizar conteúdo:** Faça alterações no GitHub e o Vercel fará deploy automaticamente
3. **Configurar Google Ads:** Use a URL do Vercel nas suas campanhas
4. **Conectar Google Analytics:** Adicione o código de rastreamento

---

## Suporte

Se tiver dúvidas:
- Documentação Vercel: https://vercel.com/docs
- Documentação Vite: https://vitejs.dev
- Comunidade React: https://react.dev

**Boa sorte! 🚀**
