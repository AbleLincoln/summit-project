import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/supabase'

const supabaseUrl = 'https://pekztqfzrmnuqjgpqaqd.supabase.co'
const supabaseKey = process.env.PRIVATE_SUPABASE_SERVICE_KEY as string
const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // pick off these values for safety (also gives us typing for insert)
    const {
        first_name,
        last_name,
        email,
        phone,
        company,
        title,
        link,
        interest,
        referral,
    } = req.body

    const { error } = await supabase.from('newsletter').insert({
        first_name,
        last_name,
        email,
        phone,
        company,
        title,
        link,
        interest,
        referral,
    })

    if (error) res.status(500).send('I broke 😞')
    res.status(200).send(`user ${first_name} ${last_name} inserted`)
}
