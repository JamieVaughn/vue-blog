(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{386:function(t,e,s){"use strict";s.r(e);var a=s(41),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"bem-we-ve-always-done-it-this-way"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bem-we-ve-always-done-it-this-way"}},[t._v("#")]),t._v(" BEM - We've always done it this way.")]),t._v(" "),s("p",[t._v("For many developers, Block Element Modifier (BEM) is a beloved CSS naming convention for authoring CSS class names in a more systematic, extensible and maintainable way. It creates a taxonomy of CSS components based on a top-level "),s("strong",[t._v("block")]),t._v(" (i.e. the component wrapper) and any "),s("strong",[t._v("element")]),t._v(" within that component and finally any stylistic "),s("strong",[t._v("modifier")]),t._v(" that can be applied to one of those elements. The BEM style of authoring CSS classes looks like this:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Block__Element--Modifier")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("propery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The choice of using a single class to semantically contain the entire block-element-modifier hierarchy is intentional. It reduces sepcificity of any given HTML element so that overwriting styles later on is less tedious. Unfortunately, this comes with the unwelcome side effect of being rather verbose.")]),t._v(" "),s("p",[t._v("Now, if you only need the element or only the modifier you can reduce the verbosity like so:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Block component */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Element that depends upon the block */")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card__title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Modifier that changes the style of the block */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card--large")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Modifier that changes the style of an element within the block */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card__title--large")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("p",[t._v("But even so, this forces an incredible amount repitition within the HTML document. You must at minimum repeat the "),s("strong",[t._v("block")]),t._v(" name on nearly every child of the block... and you will likely be repeating the "),s("strong",[t._v("element")]),t._v(" names excessively, as well.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("block block--mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("block block--size-big block--shadow-yes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Gross 🤢 !")]),t._v(" "),s("p",[t._v("And if you need to add multiple modifiers, I'm not certain what the preferred syntax is between long chains of "),s("code",[t._v("block__element--modifier1--modifier2")]),t._v(" or repeating the entire thing: "),s("code",[t._v("block__element--modifier1 block__element--modifier2")]),t._v(". You can always make sure you author your "),s("strong",[t._v("modifier")]),t._v(" so that every style is comprehensive to avoid such a repetitious situation, but then you will find yourself repeating chunks of style properties elsewhere in other modifiers which share portions of styles but not 100% of those styles. CSS pre-processors can come to the rescue here to a degree by taking advantage of "),s("code",[t._v("mixins")]),t._v(" and "),s("code",[t._v("extends")]),t._v(" syntax. But it's only a band-aid... there's a verbosity problem that is at the root of this organizational rubric.")]),t._v(" "),s("p",[t._v("Is there a way to get the hierarchical organization without such verbosity? Maybe by just using simple CSS classes as they were originally intended?")]),t._v(" "),s("h2",{attrs:{id:"what-about-a-systematic-method-of-chaining-css-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-about-a-systematic-method-of-chaining-css-classes"}},[t._v("#")]),t._v(" What about a systematic method of chaining CSS classes?")]),t._v(" "),s("p",[t._v("Let's try to take the Block, Element, Modifier system from BEM but reimagined it with simpler CSS class naming conventions. What might that look like?")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Block component */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Element that depends upon the block */")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card .title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Modifier that changes the style of the block */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card.large")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Modifier that changes the style of an element within the block */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card .title.large")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("p",[t._v("Here now we significantly reduce the amount of extra text in our HTML markup because there is no need to repeat the "),s("code",[t._v("card")]),t._v(" class or the "),s("code",[t._v("title")]),t._v(" class more than a single time per component.")]),t._v(" "),s("p",[t._v("Now, we do increase the specificity of our selectors somewhat but not drastically. With CSS pre-processors the CSS actually improves more than our BEM counterpart because we do not even need to repeat the "),s("code",[t._v("card")]),t._v(" class more than once for the component with the help of nesting:")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('And we get all of that without even the need of more complicated mixins! Our modifier classes become our mixins and we define a set of "global" baseline modifiers with basic styles that all instances of the modifier would use. And then simply add the unique styles to the nested instances of the modifiers as required by the block and element they appear in. Let\'s see an example of that:')]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".link ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("letter-spacing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"where-have-i-heard-element-before"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-have-i-heard-element-before"}},[t._v("#")]),t._v(' Where have I heard "Element" before?')]),t._v(" "),s("p",[t._v("I don't know about you, but that looks nicer to me! But wait could we further reduce the verbosity by rethinking the "),s("strong",[t._v("element")]),t._v(" from the BEM convention? Why don't we just use the HTML Element tag names as the "),s("strong",[t._v("element")]),t._v(" naming convention? There's a certian semantic resonance in that, isn't there? so Our example above would be shortened to:")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h2 ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(".large ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("letter-spacing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This might not look like much of a change, but it does two things. First, we reduce our specificity back down to almost where the minimum BEM convention would have it. Second, we further reduce our HTML clutter by removing the need for more classes on "),s("strong",[t._v("element")]),t._v(" level HTML tags. And as long as the tags are children of the "),s("strong",[t._v("block")]),t._v(" there will be no style collisions! 🙌")]),t._v(" "),s("p",[t._v("One last piece of organization that is possible (but entirely optional) is separating out each of the levels of css into its own file:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Block")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Element")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("Modifier")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(".Header")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v(".title")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v(".bold")])]),t._v(" "),s("tr",[s("td",[t._v("blocks.css")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("elements.css")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("modifiers.css")])])])]),t._v(" "),s("p",[t._v("And then one more file called "),s("code",[t._v("chains.css")]),t._v(" could be added for including chained css that has three levels of chaining ("),s("code",[t._v(".Header.title.bold")]),t._v(")when its necessary to do so to overwrite other css rules or customize things further.")])])}),[],!1,null,null,null);e.default=n.exports}}]);