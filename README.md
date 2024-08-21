![logo medicar](https://i.postimg.cc/DZNPJSxk/Logo.png "logo medicar")
# Desafio Medicar  [ Frontend ]
Descrição: Teste prático Intemed Frontend

Autor: Eymard Neto ( [linkedin](https://www.linkedin.com/in/eymard-neto-216254207) )

# Tecnologias

  - React 18.3.1
  - Vite 5.4.1
  - Styled Components 6.1.12
  - React Query 3.39.3
  - React Hook Form 7.52.2

# Pré-requisitos para Setup

- Git
- Node 18+

# Setup Frontend
Esse guia irá te ajudar a executar a aplicação em ambiente de desenvolvimento

## 1. Clonar o repositório e atualizar arquivo de ambiente
Clone o repositório:

```bash
git clone <https://github.com/franciscoeymardneto/Intmed-front-react.git>
```

Entre na pasta raiz do projeto e crie o arquivo .env com as variáveis abaixo:

```bash
VITE_BASE_URL=http://109.199.100.71:8000
```

**OBS:** Você pode usar essa URL de uma API do Medicar que já está pronta para uso! Segue as credenciais do menu admin:

```bash
Url menu admin: http://109.199.100.71:8000/admin
Usuário: testintmed
Senha: @Intmed2024#
```

Coloque a url da [API backend](https://github.com/franciscoeymardneto/intmed-back.git) do projeto medicar.


### 2.[Docker] Execute a aplicação usando Docker
Caso você queira utilizar o Docker para executar a aplicação, na raiz do projeto execute os comando abaixo:

```bash
docker compose up --build
```

### 2.[NPM] Instalando dependencias
Na raiz do projeto execute o comando para instalar as dependências:

```bash
cd ..
npm install
```

### 3. Execute a aplicação
Execute a aplicação para poder ter acesso ao sistema

```bash
npm run dev
```
### 4. Acessos

- Acesse a aplicação através do endereço: http://localhost:5173/

Agora basta só criar sua conta e testar a aplicação!!

OBS: Lembre de popular o banco através do menu Admin do Django para que o frontend tenha o que
consumir
