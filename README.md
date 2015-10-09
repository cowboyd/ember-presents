# Ember Presents!

Interactive, Extensible, Web-Based Slide Decks Made Easy.

## Because Your Slide Deck Is Software Too

Sometimes your slides are more than a static set of
pictures. They weave a uniform narrative from foundational text and
germaine images, combined with living pictures that act out your point
in real time.

Crafting your slides with an HTML based presentation package such as
[Reveal.js][1] has the distinct advantage of making your deck an
HTML5 application. It means breathing as much life as you can code
into each slide. However, just building it from a static HTML page
and some ad-hoc JavaScript isn't enough.

Ember Presents! takes the presentation-as-application concept to the
next level by allowing you to treat your presentation as a
full-fledged piece of modular software.

## No More Forking, Copying, Cutting and/or Pasting!

Themes, clip-art, stockpiles of shared slides, even `ember-presents`
itself are bundled as NPM packages which are installed, uninstalled
and upgraded as self-contained units with zero changes to
your presentation's codebase.

## Can I use Angular, React, or Some Other JS Library?

__Yes!__ That's the point! If it can be bundled in an NPM package, then it
can be included in your slides. Ember Presents! drives the slide
transitions and the command line tooling, but the content of each
slide is an application unto itself.

## Getting Started

Creating an application with Ember Presents! is a snap. All you need
is a recent version of npm.

```
$ npm install -g ember-presents
$ ember presentation cool-prezzie
$ cd cool-prezzie
$ npm start
Serving on http://localhost:4200/
```

You can now navigate to [http://localhost:4200][2]
and see your slide deck running!

Once you're up and running, it's time to generate your first slide. To
do this, you use builtin slide generator:

```js
ember generate slide my-very-first-slide
```

This will put your brand new slide in
`app/slides/my-very-first-slide.hbs`.





[1]: http://slid.es
[2]: http://localhost:4200
