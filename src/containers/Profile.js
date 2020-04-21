import React, { Component } from 'react';
import { Link } from '../components/Link/index';
import './Profile.css';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true,
        }
    }
    async componentDidMount() {
        console.log('fhgfhfhgghf')
        const profile = await fetch('https://api.github.com/users/Mrezagolbaba');
        const profileJSON = await profile.json();
        console.log('profile',profileJSON)

        if (profileJSON) { this.setState({
            data: profileJSON,
            loading: false,
        })
        } }
    render() {
        const { data, loading } = this.state;
        if (loading) {
            return <div>Loading...</div>;
        }
        return (

        <div className='Profile-container'>
            <img className='Profile-avatar' src={data.avatar_url}/>
                <ul>
                    <li><strong>home_url:</strong><Link url={data.html_url} title='Github URL' /></li>
                    <li><strong>repos_url:</strong> {data.repos_url}</li>
                    <li><strong>name:</strong> {data.name}</li>
                    <li><strong>company:</strong> {data.company}</li>
                    <li><strong>location:</strong> {data.location}</li>
                    <li><strong>email:</strong> {data.email}</li>
                    <li><strong>bio:</strong> {data.bio}</li>
                </ul>
            </div>
        );
    } }
export default Profile;
