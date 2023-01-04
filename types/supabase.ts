export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            newsletter: {
                Row: {
                    id: number
                    created_at: string | null
                    first_name: string | null
                    last_name: string | null
                    email: string | null
                    phone: string | null
                    company: string | null
                    title: string | null
                    link: string | null
                    interest: string | null
                    referral: string | null
                }
                Insert: {
                    id?: number
                    created_at?: string | null
                    first_name?: string | null
                    last_name?: string | null
                    email?: string | null
                    phone?: string | null
                    company?: string | null
                    title?: string | null
                    link?: string | null
                    interest?: string | null
                    referral?: string | null
                }
                Update: {
                    id?: number
                    created_at?: string | null
                    first_name?: string | null
                    last_name?: string | null
                    email?: string | null
                    phone?: string | null
                    company?: string | null
                    title?: string | null
                    link?: string | null
                    interest?: string | null
                    referral?: string | null
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}
