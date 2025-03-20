
# Amin Shaikh - Fintech Product Manager Portfolio

## Project Overview

This portfolio showcases Amin Shaikh's expertise as a Product Manager specializing in Fintech applications. The portfolio is built with modern web technologies and is integrated with Supabase for backend functionality.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase
- **Deployment**: Ready for Netlify, Vercel, or GitHub Pages

## Development

To run this project locally:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd fintech-portfolio-boost

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment

This project is configured for easy deployment on various platforms:

### Netlify
- Simply connect your GitHub repository to Netlify
- The build settings are already configured in the netlify.toml file

### Vercel
- Connect your GitHub repository to Vercel
- No additional configuration needed, Vercel will auto-detect Vite settings

### GitHub Pages
- Run `npm run build`
- Deploy the contents of the `dist` folder to GitHub Pages

## Supabase Integration

This project is connected to Supabase for backend functionality. To set up your own Supabase instance:

1. Create a new project on [Supabase](https://supabase.com)
2. Update the Supabase URL and anon key in `src/integrations/supabase/client.ts`
3. Run any necessary database migrations

## Contact

For any questions or inquiries, please reach out to Amin Shaikh through the contact form on the portfolio.
