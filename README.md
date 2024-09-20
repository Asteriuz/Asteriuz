<p align="center">
  <img src="./src/assets/logo/Logo.svg" width="240" alt="Ferpan Logo" />
</p>

# Ferpan

Este é um projeto [Next.js](https://nextjs.org/) para a Ferpan. Ele é inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) e usa Tailwind CSS para estilização.


## Estrutura do Projeto

O projeto tem a seguinte estrutura:

- `src/`: Contém o código fonte do projeto.
- `public/`: Contém arquivos estáticos como imagens e fontes.
- `tailwind.config.ts`: Arquivo de configuração do Tailwind CSS.
- `next.config.mjs`: Arquivo de configuração do Next.js.
- `package.json`: Lista as dependências e scripts do projeto.

## Começando

Primeiro, instale as dependências:

```bash
npm install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Construindo o Projeto

Para construir o projeto, execute:

```bash
npm run build
```

## Linting do Projeto

Para fazer o lint do projeto, execute:

```bash
npm run lint
```

## Implantação

O projeto está configurado para ser implantado no GitHub Pages. A implantação é gerenciada por um fluxo de trabalho do GitHub Actions definido em `.github/workflows/deploy.yml`.

## Contribuindo

Contribuições são bem-vindas! Por favor, certifique-se de fazer o lint do seu código antes de enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
