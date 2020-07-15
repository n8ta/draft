import React from 'react';
import createChannel from "../../../channels/consumer"
import PropTypes from 'prop-types';
import CreateDraft from './CreateDraft'
import SelectDraft from './SelectDraft'

export default class Draft extends React.Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
    };


    constructor(props) {
        super(props);
        this.state = {drafts: []};
    }

    componentDidMount() {
        const append = (new_drafts) => {
            const combined = new_drafts.concat(this.state.drafts)
            this.setState({drafts: combined})
        }
        const chat = createChannel("DraftChannel", {
            received(data) {
                console.info(data);
                append(data.drafts)
            }
        });
    }

    createDraft(name) {
        let auth_token = document.querySelector("meta[name='csrf-token']").content;
        fetch("/drafts", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': auth_token,
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({name: name}),
            credentials: 'same-origin',
        }).then(res => res.json()).then((result) => {
            console.info(result)
        }).catch((res) => {
            console.error("FAILED", res);
        })
    }

    render() {
        return (
            <div className={'d-flex justify-content-center row'}>
                <div className={'col-md-6'}>
                    <p className={'text-right'} title={this.props.uuid}>You: {this.props.username}</p>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <CreateDraft submit={this.createDraft}/>
                        </div>
                        <div className={'col-md-6'}>
                            <h1>Current Drafts</h1>
                            {this.state.drafts.map((info) => <SelectDraft key={info.id} {...info} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
