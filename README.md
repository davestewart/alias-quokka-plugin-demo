# Quokka Alias demo

## Intro

### Abstract

This is a demo project to test aliased imports in Quokka using the Alias Quokka Plugin.
 
The project is split into 3 sub-folders, for [ES5](./es5), [ES6](./es6) and [TypeScript](./ts) as each language's NPM dependencies are different, and need to be set up for Quokka to work.

Each sub-folder is its own root repository, and you should open these folders in your IDE of choice and test Quokka there.


### Prerequisites

To enable Quokka to import and run local files via alias, you need 4 things:

- for Quokka to be installed globally
- the Quokka Alias plugin to be installed in your project
- a Quokka config file in your project root
- alias definitions in the config file


## Usage

To use the plugin in your own project, follow the steps below.

#### Quokka

Install Quokka using the instructions at [Quokka JS](https://quokkajs.com).


#### Plugin

If the PR to the original plugin has been merged, you can install via NPM:

```
npm install alias-quokka-plugin
```

Otherwise, install from the GitHub fork:

```
npm install --save-dev davestewart/alias-quokka-plugin#master
```

#### Config

Copy or create a `.quokka` configuration file in the root of your project.


#### Aliases

Add aliases to the `alias` section of the file, for example:

```
{
  "babel": true,
  "plugins": ["alias-quokka-plugin"],
  "alias": {
    "@/": "./src/",
    "@/classes/": "./src/classes/"
  }
}
```

Note that the `@` character is a convention, not a requirement.

## Demo

See the individual sub-folders for working examples for:

- [ES5](./es5)
- [ES6](./es6)
- [TypeScript](./ts)


## Troubleshooting

If aliases are not correctly set up, you will get errors regarding finding files.

If the path identified in the error is **the same** as the path in the import, then it means a matching alias was not found, so the plugin was not invoked:

```js
import bar from '@/foo/bar'
```
```
> Cannot find module '@/foo/bar'
```

If the alias was resolved successfully, but your path is incorrect, then Quokka Alias will warn you:

```js
import bar from '@/classes/xxx'
```
```
> Cannot resolve module "./src/classes/xxx" via aliased path "@/classes/xxx"
```


## References

- Modified plugin (to support partial paths)<br>
  https://github.com/davestewart/alias-quokka-plugin

- Original plugin<br>
  https://github.com/Gozala/alias-quokka-plugin

