# Pipeline

The purpose of **Pipeline** is to showcase diverse technical creators in Nashville, TN.

This is an open source, searchable database for anyone desiring to find diverse talent.

## How to add your information

1. Create a Github account
2. Add a REAL, clear image of yourself on the account
3. Submit your information for approval

## How to contribute
Go to the [project board](https://github.com/orgs/Repped-In-Tech/projects/2), select a ticket to work on, then create a PR referencing the ticket. 

Your PR will be reviewed and either approved and merged or commented.

Once your PR is merged, you will be added as a contributor to the project.

## Run NextJS project locally
Clone the project to your machine

First, do the installations, then run the development server:

```bash
npm i
npm run prepare
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Storybook project locally

Start the storybook server

```bash
npm run storybook
```

Open [port 6006](http://localhost:6006/)

## Add Subdomain Netlify + Bluehost
- On netlify navigate to Team > Domains > Add or Register a domain
- Enter the subdomain in full (i.e. pipeline.reppedintech.com)
- Create nettlify app
- Create 2 new CNAME records
  - Host record: subdomain (i.e. pipeline + www.pipeline)
  - Points to: use assigned Netlify url
  - TTL - leave blank

Docs:
- https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-a-subdomain
- https://docs.netlify.com/domains-https/netlify-dns/delegate-a-subdomain-to-netlify-dns/
