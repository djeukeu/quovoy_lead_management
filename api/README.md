## 📋 Prerequisites
Make sure you have the following installed:
- **Node.js**: v22 or later (Preferably as indicated in the `.nvmrc `file)
- **PostgreSQL**
- **Git** (for cloning the repository)

---

## 🚀 GuideLine

### 1. Clone the repository
```
git clone $REPOSITORY_LINK
```

### 2. Install packages 
```
npm install
```

### 3. Create the .env file

Create a file named `.env` in the project root using `.env.example` as template

Example:

Always show details
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432 DATABASE_NAME?schema=public"

💡 DATABASE_URL should match your database credentials and Prisma provider

### 4. Apply the database migrations
```
npm run prisma:dev
```

### 4. Launch the API 
```
npm run dev
```
