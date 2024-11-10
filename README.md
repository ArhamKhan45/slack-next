                                                    Introduction of Slack clone

The ultimate team collaboration tool designed for seamless communication and productivity. With organized channels, direct messaging, and powerful integrations, your team can keep conversations focused and projects on track. Experience real-time notifications, file sharing, and easy search capabilities to find important information instantly. Our platform is built for both web and mobile, ensuring your team stays connected anytime, anywhere. Simple, efficient, and customizable – it's your team's new favorite workspace for boosting efficiency and fostering collaboration.

Here's a high-level step-by-step guide for building a Slack clone:

1. Authentication ui - signIn / signup page
2. Database setup using convex -> created a tasks jsonl file then import it to convex as a table of task then wire up the convexClientProvider then written a get api query , and tested it on the task route, to check it is working properly or not

3. github authentication--> install both of modules "@auth/core" "@convex-dev/auth" then run npx @convex-dev/auth to initialization cmd use this link for better understanding https://labs.convex.dev/auth/setup
   1. create the authtable schema
   2. Set up the React provider{app router with SSA} ConvexAuthNextjsServerProvider in layout.tsx
   3. Client provider
   4. Add the middleware file
   5. now setup the env with githubId and githubSecret and then import Github from auth/core/providers/github for github authentication and pass in the providers array of convexAuth of
