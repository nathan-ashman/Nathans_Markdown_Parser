import React, {useState } from 'react';
import Marked from 'react-markdown';
import './Markdown.css'

/**
 * dummy input we want to implement:
 * # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, `<div></div>`, between 2 backticks.

```
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '```' && lastLine == '```') {
    return multiLineCode;
  }
}
```

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

 * 
 */

function Markdown() {
  let [parsedVal, setParse] = useState("");
  let onChangeHandler = (e)=>{
    let input = e.target.value;
    let parseJSX = <Marked children={input}/>
    setParse(parseJSX)
    
  }
  return (
    <div>
      <div id="editorSection" className="container">
        <div className="row">
          <div className="col-sm" id="editorTitle">
            Editor
          </div>
        </div>
        <div className="row">
          <textarea id="editor" onChange={onChangeHandler}></textarea>
        </div>
      </div>



      <div id="previewSection" className="container">
        <div className="row">
          <div className="col-sm" id="previewTitle">
            Preview
          </div>
        </div>
        <div className="row"> 
          <div id="preview">{parsedVal}</div>
        </div>
      </div>
    </div>

  );
}

export default Markdown;
