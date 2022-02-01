# WORK FLOW

## About work flow

Workflow for working with prisma and planetscale my new favourite tools
pscale connect planetscale-express main --port 3309

## To create or edit models

## Step 1

Create a new development branch from main call name it occording to the changes you made
pscale branch create planetscale-express <"Branchname">

## Step 2

Close the proxy connection to your main branch if connected
Connect new branch to the port-
pscale connect planetscale-express <"Branchname"> --port 3309

## Step 3

npx prisma db push

## Final step

pscale deploy-request create planetscale-express <"branchname">
pscale deploy-request deploy planetscale-express <"deployment number">

To delete branch
pscale branch delete planetscale-express <"Branchname">

### Development

pscale connect planetscale-express project --port 3309

# About project

Development manager - a place for developers to manage stuff they use during development. For example fake logins,jwts,just anything you use in your dev environment.
I'm building this because keeping track of fake passwords,logins,api keys is really hard so this web app will be a place where one can store those keys and make their like a bit easier!
