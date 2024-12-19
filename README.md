![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<h1 align="center" style="font-weight: bold;">[Tivit]</h1>

<p align="center">
  <img src=".github/logo.svg" alt="Tivit logo" width="300px">
</p>

---

## 📌 Sobre

Essa é uma aplicação de autenticação simples com verificação de permissões para acessar diferentes áreas do sistema. O projeto implementa um sistema de login com verificação de permissões para distinguir usuários comuns e administradores. A autenticação é feita usando **JWT (JSON Web Tokens)**, e a interface é desenvolvida com **React** e **TailwindCSS**.

A aplicação permite que usuários logados possam acessar páginas específicas de acordo com suas permissões, garantindo que apenas administradores possam acessar a área de administração.

---

## 🚀 Começando

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Configuração do aambiente

1. Clone o repositório:
   ```bash
   git clone XXX
   cd tivit
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento completo (Frontend + API):
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador:
- Frontend: http://localhost:3000

---

## 📂 Estrutura do projeto

#### A aplicação segue uma arquitetura modular, organizada em:
- Components: Componentes reutilizáveis.
- Pages: Telas principais da aplicação.
- Services: Conexão com a API (axios).
- Hooks: Lógica compartilhada (como formulários e estados).
- Utils: Funções auxiliares.
- Types: Tipos e interfaces para garantir tipagem estática.


---

## 🛡️ Autenticação e segurança

###### A autenticação é gerenciada com JSON Server Auth, oferecendo suporte a rotas protegidas com JWT. Para acessar áreas restritas, é necessário realizar login e obter um token de autenticação.
