A new masonary component powered by CSS to be fast loading and free of jQuery or other dependacies. Build specifically for React projects.

[todo image: react logo + masonary grid graphic]

### 😎 Why? 

Existing solutions like React wrapped DeSandro Masonry, while great had downfalls in our react app. It required rendering the DOM on load and on during resize before determining the layout which lead to a slow, laggy experiance that would occasionally break the layout completely during resize. It also had depanancies on jQuery and while being feature packed it showed in the large file size.

To combat this, we looked into the latest techniques using just CSS, including flexbox & grid which fell short outside of basic images. CSS columns came the closest and while trying to work around the ordering issue (orders down each column before reflowing to the next) the reflow and loss in ordering still occured when working with large elements.

Plain ol, div columns to the resque!

*`react-masonry-css`* Is a React Component with a simple interface to order items into the desired columns at specified breakpoints. With minimal CSS this leads to a quick, reliable solution that also has great browser support and performance.

#### 🏳️What doesn't this do

* Animate when sorting
* Work with elements with different widths
* Box algorithm (not really needed if your elements have the same width)
* Break when resizing (at least, thats the goal)
* Load and render the DOM before sorting out the layout <= actually thats a plus

#### 😄 What does this do
* Responsive! ..always
* IE 9+ CSS Support
* Depedancy & jQuery free
* Work with existing load animations (say fade in)
* CSS powered (Fast loading & Performant)
* Gutters


### 😲 Simple Usage

Add `react-masonry-css` to your project:
`npm install react-masonry-css --save-dev`


```JSX
import {Masonry} from 'react-masonry-css'

//...

var breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

//...

<Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
  >
  <div>My Element</div>
  <div>My Element</div>
  <div>My Element</div>
  <div>My Element</div>
</Masonry>

```

And, CSS:
```SCSS
.my-masonry-grid {
    display: flex; // required
    margin-left: -20px; // optional, gutter size
}
.my-masonry-grid_column {
    flex: 1; // required
    border-left: 20px solid transparent; // optional, gutter size
    background-clip: padding-box; // optional, unless you need a background on your column
}
// Optional, styling your items:
.my-masonry-grid_column > div {
    background: grey;
    margin-bottom: 20px; // gap between boxes
}
```

Example, outputting an array of items:

```JSX
// todo, one day
```

Example, outputting an array of different items:

```JSX
// todo, one day
```

### Options (Props)

`breakpointCols={}` optional (defaults to 2 columns)

takes an object of key values. Each key is the breakpoint and the value is the number of the number of columns

######Usage:
Inline: `breakpointCols={{default: 4, 800: 2}}`

```
var myBreakpointsAndCols = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

`breakpointCols={myBreakpointsAndCols}`
```

`className` and other props are added to the container
`columnClassName` optional, string, classname to add to each generated column
`columnAttrs` optional, object, additional attributes to add to each generated column

### Suggestions & Issues
https://github.com/paulcollett/react-masonry-css

*Contact me direct:*
https://github.com/paulcollett
paulcollett.com
