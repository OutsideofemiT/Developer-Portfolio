# Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and Vite—designed to showcase real-world development, creative systems, and poetic tech fluency. Includes a serverless chatbot powered by Vercel API routes.

---

## 📁 Project Structure

```
/
├── api/                # Serverless API routes (e.g., /api/chat)
├── client/             # Frontend React app (Vite)
│   ├── src/
│   ├── public/
│   └── ...
├── public/             # (optional) Static build output for deployment
├── vercel.json         # Vercel rewrites and routing
├── package.json        # Root scripts and dependencies
└── ...
```

---

## 🚀 Local Development

### 1. **Install Dependencies**

```sh
npm install
cd client
npm install
cd ..
```

### 2. **Run the Backend (API) Server**

In the project root:

```sh
vercel dev --listen 3001
```

This starts your Vercel serverless API on port 3001.

### 3. **Run the Frontend (Vite) Dev Server**

In a new terminal, in the `client` folder:

```sh
npm run dev
```

This starts your React app on port 3000.

### 4. **Proxy Setup**

Your `client/vite.config.ts` should include:

```ts
server: {
  port: 3000,
  proxy: {
    '/api': 'http://localhost:3001'
  }
}
```

### 5. **Access the App**

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧑‍💻 Development Notes

- **Frontend:**  
  Located in `/client`. Uses React, TypeScript, Tailwind CSS, and Vite.
- **Backend/API:**  
  Serverless functions in `/api` (e.g., `/api/chat.ts` for the chatbot).
- **Environment Variables:**  
  Place your API keys (e.g., `OPENAI_API_KEY`) in a `.env` file at the project root for local development.

---

## 🏗️ Building for Production

```sh
cd client
npm run build
```

The production-ready files will be in `client/dist`.

---

## ☁️ Deploying to Vercel

1. Push your code to your Git repository (GitHub, GitLab, etc.).
2. Connect your repo to [Vercel](https://vercel.com/).
3. Set your project’s output/public directory to `client/dist` in Vercel settings.
4. Set required environment variables in the Vercel dashboard.
5. Deploy!

Vercel will:
- Serve your built frontend from `client/dist`
- Handle `/api/*` routes with serverless functions in `/api`

---

## 🛠️ Troubleshooting

- **Chatbot not working locally?**
  - Make sure both servers are running.
  - Check that your Vite proxy matches the backend port.
  - Check the terminal running `vercel dev` for API errors.
- **Static assets not loading?**
  - Ensure you are serving the built files from `client/dist` or `public` as configured.
- **500 errors from `/api/chat`?**
  - Check for missing environment variables or errors in your API code.

---

## 📄 License

MIT

---