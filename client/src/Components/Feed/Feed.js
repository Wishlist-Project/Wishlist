import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, Container } from 'semantic-ui-react';
import FeedEvent from "../FeedEvent";
import SearchBar from "../SearchBar";
import Comment from "../Comments"

const MyFeed = () => (
    <Container>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={10}>
                    <Segment color='blue'>
                        <FeedEvent who={"Sahm"} what={"added a gift"} when={"Like 15 minutes ago"} />
                        <FeedEvent who={"Ren"} what={"liked a gift"} when={"Like 20 minutes ago"} />
                        <FeedEvent who={"Q"} what={"stole a gift"} when={"Like 15 minutes ago"} />
                        <Comment />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={6}>
                    <Segment color='blue'>
                        <SearchBar />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

export default MyFeed;