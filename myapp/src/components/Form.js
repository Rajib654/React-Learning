import React from 'react';
export default class Form extends React.Component {
    state = {
        title: '',
        text: "JavaScript is Awesome",
        libraries: "React",
        isAwesome: true,
    }
    handleChange = (event) => {
        if (event.target.type === "text") {
            this.setState({
                title: event.target.value,
            })
        } else if (event.target.type === 'textarea') {
            this.setState({
                text: event.target.value,
            })
        } else if (event.target.type === 'select-one') {
            this.setState({
                libraries: event.target.value,
            })
        } else if (event.target.type === 'checkbox') {
            this.setState({
                isAwesome: event.target.checked,
            })
        } else {
            console.log(`Nothing Here`);
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        const { title, text, libraries, isAwesome } = this.state;

        console.log(title, text, libraries, isAwesome);
    }
    render() {
        const { title, text, libraries, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' placeholder='JavaScript' value={title} onChange={this.handleChange} />
                    <br />
                    <br />
                    <textarea name='text' value={text} onChange={this.handleChange} />
                    <br />
                    <br />
                    <select value={libraries} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} /><span>I agree all about terms & condition</span>
                    <br />
                    <br />
                    <input type='submit' value='Submit' />
                </form>


            </div>
        )
    }
}