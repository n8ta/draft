import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', submitting: false}
    }

    submit(e) {
        e.preventDefault()
        this.setState({submitting: true})
        let auth_token = document.querySelector("meta[name='csrf-token']").content;
        fetch("/sessions", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': auth_token,
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({username: this.state.username}),
            credentials: 'same-origin',
        }).then(res => res.json()).then((result) => {
            if (result['status'] === 'success') {
                Turbolinks.visit(result['url']);
            } else if (result['status'] === 'failed') {
                this.setState({submit_error_text: result['msg']})
            }
        }).catch((res) => {
            this.setState({submit_error_text: 'Unable to submit due to a network error'});
        }).finally(() => {

            this.setState({submitting: false})

        })
    }

    render() {
        return (
            <div className={'d-flex justify-content-center row'}>

                <form className={'col-md-5'} onSubmit={(e) => this.submit(e)}>
                    <h1>Drafting</h1>
                    <div className={'form-group'}>
                        <label>Enter a username</label>
                        <input onChange={(e) => {
                            this.setState({username: e.target.value})
                        }}
                               className={'form-control'} value={this.state.username} type={'name'}/>
                        {this.state.submit_error_text}
                    </div>
                    <button disabled={this.state.username.length < 2}
                            type="submit"
                            className={'btn btn-primary'}>Submit
                    </button>
                </form>
            </div>
        )
    }
}
