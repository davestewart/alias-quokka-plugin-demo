# Quokka / ES6 / Scratch file demo

## Abstract

Demo project to test Quokka local ES6 imports in a scratch file.

To enable Quokka to run local files, you need 4 things:

- Quokka to be installed
- the Quokka Alias plugin to be installed in your project
- a Quokka config file in your project root
- alias definitions in the config file


## Setup

#### Quokka

Install Quokka using the instructions at [Quokka JS](https://quokkajs.com).


#### Quokka Alias plugin

If the PR to the original plugin has been merged, you can install via NPM:

```
npm install alias-quokka-plugin
```

Otherwise, install from Dave's GitHub:

```
npm install --save-dev davestewart/alias-quokka-plugin#master
```

#### Quokka config file

Copy the `.quokka` configuration file to the root of your project.


#### Alias configuration

Add aliases to the `alias` section of the file:

```
{
  "babel": true,
  "plugins": ["alias-quokka-plugin"],
  "alias": {
    "@/": "./src/",
    "utils": "./src/utils"
  }
}
```

## Demo

With all that set up, create a new scratch file in Webstorm.

Add the following code, which imports some local dependencies, and tests them:

```js
import greeting from '@/greeting'
import { foo } from 'utils'

console.log(greeting)
foo()
```

Run Quokka using the panel or right-clicking and selecting "Start Quokka".

You should see the text `hello world` next to the `console.log` and the Quokka console should display the following output:

```
Quokka #3 (node: v8.11.3, babel: v6.26.3, plugins: alias-quokka-plugin)

hello world at _greeting2.default quokka.es6:4:0

running foo ! 
```


## Troubleshooting

In your own project, you may get errors, likely to do with paths or ES6 compilation

### Paths

If aliases are not correctly set up, you will get errors regarding finding files.

If the path identified in the error is **the same** as the path in the import, then it means a matching alias was not found, so the plugin was not invoked:

```js
import bar from 'foo/bar'
```
```
> Cannot find module 'foo/bar'
```

If the alias was resolved successfully, but your path is incorrect, then Quokka Alias will warn you:

```js
import bar from '@/xxx'
```
```
> Cannot resolve module "./src/xxx" via aliased path "@/xxx"
```

#### ES6

If you're using ES6 and Babel is not set up in your local project, you'll get some confusing error messages.

You're importing an ES6 module without ES6 support (via Babel), the compiler doesn't know what to do with the word `import`:.

```
> Unexpected token import
```

Either export your modules using the `module.exports` format or set up for ES6.

There are various other error outputs, but it should become apparent reasonably quickly if the errors are plugin related, or babel related.


## References

- Modified plugin (to support partial paths)<br>
  https://github.com/davestewart/alias-quokka-plugin

- Original plugin<br>
  https://github.com/Gozala/alias-quokka-plugin

- Sample ES6 project used to create this repo<br>
  https://github.com/vmasto/express-babel
  
