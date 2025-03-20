-- Create todos table
create table if not exists public.todos (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users(id) on delete cascade not null,
    title text not null,
    completed boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.todos enable row level security;

-- Create policies
create policy "Users can view their own todos" on public.todos
    for select using (auth.uid() = user_id);

create policy "Users can insert their own todos" on public.todos
    for insert with check (auth.uid() = user_id);

create policy "Users can update their own todos" on public.todos
    for update using (auth.uid() = user_id);

create policy "Users can delete their own todos" on public.todos
    for delete using (auth.uid() = user_id);

-- Create indexes
create index todos_user_id_idx on public.todos(user_id);
create index todos_created_at_idx on public.todos(created_at); 