import React, {useState} from "react";

const CreateDraft = (props) => {
    const [name, setName] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.submit(name);
        }}>
            <h1>Start a draft</h1>
            <div className={'form-group'}>
                <input type={'text'}
                       className={'form-control mb-2'}
                       placeholder={'Enter a name'}
                       onChange={(e) => setName( e.target.value)}
                       value={name}/>
                <button disabled={name === ""}
                        type={'submit'}
                        className={'btn btn-primary'}>Start a Draft
                </button>
            </div>
        </form>
    )
}

export default CreateDraft