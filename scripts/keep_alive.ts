import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables manually
const envPath = path.resolve(__dirname, '../.env');
const envConfig = fs.readFileSync(envPath, 'utf8');
const env: Record<string, string> = {};

envConfig.split('\n').forEach((line) => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim();
    }
});

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function keepAlive() {
    console.log('Pinging Supabase...');

    // Try to read from clinical_analyses table, or just check health/auth
    // A simple read query is enough to count as activity
    const { data, error } = await supabase
        .from('clinical_analyses')
        .select('id')
        .limit(1);

    if (error) {
        console.error('Error pinging Supabase:', error);
        // Even an error might count as activity, but let's try to be successful

        // Fallback: try auth check
        const { data: authData, error: authError } = await supabase.auth.getSession();
        if (authError) {
            console.error('Auth check failed:', authError);
        } else {
            console.log('Auth check successful');
        }

    } else {
        console.log('Successfully pinged Supabase. Data:', data);
    }
}

keepAlive();
