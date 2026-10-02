import { createClient } from "@supabase/supabase_js";

const supabaseUrl = import.meta.env.VITE_SUPABSE_URL
const supabaseAnnpnKey = import.meta.env.VITE_SUPABSE_ANON_KEY


const supabase = createClient(supabaseUrl,supabaseAnnpnKey, {
    auth: {
        persistSession: true,
        authRefreshToken: true
    },
    realtime:{
        params:{
            eventPerSecond: 10
        }
    }
})


export default supabase;