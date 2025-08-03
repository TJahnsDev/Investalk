// src/types/supabase.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          ticker: string;
          content: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          ticker: string;
          content: string;
          user_id?: string;
          created_at?: string;
        };
        Update: {
          ticker?: string;
          content?: string;
          user_id?: string;
          created_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          username: string;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          username: string;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          username?: string;
          avatar_url?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
