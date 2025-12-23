# Clinical NLP System (Breast Cancer Analysis)

A React + TypeScript application for analyzing clinical text related to breast cancer using extensive NLP models.

## Pre-requisites
- **Node.js**: Install from [nodejs.org](https://nodejs.org/)
- **Git**: Install from [git-scm.com](https://git-scm.com/)
- **Supabase Account**: Free account at [supabase.com](https://supabase.com)
- **Hugging Face Account**: Free account at [huggingface.co](https://huggingface.co)

## How to Run (Step-by-Step)

### 1. Clone the Repository
Open your terminal (CMD or PowerShell) and run:
```bash
git clone https://github.com/ShreehariMenon/TL_MP.git
cd TL_MP
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Backend (Supabase)
This project requires a backend to run the AI models.

1.  Go to [database.new](https://database.new) and create a **New Project**.
2.  Once created, go to **Settings > API**. 
    - Copy the `Project URL`.
    - Copy the `anon public` Key.

### 4. Configure Local Environment
1.  Copy the example env file:
    ```bash
    cp .env.example .env
    # OR on Windows CMD: copy .env.example .env
    ```
2.  Open `.env` in a text editor (Notepad/VS Code).
3.  Fill in your details:
    ```env
    VITE_SUPABASE_URL=your_project_url_from_step_3
    VITE_SUPABASE_ANON_KEY=your_anon_key_from_step_3
    ```

### 5. Setup AI Models (Hugging Face)
1.  Get a free token from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens).
2.  Open your terminal and login to Supabase CLI:
    ```bash
    npx supabase login
    ```
3.  Link your local code to your new cloud project:
    ```bash
    npx supabase link --project-ref your_project_ref_id
    ```
    *(The ref ID is the random string in your Supabase URL, e.g., `abcdefgh` from `https://abcdefgh.supabase.co`)*

4.  **Set the API Secret (Important!):**
    ```bash
    npx supabase secrets set HUGGING_FACE_API_KEY=hf_your_token_here
    ```

5.  Deploy the backend code:
    ```bash
    npx supabase functions deploy clinical-nlp-analysis --no-verify-jwt
    ```

### 6. Run the App
```bash
npm run dev
```
Open the link (usually http://localhost:5173) in your browser.
