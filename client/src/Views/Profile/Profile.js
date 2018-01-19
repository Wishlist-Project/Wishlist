import React, { Component } from 'react';
import MyCard from '../../Components/ProfileCard';
import { Container, Grid, Segment } from 'semantic-ui-react'

class Profile extends Component {
    state = {
        loading: true,
        account: {}
    };

    componentDidMount = () => {
        this.setState({
            account: {
                username: sessionStorage.getItem('userName'),
                fullName: sessionStorage.getItem('fullName'),
                dob: sessionStorage.getItem('dob'),
                email: sessionStorage.getItem('email'),
                joinDate: sessionStorage.getItem('joinDate')
            }
        })
    }
    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Grid columns={3} divided>
                    <Grid.Row stretched>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            <Segment textAlign='center' color='blue'>
                                <MyCard account={this.state.account} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Segment textAlign='center' color='blue'>
                                <h1>Profile Details</h1>
                                <hr />
                                <h5>Username:{this.state.account.username}</h5>
                                <h5>Email: {this.state.account.email}</h5>
                                <h5>DOB: {this.state.account.dob}</h5>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Segment textAlign='center' color='blue'>
                                <h1>Wishlist Items</h1>
                                <hr />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}// end of class

export default Profile;