## Descrição

Este projeto simula um fluxo de trabalho colaborativo com Git, onde colaboradores desenvolvem funcionalidades, corrigem bugs urgentes e fazem merges no branch principal.

## Requisitos

1. Criar repositório no GitHub e adicionar colaboradores.
2. Cada colaborador implementa duas funcionalidades (com 2 commits cada).
3. Após o primeiro commit de cada funcionalidade, simula-se um bug urgente e cria-se um branch para corrigir.
4. Após a correção, retomar o desenvolvimento da funcionalidade.
5. Realizar o merge de cada branch no `master`.

## Clonando o Repositório

Para começar, clone o repositório:

```bash
git clone git remote add origin git@github.com:TalitaGabriela/atividade3_branch_gerencia.git
cd atividade3_branch_gerencia
```

## Fluxo de Trabalho

1. **Criar um Branch para Funcionalidade**
   ```bash
   git checkout -b funcionalidade-1
   ```

2. **Desenvolver e Commitar**
   ```bash
   git add .
   git commit -m "Implementando funcionalidade 1"
   ```

3. **Simular Bug Urgente e Corrigir**
   ```bash
   git checkout -b bugfix-urgente
   # Corrigir bug
   git add .
   git commit -m "Corrigido bug urgente"
   ```

4. **Merge da Correção no Master**
   ```bash
   git checkout master
   git merge bugfix-urgente
   ```

5. **Finalizar Funcionalidade**
   ```bash
   git checkout funcionalidade-1
   git add .
   git commit -m "Finalizada funcionalidade 1"
   git checkout master
   git merge funcionalidade-1
   ```

6. **Repetir para a Segunda Funcionalidade**

## Contribuindo

1. Fork o repositório.
2. Crie um branch para a tarefa.
3. Faça o commit e envie para o seu fork.
4. Abra um pull request.

## Autores

João Pedro Alves Canezin e Talita Gabriela Del Poso Vilalva (INFO-6B)
