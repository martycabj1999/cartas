import React, { useState } from 'react'
import Card from '../../card/components/Card'
import '../styles/Board.css'

import { Container, Grid} from '@material-ui/core'

const Board = () => {

    const cartas = [1,2,3,4,5,6]

    return ( 
        <Container className="board" >
            <Grid container justify="center" xs={12} sm={8} >
                {
                    cartas.map((carta) => (
                        <Grid style={{ margin: 2 }} key={carta} xs={12} sm={3} item>
                            <Card/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}
 
export default Board;