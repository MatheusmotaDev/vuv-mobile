<p align="center">
  <a href="https://github.com/MatheusmotaDev/vuv-mobile" target="_blank">
    <img src="assets/logo.png" width="400" alt="VUV Logo">
  </a>
</p>

<p align="center">
  <a href="https://github.com/MatheusmotaDev/vuv-mobile/actions">
    <img src="https://github.com/MatheusmotaDev/vuv-mobile/workflows/tests/badge.svg" alt="Build Status">
  </a>
  <a href="https://github.com/MatheusmotaDev/vuv-mobile/releases">
    <img src="https://img.shields.io/github/v/release/MatheusmotaDev/vuv-mobile" alt="Latest Release">
  </a>
  <a href="https://github.com/MatheusmotaDev/vuv-mobile/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/MatheusmotaDev/vuv-mobile" alt="License">
  </a>
</p>

## Versão Mobile do Sistema VUV (Vida Útil do Veículo)

### Descrição
Este projeto é uma aplicação em React Native da versão do sistema web VUV. Esta versão da aplicação mobile contém funcionalidades de cadastro, login e área do cliente.

### Bibliotecas Instaladas e Utilizadas

#### 1. Expo CLI
Utilizado para criar e gerenciar o projeto.

#### 2. React Navigation
Biblioteca principal para navegação entre as telas.
- `@react-navigation/native`
- `@react-navigation/stack`
- `@react-navigation/bottom-tabs`
- `react-native-screens`
- `react-native-safe-area-context`

#### 3. AsyncStorage
Utilizado para armazenamento local de dados.
- `@react-native-async-storage/async-storage`

#### 4. Moment.js
Biblioteca para manipulação e formatação de datas e horas.
- `moment`
- `moment/locale/pt-br`

### Estrutura de Pastas

#### 1. Pasta Principal do Projeto
- **assets/**
  - `logo.png` (imagem da logo do sistema)
- **screens/** (contém os componentes de tela)
  - `LoginScreen.js`
  - `RegisterScreen.js`
  - `HomeScreen.js`
  - `CreateQuotationScreen.js`
  - `QuotationsListScreen.js`
  - `ForgotPasswordScreen.js`

#### 2. Outros Arquivos Importantes
- `App.js` (arquivo principal que configura a navegação)
- `package.json` (contém as dependências do projeto)

### Como Testar o Projeto

#### Passo 1: Instalar o Visual Studio Code
Baixe e instale o [Visual Studio Code](https://code.visualstudio.com/download).

#### Passo 2: Instalar o Node.js
Baixe e instale o [Node.js](https://nodejs.org/en).

#### Passo 3: Instalar e Configurar o Git
Baixe e instale o [Git](https://www.git-scm.com/). Após a instalação, configure o Git com seu nome de usuário e email do GitHub:

git config --global user.name "seu-username"
git config --global user.email "seu-email@example.com"
