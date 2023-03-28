

# DTMoney-Ignite-02 - Rocketseat:

Criaremos um projeto para controle financeiro, seguindo os paramentos determinando no figma. Esse projeto é mais atualizado e aprimirado que o anterior

Esse projeto já foi desenvolvido na trilha anterior do React da Rocketseat, porém agora será feito com novas funcionalidades e novos estudo, 
e futuramente irei dar uma funcionalidades e aplicabilidade pessoais ao projeto.

Essa aplicação utiliza Styled components, (npm create vite@latest) para a criação inicial do projeto.

instalação no VSCode: npm i eslint -D

npm i @rocketseat/eslint-config -D

Utilizamos também para baixar e utilizar icones o “phosphor-react”.

Utilizamos também o @radix-ui/react-dialog para o modal e o @radix-ui/react-radio-group para o check box do botão do modal.

Temos que instalar uma API para simular um backend, para podermos trabalhar com o armazenamento de dados no app. Será usada o JSON SERVER.

Instalamos o Json-server como dependencia de Desenvolvimento

Depois rodamos o comando “npx json-server server.json -p 3333” //ele tenta subir na porta 3000, por isso passamos o parâmetro de “-p 3333”. Usamos o “-w” para que ele fique observando e atualizando sempre que tiver mudança no arquivo. Usamos também o “-d 500” para ver a questão do tempo de latência da aplicação, ou seja, a demora da resposta do servidor para colocarmos a questão de ‘carregando…’ na aplicação.

Utilizar nos formulários da aplicação o hook form.
Temos que instalar algumas bibliotecas para trabalhar com o React hook form:
npm i react-hook-form zod;
npm i @hookform/resolvers ;
Foi adicionado Controllers, e usamos também o axios.
Usamos o useCallback e o useMemo para melhorar a performace da aplicação.

Telas do App: 

![Tela 01](https://user-images.githubusercontent.com/69223872/228370520-ef99b15f-82c5-40cf-bf6c-549b2de644d7.png)
![Tela 02](https://user-images.githubusercontent.com/69223872/228370523-e7076cb2-5fcb-4bf0-beb9-4f004960ce2b.png)

Lista de busca: 

![Tela 03 - Busca](https://user-images.githubusercontent.com/69223872/228370569-a28b6ee1-d24a-46cb-a5d5-baaa1a6c74b8.png)

Modal e lista pós inserção no modal:

![Tela 04 - Modal](https://user-images.githubusercontent.com/69223872/228370631-44423655-dd9b-41e9-9c6f-de36a9e72309.png)
![Tela 05 - Modal Saida](https://user-images.githubusercontent.com/69223872/228370636-e0440c9c-153a-42d8-91b3-b16015429ea2.png)
![Tela 06 - Lista Atualizada da Saida](https://user-images.githubusercontent.com/69223872/228370640-c724c002-7e4e-43f5-8a70-bb886aca72f0.png)
![Tela 07 - Modal Entrada](https://user-images.githubusercontent.com/69223872/228370644-7610dc63-bcff-47ca-a676-80d715880d8d.png)
![Tela 08 - Lista Atualizada da Entrada](https://user-images.githubusercontent.com/69223872/228370645-47df35e7-bfe4-4907-a6e3-7a1cf474c327.png)
