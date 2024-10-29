# Movie App


## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/idantid/movie-app.git
   cd movie-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Configuring Environment Variables

The project uses **environment variables** to store sensitive or configurable settings like the TMDB API key. These variables are stored in a `.env` file, which is not included in the repository for security reasons.

### Steps to Set Up the `.env` File

1. **Copy the `.env.example` file and rename it to `.env`:**
   ```bash
   cp .env.example .env
   ```

2. **Open the `.env` file and set the necessary environment variables**:
   - **VITE_API_KEY**: Replace `your_tmdb_api_key_here` with your actual TMDB API key.

---

## Running the App

**Start the development server:**
   ```bash
   npm run dev
   ```
   
