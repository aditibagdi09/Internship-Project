import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function EditText({ body, setBody }) {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setBody(quillRef.current.firstChild.innerHTML);
        //sessionStorage.setItem("body", JSON.stringify(value));
      });
    }
  }, [quill, body, setBody, quillRef]);
  return (
    <div>
      <div ref={quillRef} />
    </div>
  );
}
export default EditText;
