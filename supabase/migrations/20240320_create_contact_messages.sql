-- Create contact_messages table
create table if not exists public.contact_messages (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    subject text not null,
    message text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.contact_messages enable row level security;

-- Create policy to allow inserting messages
create policy "Anyone can insert contact messages" on public.contact_messages
    for insert with check (true);

-- Create policy to allow reading messages (you might want to restrict this to admin users later)
create policy "Anyone can view contact messages" on public.contact_messages
    for select using (true); 