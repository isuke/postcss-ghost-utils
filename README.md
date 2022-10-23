# postcss-ghost-utils [!["Build Status"](https://travis-ci.org/isuke/postcss-ghost-utils.svg?branch=master)](https://travis-ci.org/isuke/postcss-ghost-utils) [!["npm"](https://img.shields.io/npm/v/postcss-ghost-utils.svg)](https://www.npmjs.com/package/postcss-ghost-utils) [!["git-consistent friendly"](https://img.shields.io/badge/git--consistent-friendly-brightgreen.svg)](https://github.com/isuke/git-consistent)

<img align="center" src="https://raw.githubusercontent.com/isuke/postcss-ghost-utils/images/title-plain.png">

[!["node v14"](https://img.shields.io/badge/node-v14-026e00.svg)](https://nodejs.org/ja/download/releases/)
[!["node v16"](https://img.shields.io/badge/node-v16-026e00.svg)](https://nodejs.org/ja/download/releases/)
[!["node v17"](https://img.shields.io/badge/node-v17-026e00.svg)](https://nodejs.org/ja/download/releases/)
[!["node v18"](https://img.shields.io/badge/node-v18-026e00.svg)](https://nodejs.org/ja/download/releases/)

postcss-ghost-utils is a [PostCSS](https://github.com/postcss/postcss) plugin.

This plugin can give you useful css syntax.
**It is NOT include old css technique (ex. clearfix).**

## Usage

### Install

```sh
$ npm install -D postcss postcss-ghost-utils
# or
$ yarn add -D postcss postcss-ghost-utils
```

`.postcss.config.js`
```js
module.exports = {
  plugins: [
    require('postcss-ghost-utils')
  ]
}
```

## Rule List

### font-size-line-height

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost font-size-line-height(16px, 2px);
}
```

</td>
<td>

```css
.one {
  font-size: 16px;
  line-height: calc(16px + 2px * 2);
}
```
</td>
</tr>
</table>

### new-line

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost new-line;
}
```

</td>
<td>

```css
.one {
  white-space: pre-wrap;
  word-wrap: break-word;
}
```
</td>
</tr>
</table>

### truncate

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost truncate;
}

.two {
  @ghost truncate('-');
}
```

</td>
<td>

```css
.one {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.two {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: '-';
}
```
</td>
</tr>
</table>

### margin-left-right

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost margin-left-right(16px);
}
```

</td>
<td>

```css
.one {
  margin-left: 16px;
  margin-right: 16px;
}
```
</td>
</tr>
</table>

### margin-top-bottom

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost margin-top-bottom(16px);
}
```

</td>
<td>

```css
.one {
  margin-top: 16px;
  margin-bottom: 16px;
}
```
</td>
</tr>
</table>

### padding-left-right

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost padding-left-right(16px);
}
```

</td>
<td>

```css
.one {
  padding-left: 16px;
  padding-right: 16px;
}
```
</td>
</tr>
</table>

### padding-top-bottom

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost padding-top-bottom(16px);
}
```

</td>
<td>

```css
.one {
  padding-top: 16px;
  padding-bottom: 16px;
}
```
</td>
</tr>
</table>

### border-left-right

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost border-left-right(2px solid black);
}
```

</td>
<td>

```css
.one {
  border-left: 2px solid black;
  border-right: 2px solid black;
}
```
</td>
</tr>
</table>

### border-top-bottom

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost border-top-bottom(2px solid black);
}
```

</td>
<td>

```css
.one {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
```
</td>
</tr>
</table>

### border-top-radius

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost border-top-radius(4px);
}

.two {
  @ghost border-top-radius(4px 2px);
}
```

</td>
<td>

```css
.one {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.two {
  border-top-left-radius: 4px 2px;
  border-top-right-radius: 4px 2px;
}
```
</td>
</tr>
</table>

### border-bottom-radius

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost border-bottom-radius(4px);
}

.two {
  @ghost border-bottom-radius(4px 2px);
}
```

</td>
<td>

```css
.one {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.two {
  border-bottom-left-radius: 4px 2px;
  border-bottom-right-radius: 4px 2px;
}
```
</td>
</tr>
</table>

### border-left-radius

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost border-left-radius(4px);
}

.two {
  @ghost border-left-radius(4px 2px);
}
```

</td>
<td>

```css
.one {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.two {
  border-top-left-radius: 4px 2px;
  border-bottom-left-radius: 4px 2px;
}
```
</td>
</tr>
</table>

### border-right-radius

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost border-right-radius(4px);
}

.two {
  @ghost border-right-radius(4px 2px);
}
```

</td>
<td>

```css
.one {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.two {
  border-top-right-radius: 4px 2px;
  border-bottom-right-radius: 4px 2px;
}
```
</td>
</tr>
</table>

### size

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost size(160px);
}

.two {
  @ghost size(160px, 240px);
}
```

</td>
<td>

```css
.one {
  width: 160px;
  height: 160px;
}

.two {
  width: 160px;
  height: 240px;
}
```
</td>
</tr>
</table>

### circle

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost circle(200px);
  background-color: #ff0000;
  border: 10px solid #ffffff;
}
```

</td>
<td>

```css
.one {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ff0000;
  border: 10px solid #ffffff;
}
```
</td>
</tr>
</table>

### transition

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
.one {
  @ghost transition(100ms, ease-in, color);
}

.two {
  @ghost transition(100ms, ease-in, color, background-color, border-color);
}
```

</td>
<td>

```css
.one {
  transition: 100ms ease-in color;
}

.two {
  transition: 100ms ease-in color, 100ms ease-in background-color, 100ms ease-in border-color;
}
```
</td>
</tr>
</table>

## Experimental Rule List

The following rules may not work with not pure css ex) LESS, SASS.

### all-buttons

<table>
<tr>
<td> Input </td> <td> Output </td>
</tr>
<tr>
<td>

```css
@ghost all-buttons {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: 0;
}

@ghost all-buttons(hover) {
  transform: translateY(-2px);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

@ghost all-buttons(active) {
  transform: none;
  box-shadow: none;
}

@ghost all-buttons(focus) {
  transform: translateY(-2px);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
```
</td>
<td>

```css
button, [type='button'], [type='reset'], [type='submit'] {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: 0;
}

button:hover, [type='button']:hover, [type='reset']:hover, [type='submit']:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button:active, [type='button']:active, [type='reset']:active, [type='submit']:active {
  transform: none;
  box-shadow: none;
}

button:focus, [type='button']:focus, [type='reset']:focus, [type='submit']:focus {
  transform: translateY(-2px);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
```
</td>
</tr>
</table>
