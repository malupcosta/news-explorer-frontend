# News Explorer

News Explorer é uma aplicação front-end desenvolvida em React. O projeto permite pesquisar notícias por palavra-chave usando uma API externa, exibir os resultados em cards, mostrar estados de carregamento e erro, além de simular a página de artigos salvos.

Este projeto faz parte da Fase 1 do projeto final da TripleTen.

## Funcionalidades

- Pesquisa de notícias por palavra-chave
- Integração com a News API
- Exibição dos resultados em cards
- Renderização inicial de 3 notícias
- Botão "Mostrar mais" para carregar mais cards
- Estado de carregamento com preloader
- Mensagem para busca sem resultados
- Tratamento de erro de requisição
- Armazenamento dos resultados no localStorage
- Página de artigos salvos
- Popup de login
- Fechamento do popup por botão, overlay e tecla Esc
- Menu mobile responsivo
- Layout responsivo para desktop, tablet e mobile

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- React
- React Router
- Vite
- News API
- Git e GitHub

## Estrutura do projeto

```txt
src/
  components/
    About/
    Footer/
    Header/
    Main/
    Navigation/
    NewsCard/
    NewsCardList/
    PopupWithForm/
    Preloader/
    SavedNews/
    SavedNewsHeader/
    SearchForm/
  images/
  utils/
    NewsApi.js
  vendor/
    fonts/
    fonts.css
```

## Como executar o projeto localmente

Clone o repositório:

```bash
git clone git@github.com:malupcosta/news-explorer-frontend.git
```

Acesse a pasta do projeto:

```bash
cd news-explorer-frontend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto e adicione sua chave da News API:

```env
VITE_NEWS_API_KEY=sua_chave_aqui
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## API utilizada

O projeto utiliza a News API para buscar notícias por palavra-chave.

Endpoint usado:

```txt
https://newsapi.org/v2/everything
```

Parâmetros principais:

- `q`: palavra-chave pesquisada
- `from`: data inicial da busca
- `to`: data final da busca
- `pageSize`: quantidade de notícias retornadas
- `language`: idioma das notícias
- `apiKey`: chave de autenticação da API

## Rotas

```txt
/            Página inicial com busca de notícias
/saved-news  Página de artigos salvos
```

## Status do projeto

Fase 1 concluída:

- Marcação e JSX
- Componentização
- Roteamento
- Integração com API externa
- Estados de carregamento e erro
- Responsividade
- Menu mobile
- Fontes locais com @font-face
- Imagens principais do projeto

## Repositório

```txt
https://github.com/malupcosta/news-explorer-frontend
```
