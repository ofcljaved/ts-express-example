# Adding TypeScript to an Express Project

This is a simple Express project that uses TypeScript.

It shows you how to extend the Express Request type to add a custome property.

You need to create a types folder, you can create it in the root of your project or in a src folder.

Then you create a folde with name express if you wanna extent express types then create a index.d.ts file in the express folder.

Add this code to the index.d.ts file
```ts
declare namespace Express {
  export interface Request {
    boo?: string;
  }
}
```
Then add the typeroots to the tsconfig.json file
```json
{
  "compilerOptions": {
    "typeRoots": ["./src/types"],
    ...
  }
}
```
There you have it, now you can use the boo property in your code.

And if you wanna extent other types just create a folder with the name of the type and create an index.d.ts file in it.

## Running the project

```bash
git clone https://github.com/ofcljaved/ts-express-example.git
cd ts-express-example
npm install
npm run dev
```

Open your browser and go to http://localhost:3000

Happy coding! Bye bye
