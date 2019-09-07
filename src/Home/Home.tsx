import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Button} from '@material-ui/core'
import HomeBar from './HomeBar/HomeBar'
import Box from "@material-ui/core/Box";
import Home_AD from './Home_AD/Home_AD'


export interface Props {
}

class Home extends React.Component<Props>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <React.Fragment>
                <CssBaseline/>
                <HomeBar/>
                <Box style={{marginLeft:"80%",marginTop:"2rem"}}>
                    <Button variant="contained" color="primary">
                        + 发起活动
                    </Button>
                </Box>
                <Home_AD/>
            </React.Fragment>
        )
    }
}

export default Home