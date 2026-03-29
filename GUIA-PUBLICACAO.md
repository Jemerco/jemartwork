# 📖 Guia de Publicação — Jem Art Website
## GitHub + Netlify + Netlify CMS

---

## O QUE VOCÊ VAI TER NO FINAL
- Site no ar em `jemartwork.netlify.app` (ou domínio próprio)
- Painel admin em `jemartwork.netlify.app/admin`
- Para atualizar qualquer coisa: login no painel → edita → salva → site atualizado em 30 segundos

---

## PASSO 1 — Criar o repositório no GitHub

1. Acesse github.com e faça login com sua conta (Jemerco)
2. Clique no **+** no canto superior direito → **New repository**
3. Preencha:
   - Repository name: `jemartwork`
   - Deixe como **Public**
   - NÃO marque nenhuma opção extra
4. Clique em **Create repository**
5. Na próxima tela, clique em **"uploading an existing file"**
6. Arraste TODOS os arquivos e pastas desta pasta (`index.html`, `netlify.toml`, pasta `admin/`, pasta `public/`)
7. Role para baixo e clique em **Commit changes**

---

## PASSO 2 — Publicar no Netlify

1. Acesse netlify.com
2. Clique em **Sign up** → escolha **Sign up with GitHub**
3. Autorize o Netlify quando ele pedir
4. Na tela inicial clique em **Add new site** → **Import an existing project**
5. Escolha **GitHub**
6. Selecione o repositório `Jemerco/jemartwork`
7. Deixe todas as configurações como estão e clique em **Deploy site**
8. Aguarde ~1 minuto → seu site estará no ar!
9. Opcional: clique em **Site settings → Change site name** para escolher um nome melhor (ex: `jemartwork`)

---

## PASSO 3 — Ativar o painel Admin (Netlify Identity)

1. No painel do Netlify, vá em **Site settings → Identity**
2. Clique em **Enable Identity**
3. Em **Registration**, selecione **Invite only** (importante — só você terá acesso)
4. Role para baixo até **Git Gateway** e clique em **Enable Git Gateway**
5. Vá em **Identity → Invite users** e convide seu próprio e-mail
6. Você vai receber um e-mail com um link de confirmação — clique nele e crie sua senha

---

## PASSO 4 — Acessar o painel Admin

1. Acesse `seusite.netlify.app/admin`
2. Clique em **Login with Netlify Identity**
3. Entre com o e-mail e senha que você criou no Passo 3
4. Pronto! Você verá o painel com todas as seções editáveis

---

## COMO EDITAR PELO PAINEL

**Para mudar um preço:**
Admin → 💰 Preços → escolha a categoria → edite o número → Publish

**Para adicionar uma obra ao portfólio:**
Admin → 🎨 Portfólio → New Obra → preencha título, série, faça upload da imagem → Publish

**Para atualizar links da loja:**
Admin → 🛍 Loja → escolha Internacional ou Brasil → edite os links → Publish

**Para atualizar redes sociais:**
Admin → ⚙ Informações Gerais → Contato → edite → Publish

---

## CONFIGURAR O FORMSPREE (receber pedidos por e-mail)

1. Acesse formspree.io e faça login
2. Procure o formulário `xaqledda` na sua conta
3. Confirme seu e-mail se ainda não confirmou
4. Pronto — os pedidos já chegam direto na sua caixa de entrada

---

## DÚVIDAS FREQUENTES

**O site não atualizou depois que salvei no painel.**
Aguarde 1-2 minutos. O Netlify precisa rebuildar o site. Se demorar mais de 5 minutos, vá em Netlify → Deploys e veja se há algum erro.

**Esqueci minha senha do painel admin.**
Acesse `seusite.netlify.app/admin` → clique em "Forgot password" → use o e-mail que você cadastrou.

**Quero adicionar meu domínio próprio (jemartwork.com).**
Netlify → Site settings → Domain management → Add custom domain. Siga as instruções para apontar o DNS.
