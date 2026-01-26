# 📸 Gallery App

Aplicação web para gerenciamento de imagens com sistema de álbuns, permitindo o relacionamento muitos-para-muitos entre fotos e álbuns.

O projeto foi desenvolvido com foco em **arquitetura front-end, organização de domínio, validações robustas e experiência do usuário**, sendo construído em paralelo às aulas como forma de aprofundar o entendimento técnico.

---

## 🚀 Funcionalidades

### 📷 Upload de imagens

* Upload de novas fotos através de modal personalizado
* Título opcional da imagem
* Seleção obrigatória de pelo menos um álbum
* Possibilidade de cancelar o upload

### 🖼️ Detalhes da imagem

* Visualização das informações da foto
* Exibição dos álbuns aos quais a imagem pertence

### 🗂️ Gerenciamento de álbuns

* Criação de novos álbuns via modal
* Título do álbum obrigatório
* Seleção de imagens no momento da criação
* Estado vazio quando não há fotos disponíveis

### 🔗 Relacionamento N:N

* Uma foto pode pertencer a múltiplos álbuns
* Um álbum pode conter múltiplas fotos

---

## 🧠 Conceitos aplicados

* Atomic Design
* Design Tokens
* Separação de domínio
* Relacionamento muitos-para-muitos
* Validação de dados com Zod
* Hooks customizados
* Integração Front-end ↔ Back-end
* Componentização e reutilização
* Estados vazios e UX feedback

---

## 🧱 Tecnologias

* React
* TypeScript
* Vite
* Zod
* CSS Modules / Styled Components (ou o que você usar)
* API REST (backend fornecido no curso)

---

## 📁 Estrutura do projeto

```
Em andamento...

---

## ▶️ Como executar o projeto

```bash
# instalar dependências
yarn

# rodar o projeto
yarn dev
```

---

## 📌 Observações

Este projeto foi desenvolvido com o objetivo de aprofundar conceitos de arquitetura front-end, indo além da simples implementação visual, priorizando organização, legibilidade e escalabilidade do código.

---

## 👨‍💻 Autor

**Junior Bonini**
Front-end Developer

---
