import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Icon  from '@material-ui/core/Icon';

class PlotSearch extends React.Component {

    render() {
        return (
            <div className="plot-search">
                <Grid alignItems="center" wrap="nowrap" container spacing={1} alignItems="flex-end">
                <Grid item className="grid-items">
                    <Icon style={{fontSize: 30, color: '#02600b'}}>nature</Icon>
                </Grid>
                <Grid item className="MuiGrid-container">
                    <TextField id="input-with-icon-grid" {...this.props} label="Search Plants" />
                </Grid>
                </Grid>
            </div>
        );
    }
}


export default PlotSearch;