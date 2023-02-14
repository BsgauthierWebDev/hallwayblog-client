import React, {useState} from 'react';
import ReactQuill  from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const New = () => {
  const [value, setValue] = useState('');

  return (
    <div className = 'new-post'>
      <div className = 'content'>
        <input type = 'text' placeholder = 'Title' />
        <div className = 'editorContainer'>
          <ReactQuill className = 'editor' theme = 'snow' value = {value} onChange = {setValue} />
        </div>
      </div>
      <div className = 'menu'>
        <div className = 'item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style = {{display: 'none'}} type = 'file' id = 'file' name = ''  />
          <label className = 'file' htmlFor = 'file'>Upload Image</label>
          <div className = 'buttons'>
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className = 'item'>
          <h1>Category</h1>
          <div className = 'category'>
            <input type="radio" name = 'cat' value = 'addiction' id = 'addiction' />
            <label htmlFor="addiction">Addiction</label>
          </div>
          <div className = 'category'>
            <input type="radio" name = 'cat' value = 'confession' id = 'addiction' />
            <label htmlFor="addiction">Confession</label>  
          </div>
          <div className = 'category'>
            <input type="radio" name = 'cat' value = 'fear' id = 'addiction' />
            <label htmlFor="addiction">Fear</label>
          </div>
          <div className = 'category'>
            <input type="radio" name = 'cat' value = 'trauma' id = 'addiction' />
            <label htmlFor="addiction">Trauma</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New