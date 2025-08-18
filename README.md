# 🥤 Vai de Retornável – DevOps UNINTER  

Repositório do projeto **Vai de Retornável**, desenvolvido para a disciplina de **DevOps** na **UNINTER**.  

## 📌 Objetivo  
O objetivo deste projeto é **aplicar práticas de DevOps** em um caso real, utilizando a campanha **Vai de Retornável** da Coca-Cola como base para desenvolvimento de uma landing page otimizada.  

Além do aspecto técnico (ciclo de desenvolvimento, integração contínua e entrega contínua), o projeto visa:  
- Reorganizar o conteúdo da campanha.  
- Melhorar a experiência do usuário.  
- Documentar todo o processo, desde o **planejamento** até a **conclusão**.  

![Ciclo DevOps](https://cdn.manageengine.com/sites/meweb/images/br/service-desk/images/devops-lifecycle-diagram.jpg)  

## 🔄 Ciclo DevOps aplicado

Conforme abordado na aula de 14/08/2025, o ciclo DevOps aplicado neste projeto seguiu as seguintes etapas:

**Planejamento** – definição do escopo, divisão de tarefas e criação de épicos no Jira.

**Desenvolvimento** – implementação da landing page utilizando HTML, CSS e JS.

**Integração Contínua (CI)** – versionamento no GitHub e padronização de branches.

**Entrega Contínua (CD)** – uso de Docker para simular ambiente padronizado.

**Deploy** – execução local via Docker Compose.

**Monitoramento** – acompanhamento do fluxo no Jira e feedbacks em grupo.

**Otimização** – ajustes e melhorias conforme testes.

## 📂 Estrutura do Projeto  
**main** → versão estável do projeto.  
**Demais branches** e convenções → ver [BRANCHING_VERSIONING.md](./BRANCHING_VERSIONING.md).  

## 🛠 Tecnologias Utilizadas  
- **HTML**  
- **CSS**  
- **JavaScript**  
- **Docker**  

## 🚀 Executando o Projeto  

Para executar em ambiente de desenvolvimento com **Docker**:  

```bash
docker compose up --build
```
Acesse no navegador:
👉 http://localhost:8080/

⚠️ **Importante**: após qualquer alteração no código, será necessário matar o container e rodar o build novamente para visualizar as mudanças.


## 📑 Documentação e Recursos

- 📖 **Documentação do projeto**: [Definição escopo do projeto - UNINTER - DEVOPS](https://docs.google.com/document/d/1bsz3B9ZMbT3hPgfC__huFnvFeELWP-bgs90OcolHEB0/edit?usp=sharing)  
- 🗂 **Jira**: [trabalho-devops | Quadro](https://rodrigopas.atlassian.net/jira/software/projects/UNINTER/boards/34)  
- 💻 **Repositório GitHub**: [Vai de Retornável – GitHub](https://github.com/rodrigo-pas/uninter-devops-vai-de-retornavel)  
- 🎨 **Protótipo no Figma**: [UNINTER - DEVOPS](https://www.figma.com/design/0htNAIAzdub8g731qIMbNc/UNINTER---DEVOPS?node-id=1-3&t=sf6kKlUXhJPw6rl6-0)  

## 👥 Equipe

- @rodrigo-pas
- @MarcosDS7
- @odanieldamasio
- @nescossio