// ==UserScript==
// @name          GB Reddit
// @description   Style & Layout modification for Reddit
// @match         https://*.reddit.com/*
// @version       1.6
// @updateURL     https://github.com/Gilbert-S/UserScripts/raw/main/gb.reddit.userscript.js
// @downloadURL   https://github.com/Gilbert-S/UserScripts/raw/main/gb.reddit.userscript.js
// @grant         GM.addStyle
// ==/UserScript==

const styles = `

#header {
  filter: hue-rotate(180deg) invert(1);
  zoom: 1.2;
}

body {
  background-color:  black!important;
}

.listing-chooser {
  display: none;
  width: 0;
  max-width: 0;
}

.thing.thing {
  position: relative;
  background-color: #161618;
  border: 1px solid #242428;
  border-radius: 2px;
  margin: 4px 0;
}

.child .thing.thing {
border: unset;
}

.thing .title.title {
    color: #F4EEE0;
}

a.author.author {
  color: #bd8774;
}

form {
background: unset!important;
}

input, textarea {
background: #161618!important;
color: white!important;
}

.side.side {
  z-index: 1;
  position: relative;
  max-width: min(300px, calc(100vw - 850px));
  width : unset;
  background-color: #242428;
  box-shadow: -2px 0 10px 0 #0005;
  padding-left: 10px;
  overflow: hidden;
}


.thing a.thumbnail {
  width: 140px;
  pointer-events: none;
}

.thing a.thumbnail img {
  width: 140px;
  height: auto;
}

.thing .rank,
.thing .post-sharing-button.post-sharing-button.post-sharing-button,
.thing .give-gold-button.give-gold-button.give-gold-button,
.thing .crosspost-button.crosspost-button.crosspost-button{
  display: none;
}

.thing .expando-button {
  position: absolute;
  top: 0;
  left: 70px;
  width: 140px;
  height: 100%;
  opacity: 0;
}

.thing.link .midcol {
  position: relative;
  left: -6px;
}

.thing.link .midcol .arrow {
  zoom: 1.5;
}

.thing a.comments {
  font-size: 15px;
  padding: 4px 10px!important;
}

#sr-bar, a#header-img {
  display: none!important;
}

body.comments-page .side {
  display: none;
}

.morelink {
    border: unset;
    background: unset;
    background-image: unset;
}

.morelink .nub {
    display: none;
}

.md.md {
    color: #F4EEE0;
}

.md.md blockquote {
    color: #817c73;
    border-left: 3px solid #817c73;
}

.md.md a {
    color: #588bbf;
}

.md.md code, .md.md pre {
    border: 1px solid #e6e6de2b;
    background-color: #0000001f;
}

.usertext-body.usertext-body .md.md.md {
    background: #242428;
    border-radius: 2px;
    border: 0px;
}

.comment .child.child.child, .comment .showreplies.showreplies.showreplies {
    border-left: unset;
}

.comment .entry {
  display: grid;
  grid-template-areas:
    "tagline buttons"
    "main  main"
    "form  form";
  grid-template-columns: auto 1fr;
}

.tagline {
  grid-area: tagline;
}

.flat-list {
  grid-area: buttons;
  padding-left: 10px;
}

.flat-list {
  grid-area: buttons;
}

.entry > form {
grid-area: main;
padding: 5px 0 5px 15px;
background: #242428!important;
border-radius: 2px;
margin: 5px 0 10px 0;
}

.reportform {
grid-area: form;
}

.expand {
font-size: small;
}
`


GM.addStyle(styles)

