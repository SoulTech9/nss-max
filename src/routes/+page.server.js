import { supabaseClient } from "$lib/supabase.js";

export const actions = {
    default: async({request})=>{
        const formData = await request.formData();
        const name = formData.get('fname');
        const phone = formData.get('phone');
        const location = formData.get('location');
        const email = formData.get('email');
        const event = formData.get('event');

        const { error } = await supabaseClient
  .from('contact_form')
  .insert({ name, phone, location, email, event })
       
            return{
                message: 'Your information has been sent. Thank you!'
                
                
            };
    }
};