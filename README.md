# Estoka.ai

Dashboard administrativo desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Deploy no Vercel

### Pré-requisitos

1. Tenha uma conta no [Vercel](https://vercel.com)
2. Instale o Vercel CLI globalmente:
   ```bash
   npm install -g vercel
   ```

### Deploy Automático

1. **Faça login no Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy inicial:**
   ```bash
   vercel
   ```

3. **Para deploy em produção:**
   ```bash
   npm run deploy
   ```

### Deploy Manual via GitHub

1. Conecte seu repositório GitHub ao Vercel
2. O Vercel detectará automaticamente que é um projeto Vite
3. Configure as variáveis de ambiente se necessário
4. Faça push para a branch principal para deploy automático

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

- `src/components/` - Componentes React
- `src/types/` - Definições TypeScript
- `public/` - Arquivos estáticos
- `vercel.json` - Configuração do Vercel

## 🎨 Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones) 