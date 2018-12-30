import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Block = styled.div`
    width: 100%;
    min-height: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; 
    text-align: center;
`;

const Title = styled.h2`
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    color: #484848;
    margin: 0;
`;

const Text = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #484848;
`;

const styles = {
    card: {
        minWidth: 200,
        margin: '4px',

    },
    maincard: {
        minWidth: 408,
        margin: '4px',

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,

    },
    pos: {
        marginBottom: 12,
    },
};

class HomepageOfferBlock extends Component {

    render() {
        const { classes } = this.props;
        return (
            <>
                <Block>
                    <Content>
                        <Card className={classes.maincard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Réservé aux 500 premiers inscrits
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    OFFRE1
                                    12,90€
                                    9,90€
                                </Typography>

                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">CTA</Button>
                            </CardActions> */}
                        </Card>

                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    ETUDIANT
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    OFFRE2
                                        12,90€
                                </Typography>

                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">CTA</Button>
                            </CardActions> */}
                        </Card>


                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Normal
                                </Typography>
                                <Typography variant="h5" component="h2">
                                OFFRE3
                                    12,90€
                                   
                                </Typography>

                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">CTA</Button>
                            </CardActions> */}
                        </Card>
                    </Content>
                </Block>
            </>
        )
    }
}

export default withStyles(styles)(HomepageOfferBlock);
