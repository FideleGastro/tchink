import React, { Component } from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridBar from './BarpageGrid';

const Block = styled.div`
    width: 95%;
    min-height: 70%;
    background: yellow;
    display: flex;
    align-items: start;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const Text = styled.h4`
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

const styles = theme => ({
    root: {
        width: '95%',

    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class BarpageList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Block>
                    <Content>
                        <Title>LES BARS</Title>
                        <div className={classes.root}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Category</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <GridBar />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Category</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <GridBar />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Category</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <GridBar />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </Content>
                </Block>
            </>
        )
    }
}

export default withStyles(styles)(BarpageList);
