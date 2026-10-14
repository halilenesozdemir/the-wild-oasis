# The Wild Oasis

An internal admin app for a small boutique hotel: staff manage cabins, bookings and app settings. Built while following Jonas Schmedtmann's *Ultimate React* course; work in progress.

## Features

- Cabins: list, create, edit, duplicate and delete, with image upload to Supabase Storage
- Hotel settings: fetch and update (breakfast price, booking limits, guests per booking)
- Forms with validation via React Hook Form; success and error toasts
- Bookings, check-in/out, dashboard and authentication: in progress

## Technical notes

- Server state with **React Query**; each operation is a custom hook (`useCabins`, `useCreateCabin`, `useEditCabin`, `useDeleteCabin`, `useSettings`, `useUpdateSetting`)
- **Supabase** as backend (Postgres, Storage, Row Level Security); API calls isolated in `src/services`
- **Styled Components** for a reusable UI kit (`src/ui`) with global styles and light/dark logos
- Feature-based folders: `src/features/<feature>`

## Run locally

```bash
npm install
npm run dev
```

## Stack

React 18 · Vite · React Query · Supabase · Styled Components · React Router · React Hook Form
