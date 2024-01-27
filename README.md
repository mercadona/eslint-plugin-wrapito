# eslint-plugin-wrapito

An ESLint plugin for wrapito

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-wrapito`:

```sh
npm install eslint-plugin-wrapito --save-dev
```

## Usage

Add `wrapito` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "wrapito"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "wrapito/no-debug-requests": "warn"
    }
}
```



## Rules

<!-- begin auto-generated rules list -->

| Name                                                 | Description                                       |
| :--------------------------------------------------- | :------------------------------------------------ |
| [no-debug-requests](docs/rules/no-debug-requests.md) | Prevent commiting tests with debugRequests calls. |

<!-- end auto-generated rules list -->


