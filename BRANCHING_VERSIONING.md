# 📄 Definição de Branches e Estratégia de Versionamento

## 🔹 Branch principal
- **`main`**: versão final do sistema, pronta para ser usada.  
- Alterações diretas **não são permitidas**.  
- Mudanças só entram via **Pull Request** aprovado.

## 🔹 Outras branches
- **`feature/nome-da-funcionalidade`** → para criar novas partes do sistema.  
- **`bugfix/descricao`** → para corrigir erros encontrados.  
- **`hotfix/descricao`** → usado em caso de correção urgente direto na versão final.  

## 🔹 Fluxo de trabalho
1. Criar a branch com o nome correto.  
2. Fazer alterações e commits organizados e claros.  
3. Abrir um **Pull Request** para `main`.  
4. Aguardar a revisão de outro membro do grupo (**Code Review**).  
5. Após aprovação, realizar o **merge** para `main`.

## 🔹 Versionamento do sistema
Usamos a numeração padrão **MAIOR.MINOR.CORREÇÃO** ([Semantic Versioning](https://semver.org/lang/pt-BR/)):

- **`1.0.0`** → primeira versão.  
- **`1.1.0`** → nova funcionalidade adicionada.  
- **`1.1.1`** → correção de erro.

---