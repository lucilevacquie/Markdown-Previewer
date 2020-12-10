import React, {useState} from "react";
import './App.css';


// const defaultText =
//   '# This is a header\n## This is a sub header\nThis is a a [link](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)\n`This is inline code`\n <pre><code>var codeblock = "This is a code block"</code></pre> \n![Cute puppy image](https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Puppy-names-772155.jpg)\n**This text is bolded**\n>This is a blockquote\n- This is a list item'
// const defaultText = '# header ## subheader [link]() `code` <pre><code>block</code></pre> ![Pup]() 1. list **bold**'
let defaultText = '# header\n'
defaultText += '## subheader\n'
defaultText += '[link](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)\n'
defaultText += '> blockquote\n\n'
defaultText += '`inline code`\n'
defaultText += '**bold text**\n\n'
defaultText += '    javascript\n\n'
defaultText += '- item 1\n\n'
defaultText += '![Cute puppy image](https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Puppy-names-772155.jpg)\n'

const MarkdownPrev = () => {

  const [text, setText] = useState(defaultText)

  window.marked.setOptions({
    breaks: true
  })

  return(
    <div id="wrapper">
      <h1>Markdown Previewer</h1>
      <textarea id="editor" onChange={e => setText(e.target.value)}>{text}</textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: window.marked(text)}}></div>
    </div>
  )
}

export default MarkdownPrev;
