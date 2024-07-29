/**
 * The line declare module '*.vue'; in the shims-vue.d.ts file is a TypeScript declaration that 
 * tells the TypeScript compiler how to handle .vue. Example: without this, importing a .vue file
 * would result in an error.
 * *.vue pattern is a wildcard that matches any file with a .vue extension.
 * By declaring module '*.vue';, TypeScript treats the contents of any .vue file as having an 
 * implicit any type. This means TypeScript won't perform type checking on the contents of the .vue 
 * files, but it will allow you to import them
 */
declare module '*.vue';