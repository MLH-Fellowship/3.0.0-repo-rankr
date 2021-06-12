# RepoRank

## Inspiration

When we started the fellowship, we knew we were going to work on amazing open source projects, by even more amazing maintainers, contributors, and developers alike. Once the repositories/projects we would be working on were shown, one question really lingered in the air. 

> How **Open Source Friendly** is this repo *really?*

We can always turn to majors repos like React, Vue, Flask, etc. But these don't paint a picture on what less popular *yet still quite active* open source projects look like (from a codebase perspective). **This idea clicked even further** when we were going through the quite frankly simple yet effective LMS Platform for the first week, which consisted of *literally*, what makes a repo **_a good open source repo/project**. 

So putting two and two together, **RepoRankr** was born!

## What it does

**RepoRankr**'s main feature is to scan any GitHub Repository and determine a Grade score for how well said repo conforms to best practices of Open Source. 

Such as (but not limited to):

- Number of Contributors
- Most Recent Pull Requests and Issues Dates (both opened and closed)
- Issue and Pull Request Templates
- Number of topics
- Checks for homepage URL, short description and repo name
- License verification (More *open* licenses are favoured)

## How we built it

The app infrastructure was quite straightforward, we use Next.js as our React Framework of choice, so we can easily deploy to Vercel. GraphQL calls are made using Apollo Client, and REST calls via Axios.

We leveraged StyleX to style our components and landing page, while it wasn't *out-of-the-norm*, per say, we still ran into a few unfavourable challenges.

We utilise the *raw power* of the GitHub GraphQL API (as well as the REST equivalent for a tiny call), in order to scan the repo, we then format the returned data into a more 'friendly' model, pass that through our rank determination algorithm  and **Bob's your uncle**, the client website will get a grade score, as well as a rundown on some of the checks.

## Challenges we ran into

**1. Time Zone Challenges**

Since each member is quite literally, scattered around the world, our time-zones are not very compatible. We did find a good compromise for a daily standup time (08:00 EST), but we ran into situations where after the standup's over, the majority of the team would be asleep, leaving 1 or 2 developers contributing alone, and finding it hard to sync up until the next standup.

**2. StyleX Problems**

Overall we found the development process using stylex quite abnormal compared to just using css modules from next.js, especially with patterns such as copy pasting with the chrome debugger, and nesting and css selectors. 

In general, would we use styleX as our css alternative of choice in the future? Problably not.

Did we learn a thing or two about how stylex transforms regular css-in-js into utility classes? Yup!

## Accomplishments that we're proud of

Super proud on the API flow we developed, and understanding the GitHub APIs.

## What we learned

- CSS-in-JS in practice
- More refinement in GraphQL knowledge
- Working as an async team with members all over the world

## What's next for RepoRankr

- Improve analysis results
- More detailed badges
- *Actually make our own repository more Open Source Friendly*


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
