# 📸 Gallery Plus — Frontend

Aplicação web para gerenciamento de imagens com sistema de álbuns, permitindo o relacionamento muitos-para-muitos entre fotos e álbuns.

O projeto foi desenvolvido com foco em **arquitetura front-end**, **organização de domínio**, **validações robustas** e **experiência do usuário** — construído além do escopo original do curso, com funcionalidades planejadas e implementadas de forma independente.

🔗 **[Ver demo ao vivo](https://gallery-plus-liart.vercel.app)**

---

## 🚀 Funcionalidades

### 📷 Upload de imagens

- Upload de novas fotos através de modal personalizado
- Título opcional da imagem
- Seleção obrigatória de pelo menos um álbum
- Possibilidade de cancelar o upload

### 🖼️ Detalhes da imagem

- Visualização das informações da foto
- Exibição dos álbuns aos quais a imagem pertence
- Navegação entre fotos dentro de um álbum

### 🗂️ Gerenciamento de álbuns

- Criação de novos álbuns via modal
- Título do álbum obrigatório
- Seleção de imagens no momento da criação
- Listagem de álbuns com suas fotos
- Estado vazio quando não há fotos disponíveis

### 🔗 Relacionamento N:N

- Uma foto pode pertencer a múltiplos álbuns
- Um álbum pode conter múltiplas fotos

> 💡 A funcionalidade de listagem e navegação entre álbuns foi idealizada e implementada de forma independente — não fazia parte do escopo original do curso. Ela exigiu a criação de novas telas, novos métodos no Context API e novas chamadas à API.

---

## 🧠 Conceitos aplicados

- Atomic Design
- Design Tokens
- Separação de domínio
- Relacionamento muitos-para-muitos (N:N)
- Validação de dados com Zod
- Hooks customizados
- Context API para gerenciamento de estado
- Integração Front-end ↔ Back-end
- Componentização e reutilização
- Estados vazios e feedback de UX

---

## 🧱 Tecnologias

- React
- TypeScript
- Vite
- Zod
- Axios

---

## ▶️ Como executar

```bash
# Instalar dependências
yarn

# Rodar o projeto
yarn dev
```

---

## 📌 Observações

Este projeto foi desenvolvido com o objetivo de aprofundar conceitos de arquitetura front-end, indo além da simples implementação visual — priorizando organização, legibilidade e escalabilidade do código. Parte das funcionalidades foram adicionadas por iniciativa própria, sem instrução do curso.

---

## 👨‍💻 Autor

**Junior Bonini** — Front-end Developer
